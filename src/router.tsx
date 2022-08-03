import { Navigate, RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import SpinLoader from "./views/component/SpinLoader";
import PrivateRoute from "./views/component/PrivateRoute";

const Loader = (Component: any) => () =>
  (
    <Suspense fallback={<SpinLoader />}>
      <Component />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        theme="colored"
      />
    </Suspense>
  );

const Home = Loader(lazy(() => import("./views/Home")));
const LoginPage = Loader(lazy(() => import("./views/Login")));
const router: RouteObject[] = [
  {
    path: "/home",
    element: <PrivateRoute page={<Home />} />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default router;
