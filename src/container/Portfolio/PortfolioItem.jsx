import { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const PortfolioItem = ({ workData }) => {
  const [animateCard, setAnimateCard] = useState([{ y: 0, opacity: 1 }]);
  return (
    <motion.div
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="portfolio_inner"
    >
      <ul>
        {workData.map((menuItem) => {
          const { id, title, image, visit, codeLink, description, tags } =
            menuItem;

          return (
            <li className="portfolio-item" key={id}>
              <div className="list_inner">
                <div className="image app_flex">
                  <div className="main ">
                    <img src={image} alt="" />
                  </div>
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    onMouseLeave={() => setAnimateCard(false)}
                    className="work-hover app_flex"
                  >
                    <a href={visit} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app_flex"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a href={codeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app_flex"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>
                <div className="work-content app_flex">
                  <h4 className="bold-text">{title}</h4>
                  <p className="p-text" style={{ marginTop: 10 }}>
                    {description}
                  </p>

                  <div className="work-tag app_flex">
                    <p className="p-text">{tags}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default PortfolioItem;
