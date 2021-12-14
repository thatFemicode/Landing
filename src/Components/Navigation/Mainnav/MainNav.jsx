import React from "react";
import { MainNavStyled } from "./MainNavStyled";

const MainNav = ({ items, activeCharacter, handleCLick }) => {
  console.log(items);
  function renderItems() {
    return items.map((item) => {
      const activeClass =
        activeCharacter === item.id ? "navigation-list__item--active" : "";
      return (
        <div
          key={item.name}
          id={item.name}
          onClick={() => handleCLick(item.name)}
          className={`navigation-list__item navigation ${activeClass}`}
        ></div>
      );
    });
  }
  return <MainNavStyled>{renderItems()}</MainNavStyled>;
};

export default MainNav;
