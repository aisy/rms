import { Row } from 'antd';

const LayoutLogin = ({ children }) => {

  return (
    <>
      <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
        {children}
      </Row>
    </>
  )
}

export default LayoutLogin
