"use-client";

export const RegisterForm = ({ toggleForm }: { toggleForm: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white w-full max-w-md mx-auto">
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
      <button className="w-full py-2 px-4 bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded hover:bg-gradientEnd focus:outline-none">
        Register
      </button>
      <p className="mt-4">
        Already have an account?{" "}
        <span
          onClick={toggleForm}
          className="text-purple-500 cursor-pointer hover:underline"
        >
          Login here
        </span>
      </p>
    </div>
  );
};
