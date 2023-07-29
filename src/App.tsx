import "./App.css";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Draft3";

function App() {
  return (
    <div className="App">
      <Canvas
        style={{
          background: "black",
          height: "100dvh",
          width: "100dvw",
        }}
        camera={{
          position: [200, 40, 0],
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <OrbitControls makeDefault />
        <Model />
      </Canvas>
    </div>
  );
}

export default App;
