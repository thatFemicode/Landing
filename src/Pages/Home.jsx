import React from "react";
import Gallery from "../Components/Gallery/Gallery";
import Hero from "../Components/Hero/Hero";
import { HomeStyled } from "./HomeStyled";
import { useEffect } from "react";
const Home = ({
  refs,
  data,
  activeCharacter,
  setActiveCharacter,
  pageHeight = 100,
}) => {
  console.log(data[0].name);
  console.log(refs[data[0].name].current);
  console.log(data[0].id);
  const observerMargin = Math.floor(pageHeight / 2);
  const activeClass =
    activeCharacter === data.id ? "character-block--active" : "";
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
    // observer.observe(refs[data[0].current]);
    return () => observer.disconnect(); // Clenaup the observer if component unmount.
  }, [
    activeCharacter,
    setActiveCharacter,
    observerMargin,
    refs,
    data,
    pageHeight,
  ]);
  return (
    <HomeStyled>
      <Hero ref={refs[data[0].name]} id={data[0].id} />
      <Gallery />
    </HomeStyled>
  );
};

export default Home;
