import "./App.css";
import { Content } from "./components/Content/Content";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <div className="appArea">
      <Title />
      <Content />
    </div>
  );
}

export default App;
