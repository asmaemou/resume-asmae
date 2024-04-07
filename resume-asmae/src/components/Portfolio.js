import defyfit from "../images/defyfit.png";
import ecommerce from "../images/mobile-app.png";
import portfolioHome from "../images/portfolio-home.jpg";
const Portfolio = () => {
  return (
    <>
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">What I have acheived?</h1>
          <div className="work-list">
            <div className="work">
              <img src={defyfit} alt="Mobile App Defy Fit" />
              <div className="layer">
                <h4 className="work-title">Defy Fit</h4>
                <p className="work-description">
                  A mobile fitness app that allows users to create and share their own workout routines, track progress, and connect  
                  with other trainers to work against each other.  
                </p>
                <h5 className="titleS">Technology used:</h5>
                <ul className="work-tools">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Spring Boot</li>
                </ul>
                <a href="/#">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={ecommerce} alt="Mobile Application" />
              <div className="layer">
                <h3>E-commerce mobile application</h3>
                <p>
                  This is an E-commerce mobile application that can be installed in Android and IOS 
                  devices, it was developed using React Native for the frontend and Django for the backend.
                </p>
                <a href="/#">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img
                src={portfolioHome}
                alt="Portfolio website"
              />
              <div className="layer">
                <h3>Personal Portfolio</h3>
                <p>
                  Here is a website where I wrote on my professionel information to make it easier for people to read about me and to reach me
                </p>
                <a href="/#">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <a href="/#" className="btn">
            See more
          </a>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
