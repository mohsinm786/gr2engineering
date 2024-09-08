import { Menu } from "@/types/menu";


const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Corporate Social Responsibility",
        path: "/corporate-social-responsibility",
        newTab: false,
      },
      {
        id: 22,
        title: "History",
        path: "/history",
        newTab: false,
      },
      {
        id: 23,
        title: "Our Experience",
        path: "/our-experience",
        newTab: false,
      },
      {
        id: 24,
        title: "Leadership",
        path: "/leadership",
        newTab: false,
      },
    ],
  },
  {
    id: 33,
    title: "What We Do",
    newTab: false,
    submenu: [
      {
        id: 34,
        title: "Capital Project Services",
        path: "/capital-project-services",
        newTab: false,
      },
      {
        id: 35,
        title: "Water",
        path: "/water",
        newTab: false,
      },
      {
        id: 36,
        title: "Modular",
        path: "/modular",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "News",
    path: "/news",
    newTab: false,
  },
  {
    id: 4,
    title: "Careers",
    path: "/careers",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
