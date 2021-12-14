import React from "react";
import {
  ListContainer,
  List,
  ListItemContent,
  LisItemHeadingText,
  ListItemHeading,
} from "./ProductsStyled";
import { Link } from "react-router-dom";
import paymentIcon from "./img/payment.png";
import billingIcon from "./img/billing.png";
import connectIcon from "./img/connect.png";
const Products = () => {
  return (
    <ListContainer>
      <List>
        <li>
          <Link to="/contact">
            <ListItemContent>
              <img src={paymentIcon} width={48} height={48} />
              <LisItemHeadingText>
                <ListItemHeading>PAYMENTS</ListItemHeading>
                <div>A complete payments platform engineered.</div>
              </LisItemHeadingText>
            </ListItemContent>
          </Link>
        </li>
        <li>
          <ListItemContent>
            <img src={billingIcon} width={48} height={48} />
            <LisItemHeadingText>
              <ListItemHeading>BILLING</ListItemHeading>
              <div>Build and scale your recurring business model.</div>
            </LisItemHeadingText>
          </ListItemContent>
        </li>
        <li>
          <ListItemContent>
            <img src={connectIcon} width={48} height={48} />
            <LisItemHeadingText>
              <ListItemHeading>CONNECT</ListItemHeading>
              <div>Everything platforms need to get sellers paid.</div>
            </LisItemHeadingText>
          </ListItemContent>
        </li>
      </List>
    </ListContainer>
  );
};

export default Products;
