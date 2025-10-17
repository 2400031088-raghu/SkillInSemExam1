import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <div className="p-6 space-y-6">
      <Card>
        <h2 className="text-2xl font-semibold text-gray-800">Welcome!</h2>
        <p className="text-gray-600">This is a flexible and reusable Card component.</p>
      </Card>

      <Card className="bg-blue-50">
        <img
          src="https://placekitten.com/200/200"
          alt="Cute kitten"
          className="rounded-xl mb-3"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Adopt Me 🐾
        </button>
      </Card>

      <Card>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Reusable</li>
          <li>Customizable</li>
          <li>Beautiful</li>
        </ul>
      </Card>
    </div>
  );
};

export default App;
