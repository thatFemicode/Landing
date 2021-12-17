import React from "react";
import Gallery from "../Components/Gallery/Gallery";
import Hero from "../Components/Hero/Hero";
import { HomeStyled } from "./HomeStyled";
import { useEffect, useState, createRef, useRef } from "react";
import MainNav from "../Components/Navigation/Mainnav/MainNav";
const Home = ({
  refs,
  items,
  activeCharacter,
  setActiveCharacter,
  pageHeight = 100,
  handleCLick,
}) => {
  const observerMargin = Math.floor(pageHeight / 2);
  const id = items.map((item) => {
    const { id } = item;
    return id;
  });
  const name = items.map((item) => {
    const { name } = item;
    return name;
  });
  console.log(refs);
  const activeClass = activeCharacter === id ? "character-block--active" : "";
  useEffect(() => {
    const observerConfig = {
      rootMargin: `-${
        pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
      }px 0px -${observerMargin}px 0px`,
    };
    const handleIntersection = function (entries) {
      entries.forEach((entry) => {
        if (entry.target.id !== activeCharacter && entry.isIntersecting) {
          setActiveCharacter(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerConfig
    );
    // observer.observe(refs.name);
    return () => observer.disconnect(); // Clenaup the observer if component unmount.
  }, [
    activeCharacter,
    setActiveCharacter,
    observerMargin,
    refs,
    items,
    pageHeight,
    name,
  ]);
  // useEffect(() => {
  //   const observerConfig = {
  //     rootMargin: `-${
  //       pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
  //     }px 0px -${observerMargin}px 0px`,
  //   };
  //   const handleIntersection = function (entries) {
  //     entries.forEach((entry) => {
  //       if (entry.target.id !== activeCharacter && entry.isIntersecting) {
  //         setActiveCharacter(entry.target.id);
  //       }
  //     });
  //   };
  //   const observer = new IntersectionObserver(
  //     handleIntersection,
  //     observerConfig
  //   );
  //   // observer.observe(refs[data[0].name.current]);
  //   return () => observer.disconnect(); // Clenaup the observer if component unmount.
  // }, [
  //   activeCharacter,
  //   setActiveCharacter,
  //   observerMargin,
  //   refs,
  //   data,
  //   pageHeight,
  // ]);
  return (
    <HomeStyled>
      <MainNav
        items={items}
        activeCharacter={activeCharacter}
        handleCLick={handleCLick}
      />
      {items.map((item) => {
        const { element, id } = item;
        return (
          <div ref={refs[item.name]} id={id}>
            {element}
          </div>
        );
      })}
    </HomeStyled>
  );
};

export default Home;
