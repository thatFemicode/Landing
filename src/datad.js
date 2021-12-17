import Hero from "./Components/Hero/Hero";
import Gallery from "./Components/Gallery/Gallery";
// import Footer from "./Components/Footer/"
export const sect = {
  character: {
    info: {
      count: 44,
    },
    results: [
      {
        id: 1,
        name: "hero",
        element: <Hero />,
      },
      {
        id: 1,
        name: "hero",
        element: <Gallery />,
      },
      //   {
      //     id: 1,
      //     name: "hero",
      //     element: <Footer />,
      //   },
    ],
  },
};
