import { Provider } from "react-redux";
import store from "../redux/store/index";
import "../global/index.css";
import Header from "../Components/header/Header";
import Sidebar from "../Components/sidebar/Sidebar";
import { Context } from "../context/Context";

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Provider store={store}>
        <main>
          <header>
            <Header />
          </header>
          <section style={{ display: "flex" }}>
            <Sidebar />
            <Component {...pageProps} />
          </section>
        </main>
      </Provider>
    </Context>
  );
}
