import React from "react";
import { StyledLink, Heading, ListItem, List } from "./CompanyStyled";
import aboutMeIcon from "./img/about.png";
import customersIcon from "./img/customer.png";
import jobsIcon from "./img/jobs.png";
import environmentIcon from "./img/environment.png";
const Company = () => {
  return (
    <List>
      <ListItem>
        <StyledLink href="http://reactjunkie.com">
          <img src={aboutMeIcon} width={24} height={24} />
          <Heading>ABOUT ME</Heading>
        </StyledLink>
      </ListItem>
      <ListItem>
        <img src={customersIcon} width={24} height={24} />
        <Heading>CUSTOMERS</Heading>
      </ListItem>
      <ListItem>
        <img src={jobsIcon} width={24} height={24} />
        <Heading>JOBS</Heading>
      </ListItem>
      <ListItem>
        <img src={environmentIcon} width={24} height={24} />
        <Heading>ENVIRONMENT</Heading>
      </ListItem>
    </List>
  );
};

export default Company;
