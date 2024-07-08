import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { signup } from "../store/userSlice";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

const handleSubmit = async (e) => {
  e.preventDefault();
  await dispatch(signup(username, password));
  router.push("/");
};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
