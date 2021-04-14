import styled from 'styled-components';

// style
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center; 
  padding: 15px 10%;
  color: ${props => props.textColor ? props.textColor : 'black'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07);
  position: fixed;
  z-index: 1;
  width: 100%;
  `;

const HeaderText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: auto;
  margin-bottom: 0;
`;

const ListMenu = styled.li`
  display: inline-block;
  padding: 0px 20px;
  font-weight: 500;
`;

export {
  Header,
  HeaderText,
  ListMenu
}