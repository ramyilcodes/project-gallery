import "./App.css";
import Card from "./components/card.jsx";
import amica from "./assets/amica.png";
import huddle from "./assets/huddle.png";
import newsHomepage from "./assets/newsHomepage.png";

function App() {
  return (
    <body className="font-['prompt'] grid mobile:grid-cols-1 bg-darkTeal text-lightTeal h-screen">
      <h1 className=" text-[2rem]">Projects</h1>

      <section className="grid grid-cols-3">
        <Card
          title={"Amica"}
          text={"An accounting app for small businesses"}
          image={amica}
          altText={"image of amica dashboard"}
          liveLink={"https://amica-app.netlify.app"}
          githubLink={"https://github.com/ramyilcodes/root_stockbook.git"}
        />

        <Card
          title={"Huddle Landing Page"}
          text={"A challenge from frontendmentor.io"}
          image={huddle}
          altText={"image of huddle landing page"}
          liveLink={"https://nianigeria.netlify.app/"}
          githubLink={"https://github.com/ramyilcodes/hub-project.git"}
        />

        <Card
          title={"News Home Page"}
          text={"A challenge from frontendmentor.io"}
          image={newsHomepage}
          altText={"image of a news homepage"}
          githubLink={"https://github.com/ramyilcodes/fem-news-homepage.git"}
          liveLink={"https://ramyil-news-homepage.netlify.app/"}
        />
      </section>
    </body>
  );
}

export default App;
