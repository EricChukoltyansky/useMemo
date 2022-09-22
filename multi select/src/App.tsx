import { useState } from "react";
import "./App.css";

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  console.log(`App render ${appRenderIndex} times`);
  return (
    <div className="App">
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
        App render
      </button>
    </div>
  );
}

export default App;
