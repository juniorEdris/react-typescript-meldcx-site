import { LoginOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
import { useNavigate } from "react-router-dom";
import React, { FC, useEffect } from "react";
import { toast } from "react-toastify";
import API from "./utils";

const { Header, Content, Footer } = Layout;

type ContainerProps = {
  children: React.ReactChild;
};

const Container: FC<ContainerProps> = ({ children }) => {
  const navigate = useNavigate();
  const Authorized = localStorage.getItem("accessToken");

  const handleNotify = async () => {
    const data = {
      name: "Mohammad Imthiaz Ragib",
      email: "mohammedimthiaz17@gmail.com",
      repoUrl: "https://github.com/juniorEdris/react-typescript-meldcx-site",
      message:
        "I am now a successful programmer. But back in the days I was a noobgrammer.",
    };
    API()
      .post("/notify", data)
      .then((response: any) => {
        toast.success(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!Authorized) {
      navigate("/", { replace: true });
    }
  }, [navigate, Authorized]);

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          height: "70px",
          backgroundColor: "#107FA8",
        }}
      >
        {Authorized && (
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              height: "70px",
              backgroundColor: "#107FA8",
            }}
          >
            <Button
              className="mr-2"
              type="primary"
              htmlType="button"
              onClick={handleNotify}
            >
              Notify
            </Button>
            <Button
              type="default"
              htmlType="button"
              icon={<LoginOutlined />}
              size="large"
              title="Sign out"
              onClick={() => {
                localStorage.removeItem("accessToken");
                navigate("/", { replace: true });
              }}
            />
          </div>
        )}
      </Header>
      <Content
        style={{
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>
      <Footer style={{ minHeight: "40px", backgroundColor: "#111" }} />
    </Layout>
  );
};

export default Container;
