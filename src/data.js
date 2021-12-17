// import avatar from "./avatar.svg";
import Products from "./Components/Navigation/Products/Products";
import Pricing from "./Components/Navigation/Pricing/Pricing";
import Developer from "./Components/Navigation/Developers/Developer";
import Company from "./Components/Navigation/Company/Company";
import Hero from "./Components/Hero/Hero";
import Gallery from "./Components/Gallery/Gallery";
// import Footer from "./Components/Footer/"
const data = [
  {
    id: 1,
    name: "Products",
    element: <Products />,
  },
  {
    id: 2,
    name: "Developers",
    element: <Developer />,
  },
  {
    id: 3,
    name: "Company",
    element: <Company />,
  },
  {
    id: 4,
    name: "Pricing",
    element: <Pricing />,
  },
  // {
  //   id: 5,
  //   name: "Ogunleye Oluwafemi",
  //   title: "CTO",
  //   image: avatar,
  // },
  // {
  //   id: 6,
  //   name: "Ogunleye Oluwafemi",
  //   title: "Hiring Manager",
  //   image: avatar,
  // },
];
export const sections = [
  {
    id: 1,
    name: "hero",
    element: <Hero />,
  },
  {
    id: 2,
    name: "gallery",
    element: <Gallery />,
  },
  // {
  //   id: 3,
  //   name: "Ogunleye Oluwafemi",
  //   amount: "$132.00",
  //   date: "4 Sep 2021",
  //   image: avatar,
  //   position: "Declined",
  // },
  // {
  //   id: 4,
  //   name: "Ogunleye Oluwafemi",
  //   amount: "$132.00",
  //   date: "4 Sep 2021",
  //   image: avatar,
  //   position: "Approved",
  // },
  // {
  //   id: 5,
  //   name: "Ogunleye Oluwafemi",
  //   amount: "$132.00",
  //   date: "4 Sep 2021",
  //   image: avatar,
  //   position: "Approved",
  // },
  // {
  //   id: 6,
  //   name: "Ogunleye Oluwafemi",
  //   amount: "$132.00",
  //   date: "4 Sep 2021",
  //   image: avatar,
  //   position: "Declined",
  // },
];
export default data;
