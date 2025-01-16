import React from "react";
import "./Home.css";
import raymond from "../../assets/images/isaac.jpg";

const Home = () => {
  return (
    <section id="home">
      <div className="home-text" data-aos="flip-left">
        <strong>Hello, I'm</strong>
        <h1> ISAAC BIDEMY</h1>
        <p>
          I am a passionate and detail-driven Front-end Software Developer with a strong focus on crafting intuitive, user-friendly, and visually stunning digital experiences. With expertise in HTML, CSS, JavaScript, React, TailwindCss, ReactNative, wordpress, Figma, Git, VScode, and various front-end frameworks, I bring a unique blend of creativity and technical expertise to every project I undertake. I'm excited to collaborate with others and push the boundaries of what's possible in the world of front-end development."

        </p>
        <a href="#summery" className="btn-link">
          Scroll Down
        </a>
      </div>
      <div className="home-img" data-aos="fade-right"  data-aos-duration="9000000">
        <div className="img-box">
          <img src={raymond} alt="Isaac-Bidemy" />
          <h2>
            ISAAC BIDEMY <br /> <br />
           <span> Front-End Developer </span> 
          </h2>
          <div className="social">
            {/* <a href="https://www.facebook.com/profile.php?id=100086715874671">
              <i className="fa-brands fa-facebook"></i>
            </a> */}
            <a href="www.linkedin.com/in/isaac-owope-74a561347">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            
          </div>
          <a href="mailto:isaacowope@gmail.com" className="hire-me">
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home;
