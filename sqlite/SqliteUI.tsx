// SqliteUI.tsx

import React, { useState } from "react";
import { start as startMain } from "./main.js";
import { start as startWorker } from "./worker.js";

const SqliteUI: React.FC = () => {
  const [logMessages, setLogMessages] = useState<string[]>([]);

  const startSqliteProcesses = () => {
    // Start SQLite processes
    // You can call functions or perform any necessary initialization here
    // For example:
    startWorker();
    startMain();
  };

  // Function to handle messages from the worker
  const handleWorkerMessage = (e: MessageEvent) => {
    const { type, payload } = e.data;
    if (type === "log") {
      setLogMessages((prevMessages) => [...prevMessages, payload]);
    }
  };

  // Attach message listener to the worker
  const worker = new Worker("/worker.js", { type: "module" });
  worker.onmessage = handleWorkerMessage;

  return (
    <div>
      <button onClick={startSqliteProcesses}>Start SQLite Processes</button>
      <div>
        <h3>Log:</h3>
        <ul>
          {logMessages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SqliteUI;
