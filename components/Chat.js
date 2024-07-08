import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:3000/messages", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      fetchMessages();
    }
  }, [token]);

  const handleSendMessage = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/messages",
        { message: newMessage },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessages((prevMessages) => [response.data, ...prevMessages]);
      setNewMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ul>
        {messages.map((msg) => (
          <li key={msg._id}>
            <strong>{msg.username}:</strong> {msg.message}{" "}
            <em>{new Date(msg.createdAt).toLocaleString()}</em>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Tapez votre message ici..."
      />
      <button onClick={handleSendMessage}>Envoyer</button>
    </div>
  );
};

export default Chat;
