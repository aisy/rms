import React from 'react';
import { Button, Image, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { Header, ListMenu, HeaderText, styles } from './style';

// Component
const Navbar = ({ title, backgroundColor, textColor }) => {

  // render
  return (
    <>
      <Header backgroundColor={backgroundColor} textColor={textColor}>
        <HeaderText>
          <Image
            height={"40"}
            preview={false}
            src={require("../../../assets/img/BANK_BRI_logo.svg").default}
          />
        </HeaderText>
        <Space size={"small"}>
          <ListMenu>
            <NavLink
              style={styles.link}
              activeStyle={styles.linkActive}
              exact
              to={"/"}
            >
              Home
            </NavLink>
          </ListMenu>
          <ListMenu>
            <NavLink
              style={styles.link}
              activeStyle={styles.linkActive}
              exact
              to={"/course"}
            >
              Course
            </NavLink>
          </ListMenu>
          <ListMenu>
            <NavLink
              style={styles.link}
              activeStyle={styles.linkActive}
              exact
              to={"/blog"}
            >
              Blog
            </NavLink>
          </ListMenu>
          <NavLink to={"/user/login"} style={{ marginLeft: 20 }}>
            <Button type={"primary"} shape={"round"}>Sign In</Button>
          </NavLink>
        </Space>
      </Header>
    </>
  )
}


export default Navbar