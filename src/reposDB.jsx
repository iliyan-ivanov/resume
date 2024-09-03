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
      description: 'This app is created with React + Vite and its using Firebase for Auth and Backend. For deploy I am using Github pages and you can see the result if you click "Live" button. Register and add your own games. If you are logged in you can like all games in our app and also you can edit your own games.'
    },
    {
      title: "Weather app",
      name: "weather-app",
      img: weatherApp,
      id: 2,
      technologies: [react, html, css],
      url: "https://iliyan-ivanov.github.io/weather-app/",
      description: 'This app provides accurate weather information based on location you choose. Its created by using React + Vite and "Current Weather Data" API from https://openweathermap.org . For deploy I am using Github pages.'
    },
    {
      title: "Football app",
      name: "football-app",
      img: footballApp,
      id: 3,
      technologies: [react, firebase, html, css],
      url: "https://pizza-site-lyart.vercel.app/",
       description: 'This app is created with React + Vite and its using Firebase for Auth and Backend. For deploy I am using Github pages and you can see the result if you click "Live" button. You can read football news from here and can register and add your own foobtall news. If you are logged in you can like and comments all news in our app and also you can edit your own news.'
    },
    {
      title: "Calculator",
      name: "calculator",
      img: calculator,
      id: 4,
      technologies: [javascript, html, css],
      url: "https://iliyan-ivanov.github.io/calculator/",
      description: "Here's a simple calculator app created with JavaScript, HTML and CSS. For deploy I am using Github pages."
    },
    {
      title: "Pizza site",
      name: "pizza-site",
      img: pizzaSite,
      id: 5,
      technologies: [html, css],
      url: "https://pizza-site-lyart.vercel.app/",
      description: 'This is a "PIzza site" project. For now I start it with adding only responsible HTML and CSS main page for it. I deploy it on "vercel", so you can check it online here: https://pizza-site-lyart.vercel.app/ or just click "Live" button under the picture'
    },
    {
      title: "Color picker",
      name: "color-picker",
      img: colorPicker,
      id: 6,
      technologies: [html, css],
      url: "https://color-picker-sigma-six.vercel.app/",
      description: "Here's a simple color picker created with HTML, CSS and Vanilla JS. For deploy I am using Vercel so you can check it online here: https://color-picker-sigma-six.vercel.app/ or just click Live button under the picture"
    },
    {
      title: "Destinations app",
      name: "destinations-app",
      img: destinationsApp,
      id: 7,
      technologies: [react, html, css],
      url: "https://pizza-site-lyart.vercel.app/",
      description: 'This app is created with React + Vite, HTML and CSS. For deploy I am using Github pages and you can see the result if you click "Live" button'
    },
  ];

  export default repos;