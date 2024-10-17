"use client";

import { Card, CardBody } from "@nextui-org/react";

export const RegisterForm = ({ toggleForm }: { toggleForm: () => void }) => {
  return (
    <Card className="w-full max-w-md bg-gray-900 border border-purple-500 py-12 px-6">
      <CardBody className="p-6">
        <div className="flex flex-col items-center justify-center text-white">
          <h3 className="text-2xl font-bold mb-4">Create a New Account</h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-purple-500"
          />
          {/* Updated button with a blue border and no background */}
          <button className="w-full py-3 px-4 border border-yellow-500 text-yellow-500 rounded hover:bg-gray-800 hover:text-white focus:outline-none">
            Register
          </button>
          <p className="mt-8">
            Already have an account?{" "}
            <span
              onClick={toggleForm}
              className="text-purple-500 cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
