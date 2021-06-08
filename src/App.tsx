import "./styles.css";
import ContextMenu from "./components/ContextMenu";

const mockClick = () => alert("ITEM CLICKED");

const data = [
  { text: "1 Text to display here", onClick: mockClick },
  { text: "2 Text to display here", onClick: mockClick },
  { text: "3 Text to display here", onClick: mockClick },
  {
    text: "4 Text to display here but its very long text here",
    onClick: mockClick
  }
];

export default function App() {
  return (
    <div className="App">
      <ContextMenu data={data} />
      <h1>Hello Redemos!</h1>
      <p>This is my template for react demos!</p>
      <hr style={{ marginBottom: 92 }} />
      <p>
        <b>Right-click</b> anywhere in this window to see the context menu
      </p>
    </div>
  );
}
