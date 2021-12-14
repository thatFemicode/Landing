import styled from "styled-components";
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 30px;
  color: lightslategray;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  a:hover {
    opacity: 0.7;
  }
`;
export const Heading = styled.div`
  margin: 0;
  color: #6772e5;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  letter-spacing: 0.025em;
`;
export const HeadingText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const Text = styled.div`
  font-size: 13px;
`;
export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.7;
  }
`;
