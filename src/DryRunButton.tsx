import React, { useState } from "react";
import { dryrun } from "@permaweb/aoconnect"; // Import dryrun function

const DryRunButton = () => {
  const [dryRunResult, setDryRunResult] = useState<any | null>(null); // State to store the dryrun result

  const dryRunProcess = async () => {
    try {
      const result = await dryrun({
        process: "a8zR1JbHsJhFyI_tURmtNyi8YT1z6oFD7cE1zvovLzc", // Replace with your ao process ID
        data: "", // Data for the dryrun (optional)
        tags: [{ name: "Action", value: "Balance" }], // Tags for the dryrun (optional)
        anchor: "1234", // Anchor for the dryrun (optional)
        // Add other optional parameters as needed
      });

      setDryRunResult(result.Messages[0]); // Set the dryrun result to state
    } catch (error) {
      console.error("Error in dryrun:", error); // Handle errors
    }
  };

  return (
    <>
      <div>
        <p className="">
          Clicking the button below that will trigger a dryrun process
          illustrating the data from the PlanetKeeper process, which is ID: tbd
        </p>
        <button
          onClick={dryRunProcess}
          style={{ backgroundColor: "#462A91", color: "white" }}
          className="py-2 px-6 text-lg font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
        >
          DryRun
        </button>{" "}
        {/* Button to trigger the dryrun process */}
        {dryRunResult && ( // Render dryrun result if available
          <div>
            <h2>DryRun Result</h2>
            <p>Target: {dryRunResult.Target}</p>
            <p>Data: {dryRunResult.Data}</p>
            <p>Anchor: {dryRunResult.Anchor}</p>
            <h3>Tags:</h3>
            <ul>
              {dryRunResult.Tags.map(
                (
                  tag: {
                    name:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | null
                      | undefined;
                    value:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | null
                      | undefined;
                  },
                  index: React.Key | null | undefined
                ) => (
                  <li key={index}>
                    {tag.name}: {tag.value}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DryRunButton;
