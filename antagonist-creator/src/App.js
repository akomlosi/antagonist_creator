import { useState } from "react";
import "./App.css";
import { CreatureList } from "./components/creature-list";
import { Dashboard } from "./components/dashboard";

function App() {
  const [selectedConfig, setSelectedConfig] = useState({});

  return (
    <div className="App">
      <Dashboard onGenerateStart={setSelectedConfig} />
      {Object.keys(selectedConfig).length && (
        <CreatureList
          crewCount={selectedConfig.crewCount}
          difficulty={selectedConfig.difficulty}
          role={selectedConfig.role}
          type={selectedConfig.type}
        />
      )}
    </div>
  );
}

export default App;
