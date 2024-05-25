import "./App.css";
import io from "socket.io-client";
import Display from "./components/Display/Display";

const socket = io("/");

function App() {
  return (
    <main className="container">
      <Display />

      <form>
      </form>
    </main>
  );
}

export default App;
