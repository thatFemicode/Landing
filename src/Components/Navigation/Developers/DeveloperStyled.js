import styled from "styled-components";
export const RootGrid = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-template-rows: [top-space] 30px [doco-row] 60px [row-space] 20px [list-row] 60px;
  font-size: 15px;
  color: lightslategray;
`;
export const DocoLogo = styled.div`
  grid-row: doco-row / span 1;
  grid-column: 1 / span 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;
export const HeadingText = styled.div`
  grid-row: doco-row / span 1;
  grid-column: 2 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 15px;
`;
export const DocumentationHeading = styled.div`
  margin: 0;
  padding-bottom: 10px;
  color: #6772e5;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  letter-spacing: 0.025em;
`;
export const ListGroupGrid = styled.div`
  grid-row: list-row / span 1;
  grid-column: 2 / span 1;
  display: grid;
  grid-template-columns: [get-started] auto [popular-topics] auto;
  grid-template-rows: 120px;
`;
export const GetStartedGridItem = styled.div`
  grid-row: 1 / span 1;
  grid-column: get-started / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const PopularGridItem = styled.div`
  grid-row: 1 / span 1;
  grid-column: popular-topics / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const ColumnHeading = styled.div`
  color: #8898aa;
  font-size: 14px;
`;
export const List = styled.ul`
  color: #6772e5;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
`;
export const ListItem = styled.li`
  margin-top: 8px;
  margin-bottom: 8px;
`;
