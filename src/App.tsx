import "./App.css";
import ConnectButton from "./component/ConnectButton";
import Web3ModalProvider from "./component/Web3ModalProvider";

function App() {
  return (
    <div>
      <Web3ModalProvider />
      <ConnectButton />
    </div>
  );
}

export default App;
