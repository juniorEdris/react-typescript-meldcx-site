import { Typography } from "antd";
import { FC } from "react";

interface CounterType {
  activeCount: number;
}
const ActiveUsersCounter: FC<CounterType> = ({ activeCount }) => {
  return (
    <div className="circle-orbit-container">
      <Typography.Title level={3} style={{ margin: 0 }}>
        {activeCount}
      </Typography.Title>
      <div className="inner-orbit">
        <div className="inner-orbit-cirlces" />
      </div>
    </div>
  );
};

export default ActiveUsersCounter;
