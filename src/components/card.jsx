// import ReactDOM from "react-dom";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// library.add(...all);

const Card = ({ image, altText, title, text, githubLink, liveLink }) => {
  return (
    <div className=" grid  hover:bg-[#00000031] duration-[0.3s]  border-[3px] border-lighTeal rounded-[12px] h-min p-[2rem] hover:rounded-none">
      <img src={image} alt={altText} className="" />

      <div className="grid">
        <div>
          <p>{title}</p>
          <p>{text}</p>
        </div>

        <span className=" flex gap-[2rem] place-self-center">
          <a
            href={liveLink}
            target="_blank"
            className=" px-[1.5rem] py-[0.5rem] border-solid rounded-[5px ] hover:text-darkTeal border-peach border-[1px] border-[solid] hover:bg-peach"
          >
            Live
          </a>
          <a
            href={githubLink}
            target="_blank"
            className=" px-[1.5rem] py-[0.5rem] border-solid rounded-[5px ] hover:text-darkTeal border-peach border-[1px] border-[solid] hover:bg-peach"
          >
            Github
          </a>
        </span>

        {/* <span>
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <FontAwesomeIcon icon="fa-regular fa-globe" />
      </span> */}
      </div>
    </div>
  );
};

export default Card;
