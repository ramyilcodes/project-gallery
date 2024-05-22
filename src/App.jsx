import "./App.css";
import Card from "./components/card.jsx";
import amica from "./assets/amica.png";
import huddle from "./assets/huddle.png";
import newsHomepage from "./assets/newsHomepage.png";
import amicaLanding from "./assets/amica-landing.png";
import productPreview from "./assets/product-preview.png";
import nnia from "./assets/nnia.png";
import threeColumn from "./assets/threeColumn.png";
import gridTestimonial from "./assets/grid-testimonial.png";
import statsPreview from "./assets/stats-preview.png";
import singlePrice from "./assets/singlePrice.png";

function App() {
  return (
    <body className="font-['prompt'] grid place-items-center bg-darkTeal text-lightTeal py-[3rem] px-[2rem] tablet:py-[2.5rem] mobile:py-[1rem] mobile:px-[1rem]">
      <h1 className=" text-[3rem] font-[300] mb-[1rem] mobile:text-[2rem] tablet:text-[2.5rem] place-self-start">Ramnan's Projects</h1>

      <section className=" px-[2rem] grid gap-[2rem] grid-cols-3 mobile:grid-cols-1 mobile:gap-[3rem] tablet:grid-cols-2 tablet:gap-[1.5]">
        <Card
          title={"Amica"}
          text={"An accounting app for small businesses"}
          image={amica}
          altText={"image of amica dashboard"}
          liveLink={"https://amica-app.netlify.app"}
          githubLink={"https://github.com/ramyilcodes/root_stockbook.git"}
        />

        <Card
          title={"NNIA"}
          text={
            "Group project for nHub Foundation. Developed the about, and programmes pages"
          }
          image={nnia}
          altText={"image of NNIA's about page"}
          liveLink={"https://nianigeria.netlify.app/"}
          githubLink={"https://github.com/ramyilcodes/hub-project.git"}
        />

        <Card
          title={"Huddle Landing Page"}
          text={"A challenge from frontendmentor.io"}
          image={huddle}
          altText={"image of huddle landing page"}
          liveLink={"https://ramyil-huddle-landing-page-one.netlify.app/"}
          githubLink={
            "https://github.com/ramyilcodes/fem-huddle-landing-page-1.git"
          }
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

        <Card
          title={"Three Column Preview Card"}
          text={"A challenge from frontendmentor.io"}
          image={threeColumn}
          altText={"image of preview card component consisting of 3 columns"}
          liveLink={"https://ramyil-3-column-preview-card.netlify.app/"}
          githubLink={
            "https://github.com/ramyilcodes/fem-three-column-preview-card.git"
          }
        />

        <Card
          title={"Testimonial Grid Section"}
          text={"Challenge from frontendmentor to practice CSS grid"}
          image={gridTestimonial}
          altText={"image of testimonial grid section"}
          liveLink={"https://fem-testimonial-grid-section.netlify.app/"}
          githubLink={
            "https://github.com/ramyilcodes/fem-testimonial-grid-section.git"
          }
        />

        <Card
          title={"Stats Preview Card"}
          text={"Stats card component from frontendmentor.io"}
          image={statsPreview}
          altText={"image of stats preview card"}
          liveLink={"https://ramyil-stats-preview-card.netlify.app/"}
          githubLink={
            "https://github.com/ramyilcodes/fem-stats-preview-card.git"
          }
        />

        <Card
          title={"Single Price Grid Component"}
          text={"Grid component from frontendmentor.io"}
          image={singlePrice}
          altText={"image of a price component"}
          liveLink={"https://ramyil-single-price-grid.netlify.app/"}
          githubLink={
            "https://github.com/ramyilcodes/fem-single-price-grid-component.git"
          }
        />
      </section>
    </body>
  );
}

export default App;
