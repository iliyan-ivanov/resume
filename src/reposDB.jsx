import gameApp from "./assets/game-app.png";
import weatherApp from "./assets/weather-app.png";
import footballApp from "./assets/football-app.png";
import destinationsApp from "./assets/destinations-app.png";
import pizzaSite from "./assets/pizza-site.png";
import calculator from "./assets/calculator.png";
import colorPicker from "./assets/color-picker.png";
import css from "./assets/css.svg";
import firebase from "./assets/firebase.svg";
import html from "./assets/html.svg";
import javascript from "./assets/javascript.svg";
import react from "./assets/react.svg";

const repos = [
    {
      name: "Game app",
      url: "game-app",
      img: gameApp,
      id: 1,
      technologies: [react, firebase, html, css]
    },
    {
      name: "Weather app",
      url: "weather-app",
      img: weatherApp,
      id: 2,
      technologies: [react, html, css]
    },
    {
      name: "Football app",
      url: "football-app",
      img: footballApp,
      id: 3,
      technologies: [react, firebase, html, css]
    },
    {
      name: "Calculator",
      url: "calculator",
      img: calculator,
      id: 4,
      technologies: [javascript, html, css]
    },
    {
      name: "Pizza site",
      url: "pizza-site",
      img: pizzaSite,
      id: 5,
      technologies: [html, css]

    },
    {
      name: "Color picker",
      url: "color-picker",
      img: colorPicker,
      id: 6,
      technologies: [html, css]
    },
    {
      name: "Destinations app",
      url: "destinations-app",
      img: destinationsApp,
      id: 7,
      technologies: [react, html, css]
    },
  ];

  export default repos;