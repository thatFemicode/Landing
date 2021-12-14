import React from "react";
import {
  StyledLink,
  Text,
  HeadingText,
  Heading,
  ListItem,
  List,
} from "./PricingStyled";
import smiley from "./img/smiley.png";
const Pricing = () => {
  return (
    <List>
      <ListItem>
        <StyledLink href="https://github.com/yusinto/react-site-nav">
          <img src={smiley} width={24} height={24} />
          <HeadingText>
            <Heading>STAR IT!</Heading>
            <Text>github.com/yusinto/react-site-nav</Text>
          </HeadingText>
        </StyledLink>
      </ListItem>
    </List>
  );
};

export default Pricing;
