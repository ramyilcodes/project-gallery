import "./App.css";
import Card from "./components/card.jsx";
import ContactCard from "./components/contactCard.jsx";
import myResume from ".././public/Ramnan Ramyil 2025.pdf";
import ramnanGreen from "./assets/ramnanGreen.jpg";
import ramnanBrown from "./assets/ramnanBrown.jpg";
import downloadIcon from "./assets/download-icon.svg";
import githubIcon from "./assets/github-white-icon.webp";
import emailIcon from "./assets/email-icon.png";
import linkedinIcon from "./assets/LinkedIn_icon.png";
import fundamentals from "./assets/fundamentals.png";
import qrCode from "./assets/qrCode.png";
import adsofun from "./assets/adsofun.png";
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
    <body className="font-['prompt'] grid place-items-center bg-darkTeal text-lightTeal px-[2rem] tablet:py-[2.5rem] mobile:py-[1rem] mobile:px-[1rem]">
      <nav
        id="top"
        className=" w-full p-[0.5rem] flex justify-between items-center sticky top-0 bg-inherit"
      >
        <a href="#top">
          <p className=" text-[3rem] mobile:text-[2rem] tablet:text-[2.5rem]  inline">
            Ramnan Ramyil
          </p>
        </a>

        <a href={myResume} download="Ramnan_Ramyil_Resume.pdf">
          <span className="flex items-center">
            <span className="text-[1.5rem] hover:text-peach tablet:text-[1rem] mobile:hidden">
              My Resume
            </span>
            <img
              src={downloadIcon}
              alt="click this icon to download my resume"
              className=" size-[3.5rem] inline hover:bg-[#00000031] rounded-full p-[0.5rem] ml-[0.5rem]"
            />
          </span>
        </a>
      </nav>

      <section className="px-[4rem] mb-[2rem] tablet:mb-[3.5rem] w-full flex justify-between items-center tablet:items-start tablet:px-[2rem] mobile:px-[1.5rem] mobile:items-center mobile:flex-col-reverse mobile:justify-center mobile:text-center">
        <div>
          <p className=" font-[200] text-[3.5rem] mb-[2rem] tablet:text-[3rem] leading-[3.5rem] mobile:text-[2.5rem] ">
            Hello there! I'm{" "}
            <span className=" font-bold text-peach">Ramnan</span> Ramyil.
          </p>
          <p className="font-[200] text-[1.8rem] tablet:text-[1.5rem] mobile:text-[1.3rem]">
            I'm an aspiring software engineer based in{" "}
            <span className="font-[400] text-peach">Abuja, Nigeria</span>.
            <br />I recently resumed my frontend journey after taking a hiatus
            to explore computer networking. Currently, I'm studying{" "}
            <a
              href="https://eloquentjavascript.net/"
              className=" underline hover:font-[400]"
            >
              Eloquent JS
            </a>{" "}
            to improve my logic and taking on challenges from{" "}
            <a
              href="https://www.frontendmentor.io/"
              className=" underline hover:font-[400]"
            >
              frontendmentor.
            </a>{" "}
            Below are some of the stuff that I have worked/am working on.
            <br />
            Shoot me an{" "}
            <a
              href="mailto: ramyilramnan@gmail.com"
              className="text-peach italic font-[400] underline"
            >
              email
            </a>{" "}
            if you'd like to build with me.{" "}
            <span className=" text-sm text-peach">(I'm suuuper friendly)</span>
          </p>
        </div>
        {/* <div className="size-[20rem] bg-[url(./assets/ramnanGreen.jpg)] "></div> */}
        {/* <img src={ramnanBrown} alt="image of Ramnan" className="rounded-full w-[25rem]" /> */}

        <img
          src={ramnanGreen}
          alt="image of Ramnan"
          className="rounded-full w-[25rem] ml-[3rem] mobile:ml-0 tablet:size-[25rem] mobile:size-[15rem]"
        />
      </section>

      {/* <h2 className=" text-[3rem] font-[300] mb-[1rem] mobile:text-[2rem] tablet:text-[2.5rem] place-self-start">
        Projects
      </h2>

      <section className="px-[2rem] grid gap-[2rem] grid-cols-3 mobile:grid-cols-1 mobile:gap-[3rem] tablet:grid-cols-2 tablet:gap-[1.5]"></section> */}

      <h2 className=" px-[2rem] text-[3rem] font-[300] mb-[1rem] mobile:text-[2rem] tablet:text-[2.5rem] place-self-start">
        Projects
      </h2>

      <section className=" px-[2rem] grid gap-[2rem] grid-cols-3 mb-[8rem] mobile:mb-[4.5rem] mobile:grid-cols-1 mobile:gap-[3rem] tablet:grid-cols-2 tablet:gap-[1.5] tablet:mb-[5rem]">
        <Card
          title={"Adsofun"}
          text={"Volunteer work with a friend for Adsofun Concepts LLC"}
          image={adsofun}
          altText={"image of Adsofun's landing page"}
          githubLink={"https://github.com/ramyilcodes/adsofun.git"}
          liveLink={"https://adsofun.vercel.app/"}
        />

        <Card
          title={"NNIA"}
          text={
            "Group volunteer project for nHub Foundation. I developed the about and programmes pages"
          }
          image={nnia}
          altText={"image of NNIA's about page"}
          liveLink={"https://nnia.ng/"}
          githubLink={"https://github.com/ramyilcodes/hub-project.git"}
        />

        <Card
          title={"Fundamentals Highschool"}
          text={
            "Volunteered to make a landing page for The Fundamentals Highschool."
          }
          image={fundamentals}
          altText={"image of The fundamentals Highschool website"}
          liveLink={"https://thefundamentalshighschool.onrender.com/"}
          githubLink={
            "https://github.com/ramyilcodes/thefundamentalshighschool.git"
          }
        />

        <Card
          title={"Amica"}
          text={
            "An accounting app for small businesses. Features simple CRUD functionalities."
          }
          image={amica}
          altText={"image of amica dashboard"}
          liveLink={"https://amica-app.netlify.app"}
          githubLink={"https://github.com/ramyilcodes/root_stockbook.git"}
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
          title={"Amica Landing Page"}
          text={'Landing page for the accounting application "Amica"'}
          image={amicaLanding}
          altText={"image of Amica's page"}
          githubLink={"https://github.com/ramyilcodes/amica-landing-page.git"}
          liveLink={"https://amica-landing-page.netlify.app/"}
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
          title={"Product Preview Card"}
          text={"Product card component from frontendmentor.io"}
          image={productPreview}
          altText={"image of product preview card"}
          liveLink={"https://ramyil-product-preview-card.netlify.app/"}
          githubLink={"https://github.com/ramyilcodes/product-preview-card.git"}
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
          title={"QR Code Component"}
          text={"A challenge from frontendmentor.io"}
          image={qrCode}
          altText={"image of a QR Code component"}
          githubLink={
            "https://github.com/ramyilcodes/fem-qr-code-component.git"
          }
          liveLink={"https://fem-qr-code-component-six.vercel.app/"}
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

      {/*contsct section  */}

      <h2 className=" px-[2rem] text-[3rem] font-[300] mb-[1rem] mobile:text-[2rem] tablet:text-[2.5rem] place-self-start">
        Contact Me
      </h2>

      <section className="px-[2rem] grid gap-[2rem] grid-cols-3 mb-[7rem] mobile:mb-[4rem] mobile:grid-cols-1 mobile:gap-[1.5rem] tablet:grid-cols-2 tablet:gap-[1.5rem] tablet:mb-[5rem]">
        <ContactCard
          siteIcon={githubIcon}
          siteLink={"https://github.com/ramyilcodes"}
          contactName={"ramyilcodes"}
        />

        <ContactCard
          siteIcon={linkedinIcon}
          siteLink={"https://www.linkedin.com/in/ramnan-ramyil-05323924a/"}
          contactName={"Ramnan Ramyil"}
        />

        <ContactCard
          siteIcon={emailIcon}
          siteLink={"mailto: ramyilramnan@gmail.com"}
          contactName={"ramyilramnan @gmail.com"}
        />
      </section>

      <hr className=" w-full mb-[2rem]" />

      <footer className="w-full text-center pb-[1.5rem]">
        <p className="font-[200]">
          &copy; 2025. Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/ramnan-ramyil-05323924a/"
            className="font-[400] hover:text-peach"
          >
            Ramnan Ramyil.
          </a>{" "}
          All rights reserved.
        </p>
      </footer>
    </body>
  );
}

export default App;


