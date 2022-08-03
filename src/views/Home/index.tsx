import { Col, Row } from "antd";
import { FC, useEffect, useState } from "react";
import ActiveUsers from "../component/ActiveUsers";
import ActiveUsersCounter from "../component/ActiveUsersCounter";
import { Users } from "../interfaces";
import Container from "../Layout";
import API from "../utils";

const Home: FC = () => {
  const [allDevices, setAllDevices] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);

  const getActiveUsers = async () => {
    API()
      .get("http://35.201.2.209:8000/devices")
      .then((response: any) => {
        const { data } = response;
        const { devices } = data;
        if (devices?.length > 0) {
          setAllDevices(devices);
          setLoading(false);
        }
      })
      .catch((error: any) => {
        console.log(error);

        setAllDevices([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    getActiveUsers();
    const callActiveUsersAPI = setInterval(() => getActiveUsers(), 5000);
    return () => clearInterval(callActiveUsersAPI);
  }, []);

  return (
    <Container>
      <div>
        <Row
          justify="space-evenly"
          style={{
            minHeight: "100vh",
            padding: "38px 0",
          }}
        >
          <Col
            // span={{
            //   xs: 20,
            //   md: 11,
            // }}
            span="11"
          >
            <ActiveUsers users={allDevices} loading={loading} />
          </Col>
          <Col>
            <ActiveUsersCounter activeCount={allDevices.length} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
