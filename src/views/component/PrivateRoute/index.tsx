/* eslint-disable no-undef */
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ page }: { page: JSX.Element }) => {
  const authorized = localStorage.getItem("accessToken");

  return authorized ? page : <Navigate replace to="/" />;
};

export default PrivateRoute;
