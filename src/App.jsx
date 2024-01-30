import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">BMI Calculator</h1>

      <div className="mb-4">
        <label
          htmlFor="weight"
          className="block text-sm font-medium text-gray-600"
        >
          Weight (kg):
        </label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="mt-1 p-2 border rounded w-1/2"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="height"
          className="block text-sm font-medium text-gray-600"
        >
          Height (cm):
        </label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="mt-1 p-2 border rounded w-1/2"
        />
      </div>

      <button
        type="button"
        onClick={calculateBMI}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Calculate BMI
      </button>

      {bmi && (
        <div className="mt-4">
          <p className="text-lg font-semibold">Your BMI: {bmi}</p>
        </div>
      )}

      {/* BMI categories for reference */}
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-600">BMI Categories:</p>
        <ul className="list-disc list-inside">
          <li>Underweight: less than 18.5</li>
          <li>Normal weight: 18.5 to 24.9</li>
          <li>Overweight: 25 to 29.9</li>
          <li>Obesity: 30 or greater</li>
        </ul>
      </div>
    </div>
  );
};

export default BMICalculator;
