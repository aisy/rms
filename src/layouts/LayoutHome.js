import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import Navbar from '../components/common/Navbar';

const LayoutHome = ({ children }) => {

  const { Content } = Layout;

  const ContentPage = styled.div`
    margin: 90px 0 0;
    padding: 0 10% 0; 
  `;

  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      <Navbar />
      <Content>
        <ContentPage>
          {children}
        </ContentPage>
      </Content>

    </Layout>
  )
}

export default LayoutHome
