import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ConnectButton from "./component/CollectButton";
import Web3ModalProvider from "./component/Web3ModalProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Web3ModalProvider />
      <ConnectButton />
    </div>
  );
}

export default App;
