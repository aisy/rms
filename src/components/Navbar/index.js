import React from 'react';
import { Button, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { Header, ListMenu, HeaderText } from './style';

const styles = {
  link: {
    color: "black"
  },
  linkActive: {
    color: "#00529C",
    fontWeight: "bold"
  }
}

// Component
const Navbar = ({ title, backgroundColor, textColor }) => {

  // render
  return (
    <>
      <Header backgroundColor={backgroundColor} textColor={textColor}>
        <HeaderText>
          {title ? title : "Title"}
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
          <NavLink to={"/login"} style={{ marginLeft: 20 }}>
            <Button type={"primary"} shape={"round"}>Sign In</Button>
          </NavLink>
        </Space>
      </Header>
    </>
  )
}


export default Navbar