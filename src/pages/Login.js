import { Form, Input, Button, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import LayoutLogin from '../layouts/LayoutLogin'

const Login = () => {

  const { Title } = Typography;

  return (
    <div>
      <LayoutLogin>
        <Card
          bordered={false}
          style={{ width: 400, boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Title level={"1"}>Login</Title>
          </div>

          <Form
            layout={"vertical"}
            size={"large"}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input
                prefix={<UserOutlined style={{ color: "#C5C5C5" }} />}
                placeholder={"Username"}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: "#C5C5C5" }} />}
                placeholder="Password"
              />
            </Form.Item>
          </Form>
          <Form.Item>
            <Button type="primary" htmlType="submit" size={"large"} block>
              Log in
            </Button>
          </Form.Item>
        </Card>
      </LayoutLogin>
    </div>
  )
}

export default Login
