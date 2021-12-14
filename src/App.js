// import logo from "./logo.svg";
import "./App.css";
import { MainStyled } from "./MainStyled";
import { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navigation/Navbar";
import data from "./data";
import React, { useState, useEffect, createRef } from "react";
import CustomRoute from "./Components/CustomSwitch/CustomSwitch";
import Home from "./Pages/Home";
import { Route } from "react-router-dom";
// import { character } from "./data.json";
import { characters } from "./datas";
import MainNav from "./Components/Navigation/Mainnav/MainNav";

function App() {
  const [activeCharacter, setActiveCharacter] = useState();
  const [pageHeight, setPageHeight] = useState();
  // console.log(characters);
  useEffect(() => {
    setPageHeight(window.innerHeight);
    window.addEventListener("resize", (e) => {
      setTimeout(() => {
        setPageHeight(window.innerHeight);
      }, 300);
    });
  }, []);
  console.log(characters.results);
  const charactersToRender = characters.results;
  console.log(charactersToRender);
  const refs = charactersToRender.reduce((refsObj, character) => {
    refsObj[character.name] = createRef();
    return refsObj;
  }, {});
  console.log(refs);
  const handleCLick = (name) => {
    refs[name].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    adapt: "399px",
    se: "330px",
    teams: "350px",
    foot: "375px",
    max: "400px",
    mobil: "430px",
    blogNav: "610px",
    images: "680px",
    min: "520px",
    make: "548px",
    image: "900px",
    mobile: "500px",
    desktop: "769px",
    player: "751px",
    dont: "1020px",
    service: "900px",
    balls: "930px",
    post: "940px",
    hero: "992px",
    kobe: "1200px",
    mind: "1100px",
    mins: "1300px",
    minsx: "1280px",
    minss: "1500px",
    team: "1700px",
    auth: "1800px",
    img: "1201px",
  };
  return (
    <ThemeProvider theme={theme}>
      <MainStyled>
        <Navbar
          items={data}
          activeCharacter={activeCharacter}
          // handleCLick={handleCLick}
        />
        <MainNav
          items={charactersToRender}
          activeCharacter={activeCharacter}
          handleCLick={handleCLick}
        />
        <CustomRoute>
          <Route
            path="/"
            element={
              <Home
                activeCharacter={activeCharacter}
                data={charactersToRender}
                setActiveCharacter={setActiveCharacter}
                pageHeight={pageHeight}
                refs={refs}
              />
            }
          />
        </CustomRoute>
      </MainStyled>
    </ThemeProvider>
  );
}

export default App;
