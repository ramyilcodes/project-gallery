import "./App.css";
import Card from "./components/card.jsx";
import amica from "./assets/amica.png";
import huddle from "./assets/huddle.png";
import newsHomepage from "./assets/newsHomepage.png";
import amicaLanding from "./assets/amica-landing.png";
import productPreview from "./assets/product-preview.png";

function App() {
  return (
    <body className="font-['prompt'] grid bg-darkTeal text-lightTeal">
      <h1 className=" text-[2rem]">Projects</h1>

      <section className="grid gap-[2rem] grid-cols-3 mobile:grid-cols-1 mobile:gap-[3rem] tablet:grid-cols-2 tablet:gap-[1.5]">
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

        <Card
          title={"Amica Landing Page"}
          text={'Landing page for the accounting application "Amica"'}
          image={amicaLanding}
          altText={"image of Amica's page"}
          githubLink={"https://github.com/ramyilcodes/amica-landing-page.git"}
          liveLink={"https://amica-landing-page.netlify.app/"}
        />

        <Card
          title={"Product Preview Card"}
          text={"Product card component from frontendmentor.io"}
          image={productPreview}
          altText={"image of product preview card"}
          liveLink={"https://ramyil-product-preview-card.netlify.app/"}
          githubLink={"https://github.com/ramyilcodes/product-preview-card.git"}
        />
      </section>
    </body>
  );
}

export default App;
