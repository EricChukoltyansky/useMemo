import { useState, memo } from "react";
import "./App.css";

function Swatch({ color }: { color: string }) {
  console.log(`Swatch render ${color}`);
  return <div style={{ width: 75, height: 75, backgroundColor: color }}></div>;
}

const MemoedSwatch = memo(Swatch);

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");
  console.log(`App render ${appRenderIndex} times`);
  return (
    <div className="App">
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          App render
        </button>
      </div>
      <div>
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
          Change color
        </button>
      </div>
      <div>
        <MemoedSwatch color={color} />
      </div>
      <div>
        <MemoedSwatch color={color === "red" ? "blue" : "red"} />
      </div>
    </div>
  );
}

export default App;
