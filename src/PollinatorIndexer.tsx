/*

import React, { useState } from "react";
import { connect } from "@permaweb/aoconnect";

const PollinatorIndexer: React.FC = () => {
  const [logMessages, setLogMessages] = useState<string[]>([]);
  const [pollinatorName, setPollinatorName] = useState("");
  const [pollinatorPopulation, setPollinatorPopulation] = useState("");
  const [pollinatorTrend, setPollinatorTrend] = useState("");

  const storePollinatorData = async () => {
    try {
      // Connect to specific ao nodes
      const { message } = connect({
        MU_URL: "https://mu.ao-testnet.xyz",
        CU_URL: "https://cu.ao-testnet.xyz",
        GATEWAY_URL: "https://arweave.net",
      });

      // Define the pollinator data
      const pollinatorData = {
        name: pollinatorName,
        population: pollinatorPopulation,
        trend: pollinatorTrend,
      };

      // Send the pollinator data to be stored
      await message({
        process: "pollinator.indexer",
        tags: [
          { name: "Pollinator", value: pollinatorName },
          { name: "Population", value: pollinatorPopulation },
          { name: "Trend", value: pollinatorTrend },
        ],
        data: JSON.stringify(pollinatorData),
      });

      // Update log messages
      setLogMessages((prevMessages) => [
        ...prevMessages,
        "Pollinator data stored successfully.",
      ]);
    } catch (error) {
      console.error("Error storing pollinator data:", error);

      // Update log messages
      setLogMessages((prevMessages) => [
        ...prevMessages,
        "Error storing pollinator data. See console for details.",
      ]);
    }
  };

  return (
    <div>
      <div>
        <label>
          Pollinator Name:
          <input
            type="text"
            value={pollinatorName}
            onChange={(e) => setPollinatorName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Population:
          <input
            type="text"
            value={pollinatorPopulation}
            onChange={(e) => setPollinatorPopulation(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Trend:
          <select
            value={pollinatorTrend}
            onChange={(e) => setPollinatorTrend(e.target.value)}
          >
            <option value="increasing">Increasing</option>
            <option value="staying the same">Staying the Same</option>
            <option value="decreasing">Decreasing</option>
          </select>
        </label>
      </div>
      <button onClick={storePollinatorData}>Store Pollinator Data</button>
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

export default PollinatorIndexer;


*/
