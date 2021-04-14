import styled from 'styled-components';

const DisplayStatus = styled.div`
  align-items: center; 
  display: flex;
  flex-direction: column;
  height: 200px;
`;

const TitleStatus = styled.div`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: large;
`;

const ButtonDetail = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

export {
  DisplayStatus,
  TitleStatus,
  ButtonDetail
}