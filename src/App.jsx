import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const initialData = [
    ["MONTH 1", "", "", "", ""],
    ["Onboarding Call", "", "", "", ""],
    ["Google Search Console Access", "", "", "", ""],
    ["Google Analytics Access", "", "", "", ""],
    ["Website Access", "", "", "", ""],
    ["Technical Audit", "", "", "", ""],
    ["Anchor Text and Semantic Analysis", "", "", "", ""],
    ["Competitor Analysis", "", "", "", ""],
    ["Anchor Text / URL Mapping", "", "", "", ""],
    ["Google Data Studio Report + Local Reporting Suite", "", "", "", ""],
    ["Site Level Optimization", "", "", "", ""],
    ["On Page Optimization", "", "", "", ""],
    ["Content Creation", "", "", "", ""],
    ["Content Publishing", "", "", "", ""],
    ["Premium Press Release", "", "", "", ""],
    ["Authority Niche Placements", "", "", "", ""],
    ["Review Management", "", "", "", ""],
    ["Index Links", "", "", "", ""],
    ["Video Recap", "", "", "", ""]
  ];

  const [input, setInput] = useState(initialData);

  const handleEdit = (rowIndex, colIndex, event) => {
    const newData = [...input];
    newData[rowIndex][colIndex] = event.target.value;
    setInput(newData);
    prepareDataForApi(newData);
  };

  const prepareDataForApi = (data) => {
    // Uncomment the following to enable API call
    // axios.post("http://localhost:5000", data)
    //   .then(res => {
    //     console.log("Data sent successfully:", res.data);
    //   })
    //   .catch(error => {
    //     console.error("There was an error sending the data:", error);
    //   });
    console.log(data);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Editable Table</h1>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 p-4 text-left">Task</th>
              <th className="border border-gray-300 p-4 text-left">Column 1</th>
              <th className="border border-gray-300 p-4 text-left">Column 2</th>
              <th className="border border-gray-300 p-4 text-left">Column 3</th>
              <th className="border border-gray-300 p-4 text-left">Column 4</th>
            </tr>
          </thead>
          <tbody>
            {input.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {row.map((cell, colIndex) => (
                  <td key={colIndex} className="border border-gray-300">
                    <input
                      type='text'
                      value={cell}
                      onChange={(e) => handleEdit(rowIndex, colIndex, e)}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
