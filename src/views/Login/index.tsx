import { Button, Form, Input } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import API from "../utils";
import Container from "../Layout";

interface SubmitData {
  email: string;
  password: string;
}

const Login: FC = () => {
  const navigate = useNavigate();

  const [authorized, setAuthorized] = useState<string | null>(
    localStorage.getItem("accessToken") || null,
  );
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (data: SubmitData) => {
    setLoading(true);
    await API()
      .post(`/login`, data)
      .then((response: any) => {
        if (response?.data) {
          setLoading(false);
          localStorage.setItem("accessToken", response?.data);
          setAuthorized(response?.data);
        }
      })
      .catch((error: any) => {
        setLoading(false);
        toast.error(error.response.data);
      });
  };

  useEffect(() => {
    if (authorized) {
      navigate("/home");
    }
  }, [authorized, navigate]);

  return (
    <Container>
      <div className="flex flex-col justify-center items-center min-h-screen ">
        <h1 className="font-medium text-3xl capitalize text-blue-400">
          Sign in
        </h1>
        <Form
          name="loginForm"
          wrapperCol={{
            span: 15,
            offset: 4,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ padding: "30px 0" }}
          className="w-1/2"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              size="large"
              style={{ margin: "5px 0" }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password
              style={{ margin: "5px 0" }}
              placeholder="Enter your password"
              size="large"
              className="py-2"
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="w-40"
              style={{ margin: "5px 0" }}
              loading={loading}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
