import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import location from "../assets/location.svg";
import steak1 from "../assets/steak1.png";
import steak2 from "../assets/steak2.png";
import steak3 from "../assets/steak3.png";

export const menuItems = [
  {
    id: 1,
    title: "Our Menu",
    url: "/",
  },
  {
    id: 2,
    title: "Catering",
    url: "/",
  },
  {
    id: 3,
    title: "About Us ",
    url: "/",
  },
  {
    id: 4,
    title: "Contact",
    url: "/",
  },
];

export const socialIcons = [
  {
    id: 1,
    alt: "facebook",
    img: `${facebook}`,
    url: "/",
  },
  {
    id: 2,
    alt: "twitter",
    img: `${twitter}`,
    url: "/",
  },
  {
    id: 3,
    alt: "instagram",
    img: `${instagram}`,
    url: "/",
  },
  {
    id: 4,
    alt: "location",
    img: `${location}`,
    url: "/",
  },
];

export const steakItem = [
  {
    id: 1,
    title: "Grilled meat in plate",
    price: 32.5,
    img: `${steak1}`,
  },
  {
    id: 1,
    title: "Beef steak with saulted veg",
    price: 40.0,
    img: `${steak2}`,
  },
  {
    id: 1,
    title: "Barbecue Grill Beefsteak",
    price: 38.5,
    img: `${steak3}`,
  },
];
