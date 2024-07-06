// frontend/_app.js
import "../styles/globals.css";
import Head from "next/head";
import store from "../store/stores";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Simple chat</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
