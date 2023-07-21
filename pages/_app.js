import { Provider } from "react-redux";
import store from "../redux/store/index.js";
import "../global/index.css";
import Header from "../Components/header/Header.jsx";
import Sidebar from "../Components/sidebar/Sidebar.jsx";
import { Context } from "../context/Context.jsx";

export const  App =({ Component, pageProps }) => {
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
export default App