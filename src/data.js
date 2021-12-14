// import avatar from "./avatar.svg";
import Products from "./Components/Navigation/Products/Products";
import Pricing from "./Components/Navigation/Pricing/Pricing";
import Developer from "./Components/Navigation/Developers/Developer";
import Company from "./Components/Navigation/Company/Company";
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
// export const tabledata = [
//   {
//     id: 1,
//     name: "Ogunleye Oluwafemi",
//     amount: "$122.00",
//     date: "2 Aug 2021",
//     image: avatar,
//     position: "Approved",
//   },
//   {
//     id: 2,
//     name: "Ogunleye Oluwafemi",
//     amount: "$132.00",
//     date: "4 Sep 2021",
//     image: avatar,
//     position: "Pending",
//   },
//   {
//     id: 3,
//     name: "Ogunleye Oluwafemi",
//     amount: "$132.00",
//     date: "4 Sep 2021",
//     image: avatar,
//     position: "Declined",
//   },
//   {
//     id: 4,
//     name: "Ogunleye Oluwafemi",
//     amount: "$132.00",
//     date: "4 Sep 2021",
//     image: avatar,
//     position: "Approved",
//   },
//   {
//     id: 5,
//     name: "Ogunleye Oluwafemi",
//     amount: "$132.00",
//     date: "4 Sep 2021",
//     image: avatar,
//     position: "Approved",
//   },
//   {
//     id: 6,
//     name: "Ogunleye Oluwafemi",
//     amount: "$132.00",
//     date: "4 Sep 2021",
//     image: avatar,
//     position: "Declined",
//   },
// ];
export default data;
