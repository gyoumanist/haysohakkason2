import { render } from "react-dom";
import App from "./App";
import { theme } from "./Theme";
import "./index.css";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
