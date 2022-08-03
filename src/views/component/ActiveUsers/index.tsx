import { Badge, List, Typography } from "antd";
import { FC } from "react";
import { ActiveUser } from "../../interfaces";

const ActiveUsers: FC<ActiveUser> = ({ users, loading }) => {
  const listHeading = (
    <Typography.Title level={4} className="border-b-2 border-b-slate-400">
      Active Users
    </Typography.Title>
  );
  return (
    <div>
      <List
        size="default"
        header={listHeading}
        bordered
        dataSource={users}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Badge status="success" />
            <Typography.Text className="text-lg font-normal">
              {item.name}
            </Typography.Text>
          </List.Item>
        )}
        loading={loading}
        style={{ marginBottom: 20 }}
      />
    </div>
  );
};

export default ActiveUsers;
