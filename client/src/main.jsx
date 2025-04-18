import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTopWhenRouteChanges from "./components/ScrollToTopOnRouteChange.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <ScrollToTopWhenRouteChanges />
      <App />
    </Router>
  </Provider>
);
