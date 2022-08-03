import "./App.css";
import "antd/dist/antd.css";
import { FC } from "react";
import { useRoutes } from "react-router-dom";
import router from "./router";

const App: FC = () => {
  const routes = useRoutes(router);

  return <div className="App">{routes}</div>;
};

export default App;
