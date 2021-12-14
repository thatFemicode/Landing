import styled from "styled-components";
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 30px;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`;
export const Heading = styled.div`
  margin: 0;
  color: #6772e5;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  letter-spacing: 0.025em;
  margin-left: 10px;
`;
export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.7;
  }
`;
