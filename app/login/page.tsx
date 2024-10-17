"use client";

import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="flex items-center justify-center pt-20">
      {/* Restrict size to the card only, no extra space */}
      <div className="flex flex-col items-center justify-center">
        {showLogin ? (
          <LoginForm toggleForm={toggleForm} />
        ) : (
          <RegisterForm toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
