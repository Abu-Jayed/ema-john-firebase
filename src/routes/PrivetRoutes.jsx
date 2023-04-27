import React, { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div>
        <p className="text-6xl text-red-400 font-bold text-center mt-[20%]">Loading...</p>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace ></Navigate>;
};

export default PrivetRoutes;
