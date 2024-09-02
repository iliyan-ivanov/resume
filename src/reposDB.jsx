import gameApp from "./assets/game-app.png";
import weatherApp from "./assets/weather-app.png";
import footballApp from "./assets/football-app.png";
import destinationsApp from "./assets/destinations-app.png";
import pizzaSite from "./assets/pizza-site.png";
import calculator from "./assets/calculator.png";
import colorPicker from "./assets/color-picker.png";
import css from "/css.svg";
import firebase from "/firebase.svg";
import html from "/html.svg";
import javascript from "/javascript.svg";
import react from "/react.svg";

const repos = [
    {
      title: "Game app",
      name: "game-app",
      img: gameApp,
      id: 1,
      technologies: [react, firebase, html, css],
      url: "https://iliyan-ivanov.github.io/game-app/",
    },
    {
      title: "Weather app",
      name: "weather-app",
      img: weatherApp,
      id: 2,
      technologies: [react, html, css],
      url: "https://pizza-site-lyart.vercel.app/",
    },
    {
      title: "Football app",
      name: "football-app",
      img: footballApp,
      id: 3,
      technologies: [react, firebase, html, css],
      url: "https://pizza-site-lyart.vercel.app/",
    },
    {
      title: "Calculator",
      name: "calculator",
      img: calculator,
      id: 4,
      technologies: [javascript, html, css],
      url: "https://pizza-site-lyart.vercel.app/",
    },
    {
      title: "Pizza site",
      name: "pizza-site",
      img: pizzaSite,
      id: 5,
      technologies: [html, css],
      url: "https://pizza-site-lyart.vercel.app/",
    },
    {
      title: "Color picker",
      name: "color-picker",
      img: colorPicker,
      id: 6,
      technologies: [html, css],
      url: "https://pizza-site-lyart.vercel.app/",
    },
    {
      title: "Destinations app",
      name: "destinations-app",
      img: destinationsApp,
      id: 7,
      technologies: [react, html, css],
      url: "https://pizza-site-lyart.vercel.app/",
    },
  ];

  export default repos;