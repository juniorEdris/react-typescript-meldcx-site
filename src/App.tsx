import "./App.css";
import "antd/dist/antd.css";
import { FC } from "react";
import { useRoutes } from "react-router-dom";
import router from "./router";
import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {
  const routes = useRoutes(router);

  return <div className="App">{routes}</div>;
};

export default App;
