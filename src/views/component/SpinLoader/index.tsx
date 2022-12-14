import { Space, Spin } from "antd";
import { FC } from "react";

const SpinLoader: FC = () => {
  return (
    <div style={{ height: "100vh", paddingTop: "20px" }}>
      <Space
        direction="horizontal"
        align="end"
        size="large"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default SpinLoader;
