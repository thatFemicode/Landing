import styled from "styled-components";
export const ListContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
`;
export const List = styled.ul`
  color: lightslategray;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const ListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  &:hover {
    opacity: 0.7;
  }
`;
export const LisItemHeadingText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 15px;
  margin-left: 10px;
`;
export const ListItemHeading = styled.div`
  margin: 0;
  color: #6772e5;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  letter-spacing: 0.025em;
`;
