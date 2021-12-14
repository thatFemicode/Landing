import React from "react";
import {
  ListItem,
  List,
  ColumnHeading,
  PopularGridItem,
  GetStartedGridItem,
  ListGroupGrid,
  DocumentationHeading,
  HeadingText,
  DocoLogo,
  RootGrid,
} from "./DeveloperStyled";
import documentIcon from "./img/documentation.png";
const Developer = () => {
  return (
    <RootGrid>
      <DocoLogo>
        <img src={documentIcon} width={24} height={24} />
      </DocoLogo>
      <HeadingText>
        <DocumentationHeading>DOCUMENTATION</DocumentationHeading>
        <span>Start integrating products and tools.</span>
      </HeadingText>
      <ListGroupGrid>
        <GetStartedGridItem>
          <ColumnHeading>GET STARTED</ColumnHeading>
          <List>
            <ListItem>Elements</ListItem>
            <ListItem>Checkout</ListItem>
            <ListItem>Mobile apps</ListItem>
            <ListItem>Libraries</ListItem>
          </List>
        </GetStartedGridItem>
        <PopularGridItem>
          <ColumnHeading>POPULAR TOPICS</ColumnHeading>
          <List>
            <ListItem>Apple Pay</ListItem>
            <ListItem>Testing</ListItem>
            <ListItem>Launch checklist</ListItem>
            <ListItem>Plug-ins</ListItem>
          </List>
        </PopularGridItem>
      </ListGroupGrid>
    </RootGrid>
  );
};

export default Developer;
