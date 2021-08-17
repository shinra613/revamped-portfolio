const ResponsiveDesigns = [
    {
      sn: 1,
      name: "Checkout page",
      def:
        "This page was created for the sixth responsive design devchallenge in devchallenges.io, written purely in HTML/CSS.",
      demo: "https://checkout-page-devchallenges.netlify.app/",
      url: "https://github.com/AkhilVenkateshPillai/devchallenges-checkout-page",
      img: "./images/checkout.png"
    },
    {
      sn: 2,
      name: "My gallery page",
      def:
        "This page was created for the fifth responsive design devchallenge in devchallenges.io, written purely in HTML/CSS.",
      demo: "https://gallery-page-devchallenges.netlify.app/",
      url: "https://github.com/AkhilVenkateshPillai/devchallenges-My-gallery",
      img: "./images/gallery.png"
    }
    ,
    {
      sn: 3,
      name: "Interior Consultant page.",
      def:
        "This page was created for the third responsive design devchallenge in devchallenges.io, written purely in HTML/CSS.",
      demo: "https://interior-deco.netlify.app/",
      url: "https://github.com/AkhilVenkateshPillai/devchallenges-Interior-consultant",
      img: "./images/interior.png"
    }
    ,
    {
      sn: 4,
      name: "Recipe Page",
      def:
        "This page was created for the fifth responsive design devchallenge in devchallenges.io, written purely in HTML/CSS.",
      demo: "https://recipe-devchallenge.netlify.app/",
      url: "https://github.com/AkhilVenkateshPillai/devchallenges-Recipe-Page",
      img: "./images/recipe.png"
    }
];

const WebApps = [

  {
    
    sn: 0,
    name: "Triangle-pedia App",
    def:
      "A web app (HTML/CSS/ Vanilla javascript) which helps you calculate the area, angle and hypotenuse of a triangle. It also contains a quiz section with triangle related questions.",
    demo: "https://funtriangle.netlify.app/",
    url: "https://github.com/shinra613/neog-12-triangle-app",
    img: "./images/triangle.png"
  },
  {
    
    sn: 1,
    name: "Cash Register",
    def:
      "A basic react app which requires you to enter the bill amount and the cash which your customer gave you. Upon submission, it displays the amount to be returned with currency denomination.",
    demo: "https://cgxlz.csb.app/",
    url: "https://github.com/shinra613/neog-10-cash-register-app",
    img: "./images/cash.png"
  },
  {
    sn: 2,
    name: "Luck Checker",
    def:
      " A basic react app with adds up your birth date and divides it with your lucky number. If the reminder is Zero then your lucky",
    demo: "https://msz3b.csb.app/",
    url: "https://github.com/shinra613/neog-11-birthDateLuckChecker",
    img: "./images/luck.png"
  }
  ,
  {
    sn: 3,
    name: "Movie Suggestion App",
    def:
      "This is a basic react app which lets you pick a genre and it will list the top suggestions. This app demonstartes the use-case of states hook in react.",
    demo: "https://ogp3w.csb.app/",
    url: "https://github.com/shinra613/Entertainment-suggestion-app",
    img: "./images/movie.png"
  }
  ,
  {
    sn: 4,
    name: "Emoji Interpreter",
    def:
      "This is a basic react app which identifies the emoji upon input. This app demonstartes the use-case states hook in react.",
    demo: "https://bpiq1.csb.app/",
    url: "https://github.com/shinra613/emoji-interpreter",
    img: "./images/emoji.png"
  }
  ,
  {
    sn: 5,
    name: "Mandalorian translator",
    def:
      "Mando'a was the language of the people native to the planet Mandalore. Speak Starwars Mando'a language by using the Fun Mandalorian translator app.The app is built on funtranslations API.",
    demo: "https://mandalorian-translator.netlify.app/",
    url: "https://github.com/shinra613/neog-7-Mandalorian-translator-app",
    img: "./images/mando.png"
  }
  ,
  {
    sn: 6,
    name: "Minion Translator",
    def:
      "Wrote this basic web app using basic HTML/CSS & Javascript. The app is built on funtranslations API",
    demo: "https://minionapi.netlify.app/",
    url: "https://github.com/shinra613/neog-6-minion-translator",
    img: "./images/minion.png"
  }
  ,
  {
    sn: 7,
    name: "Naruto Quiz App",
    def:
      "lets brush up your shinobi knowledge",
    demo: "https://repl.it/@AkhilVenkateshP/NarutoQuizGame?embed=1&output=1#index.js",
    url: "https://github.com/shinra613/neog-2-NarutoQuizGame",
    img: "./images/naruto.png"
  }
  ,
  {
    sn: 8,
    name: "CLI Quiz App",
    def:
      "This is a simple javascript based CLI QUIZ app about me.",
    demo: "https://repl.it/@AkhilVenkateshP/FirstAssignment?embed=1&output=1#index.js",
    url: "https://github.com/shinra613/neog-1-CLI-quiz-aboutme",
    img: "./images/cli.png"
  }
];

let defaultProps ={
  'rddb': ResponsiveDesigns,
  'wadb':WebApps
};

  
export default defaultProps;