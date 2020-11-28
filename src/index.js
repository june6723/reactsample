import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Clock from "./Components/Clock";
import Toggle from "./Components/Toggle";
import LoggingButton from "./Components/LoggingButton";
import LoginControl from "./Components/LoginControl";
import Page from "./Components/Page";
import NumberList from "./Components/NumberList";
import Blog from "./Components/Blog";
import NameForm from "./Components/NameForm";
import EssayForm from "./Components/EssayForm";
import FlavorForm from "./Components/FlavorForm";
import Reservation from "./Components/Reservation";
import Calculator from "./Components/Calculator";
import SignUpDialog from "./Components/Dialog";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

function Element() {
  return (
    <div>
      <Page />
    </div>
  );
}
ReactDOM.render(<SignUpDialog />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
