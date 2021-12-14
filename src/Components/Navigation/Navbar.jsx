import React from "react";
import { NavbarStyled } from "./NavbarStyled";
import SiteNav, { ContentGroup } from "react-site-nav";
import Products from "./Products/Products";
import Pricing from "./Pricing/Pricing";
import Company from "./Company/Company";
import Developers from "./Developers/Developer";
const Navbar = ({ items, activeCharacter, handleCLick }) => {
  function renderItems() {
    return items.map((item) => {
      const activeClass =
        activeCharacter === item.id ? "navigation-list__item--active" : "";
      const { element } = item;
      return (
        <ContentGroup
          key={item.name}
          onClick={() => handleCLick(item.name)}
          className={`navigation-list__item ${activeClass}`}
          title={item.name}
          width={(item.id === 3 ? "260" : "420", item.id === 2 && "370")}
          height={item.id === 3 ? "220" : "270"}
        >
          {element}
        </ContentGroup>
      );
    });
  }
  return (
    <NavbarStyled>
      <h1>me</h1>
      <div className="link">
        <SiteNav
          background="transparent"
          color="#000"
          fontSize="18"
          fontFamily="Helvetica, sans-serif"
          height="100%"
          className="site"
        >
          {/* <ContentGroup title="Products" width="420" height="270">
          <Products />
        </ContentGroup>
        <ContentGroup title="Developers" width="370" height="300">
          <Developers />
        </ContentGroup>
        <ContentGroup title="Company" width="260" height="220">
          <Company />
        </ContentGroup>
        <ContentGroup title="Pricing" width="420" height="300">
          <Pricing />
        </ContentGroup> */}
          {renderItems()}
        </SiteNav>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
