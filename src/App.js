/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import { useState } from "react";

import logo from "./images/logo.png";
import banner from "./images/Banner Image.png";
import facebook from "./images/facebook-f.png";
import linkedIn from "./images/linkedin-in.png";
import github from "./images/github.png";
import instagram from "./images/instagram.png";
import aboutImg from "./images/about img.png";

import projectOne from "./images/project_images/project-1.png";
import projectTwo from "./images/project_images/project-2.png";
import projectThree from "./images/project_images/project-3.png";
import projectFour from "./images/project_images/project-4.png";
import projectFive from "./images/project_images/project-5.png";
import projectSix from "./images/project_images/project-6.png";
import projectSeven from "./images/project_images/project-7.png";
import projectEight from "./images/project_images/project-8.png";
import { Link } from "react-scroll";

function App() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  const handleProjectHover = (projectName) => {
    setHoveredProject(projectName);
  };

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);

    const logo = document.getElementById("logo");
    const hamburger = document.querySelector(".hamburger");

    if (isNavbarCollapsed === false) {
      logo.style.display = "none";
    } else {
      logo.style.display = "block";
    }

    hamburger.style.position = "absolute";
    hamburger.style.top = "20px";
    hamburger.style.right = "20px";
  };

  // const onclick = () => {
  //     setIsNavbarCollapsed(false);
  // }

  return (
    <div className="container">
      <div className="navSection">
        <ul className={isNavbarCollapsed ? "collapsed" : ""}>
          <Link
            // onClick={onclick}
            to="heroSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <li>Home</li>
          </Link>
          <Link
            to="aboutSection"
            // onClick={onclick}
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <li>About Me</li>
          </Link>
          <Link
            to="skillsSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <li>Skills</li>
          </Link>
          <Link
            to="portSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <li>Portfolio</li>
          </Link>
          <Link
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <li>Contacts</li>
          </Link>
        </ul>
        <img src={logo} alt="Logo" id="logo" />
        {isNavbarCollapsed ? (
          <svg
            onClick={handleNavbarToggle}
            id="close"
            className="hamburger"
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        ) : (
          <svg
            id="hamburger"
            onClick={handleNavbarToggle}
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 17 14"
            className="hamburger"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        )}
      </div>
      <div className="heroSection">
        <div className="leftSection">
          <div className="hello">Hi, It's me</div>
          <div className="name">MD RIEAD MIA</div>
          <div className="profassion">
            And I'm a <span>Frontend Developer </span>{" "}
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum
            ullam molestias autem deleniti iure earum!
          </p>
          <div className="socials">
            <div className="rounded face">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="rounded linked">
              <img src={linkedIn} alt="linkedIn" />
            </div>
            <div className="rounded git">
              <img src={github} alt="github" />
            </div>
            <div className="rounded insta">
              <img src={instagram} alt="instagram" />
            </div>
          </div>
          <div className="cvBtn">
            <button type="button">Download Cv</button>
          </div>
        </div>
        <div className="rightSection">
          <img src={banner} alt="Banner" />
        </div>
      </div>
      <div className="aboutSection">
        <div className="aboutHeading">
          About <span>Me</span>
        </div>
        <div className="aboutContainer">
          <div className="aboutRightSection">
            <img src={aboutImg} alt="aboutImg" />
          </div>
          <div className="aboutLeftSection">
            <div className="aboutPass">
              Frontend Developer & Graphic Designer
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              reiciendis, quas voluptatum facere quam iusto itaque sapiente
              dolor provident aspernatur unde, suscipit illum, velit similique
              animi iste corporis repellendus veritatis minus voluptas. Sunt,
              eligendi. Praesentium explicabo facere quo ad earum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              reiciendis, quas voluptatum facere quam iusto itaque sapiente
              dolor provident.
            </p>
            <button type="button">Read More...</button>
          </div>
        </div>
      </div>
      <div class="skillsSection">
        <div className="skillsHeading">
          <span>My </span> Skills
        </div>
        <div class="skillRow">
          <span class="skillLabel">HTML - 5</span>
          <div class="progressBar">
            <div class="progress" style={{ width: "80%" }}></div>
          </div>
          <span class="progressLabel"> 80%</span>
        </div>
        <div class="skillRow">
          <span class="skillLabel">CSS - 3</span>
          <div class="progressBar">
            <div class="progress" style={{ width: "75%" }}></div>
          </div>
          <span class="progressLabel"> 75%</span>
        </div>

        <div class="skillRow">
          <span class="skillLabel">Bootstrap</span>
          <div class="progressBar">
            <div class="progress" style={{ width: "60%" }}></div>
          </div>
          <span class="progressLabel"> 60%</span>
        </div>

        <div class="skillRow">
          <span class="skillLabel">Javascript</span>
          <div class="progressBar">
            <div class="progress" style={{ width: "50%" }}></div>
          </div>
          <span class="progressLabel"> 50%</span>
        </div>

        <div class="skillRow">
          <span class="skillLabel">Figma App</span>
          <div class="progressBar">
            <div class="progress" style={{ width: "75%" }}></div>
          </div>
          <span class="progressLabel"> 75%</span>
        </div>
      </div>
      <div className="portSection">
        <div className="portHeading">Portfolio</div>
        <div className="projects">
          <div
            className="projectContainer"
            onMouseEnter={() => handleProjectHover("Project One")}
          >
            <img src={projectOne} alt="projectOne" />
            {hoveredProject && (
              <div className="overlay">
                <a href="https://www.example.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M21.0938 15.625H19.5312C19.324 15.625 19.1253 15.7073 18.9788 15.8538C18.8323 16.0003 18.75 16.199 18.75 16.4062V21.875H3.125V6.25H10.1562C10.3635 6.25 10.5622 6.16769 10.7087 6.02118C10.8552 5.87466 10.9375 5.67595 10.9375 5.46875V3.90625C10.9375 3.69905 10.8552 3.50034 10.7087 3.35382C10.5622 3.20731 10.3635 3.125 10.1562 3.125H2.34375C1.72215 3.125 1.12601 3.37193 0.686468 3.81147C0.24693 4.25101 0 4.84715 0 5.46875L0 22.6562C0 23.2779 0.24693 23.874 0.686468 24.3135C1.12601 24.7531 1.72215 25 2.34375 25H19.5312C20.1529 25 20.749 24.7531 21.1885 24.3135C21.6281 23.874 21.875 23.2779 21.875 22.6562V16.4062C21.875 16.199 21.7927 16.0003 21.6462 15.8538C21.4997 15.7073 21.301 15.625 21.0938 15.625ZM23.8281 0H17.5781C16.5347 0 16.0132 1.26514 16.748 2.00195L18.4927 3.74658L6.5918 15.6431C6.48255 15.7519 6.39586 15.8813 6.33672 16.0237C6.27757 16.1662 6.24712 16.3189 6.24712 16.4731C6.24712 16.6274 6.27757 16.7801 6.33672 16.9225C6.39586 17.065 6.48255 17.1944 6.5918 17.3032L7.69873 18.4082C7.8076 18.5175 7.93697 18.6041 8.07941 18.6633C8.22186 18.7224 8.37457 18.7529 8.52881 18.7529C8.68304 18.7529 8.83576 18.7224 8.9782 18.6633C9.12065 18.6041 9.25002 18.5175 9.35889 18.4082L21.2539 6.50977L22.998 8.25195C23.7305 8.98438 25 8.47168 25 7.42188V1.17188C25 0.861074 24.8765 0.563003 24.6568 0.343234C24.437 0.123465 24.1389 0 23.8281 0Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <p>{hoveredProject}</p>
              </div>
            )}
          </div>
          <div
            className="projectContainer"
            onMouseEnter={() => handleProjectHover("Project Two")}
          >
            <img src={projectTwo} alt="proejctTwo" />
            {hoveredProject && (
              <div className="overlay">
                <a href="https://www.example.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M21.0938 15.625H19.5312C19.324 15.625 19.1253 15.7073 18.9788 15.8538C18.8323 16.0003 18.75 16.199 18.75 16.4062V21.875H3.125V6.25H10.1562C10.3635 6.25 10.5622 6.16769 10.7087 6.02118C10.8552 5.87466 10.9375 5.67595 10.9375 5.46875V3.90625C10.9375 3.69905 10.8552 3.50034 10.7087 3.35382C10.5622 3.20731 10.3635 3.125 10.1562 3.125H2.34375C1.72215 3.125 1.12601 3.37193 0.686468 3.81147C0.24693 4.25101 0 4.84715 0 5.46875L0 22.6562C0 23.2779 0.24693 23.874 0.686468 24.3135C1.12601 24.7531 1.72215 25 2.34375 25H19.5312C20.1529 25 20.749 24.7531 21.1885 24.3135C21.6281 23.874 21.875 23.2779 21.875 22.6562V16.4062C21.875 16.199 21.7927 16.0003 21.6462 15.8538C21.4997 15.7073 21.301 15.625 21.0938 15.625ZM23.8281 0H17.5781C16.5347 0 16.0132 1.26514 16.748 2.00195L18.4927 3.74658L6.5918 15.6431C6.48255 15.7519 6.39586 15.8813 6.33672 16.0237C6.27757 16.1662 6.24712 16.3189 6.24712 16.4731C6.24712 16.6274 6.27757 16.7801 6.33672 16.9225C6.39586 17.065 6.48255 17.1944 6.5918 17.3032L7.69873 18.4082C7.8076 18.5175 7.93697 18.6041 8.07941 18.6633C8.22186 18.7224 8.37457 18.7529 8.52881 18.7529C8.68304 18.7529 8.83576 18.7224 8.9782 18.6633C9.12065 18.6041 9.25002 18.5175 9.35889 18.4082L21.2539 6.50977L22.998 8.25195C23.7305 8.98438 25 8.47168 25 7.42188V1.17188C25 0.861074 24.8765 0.563003 24.6568 0.343234C24.437 0.123465 24.1389 0 23.8281 0Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <p>{hoveredProject}</p>
              </div>
            )}
          </div>
          <div
            className="projectContainer"
            onMouseEnter={() => handleProjectHover("Project Three")}
          >
            <img src={projectThree} alt="projectThree" />
            {hoveredProject && (
              <div className="overlay">
                <a href="https://www.example.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M21.0938 15.625H19.5312C19.324 15.625 19.1253 15.7073 18.9788 15.8538C18.8323 16.0003 18.75 16.199 18.75 16.4062V21.875H3.125V6.25H10.1562C10.3635 6.25 10.5622 6.16769 10.7087 6.02118C10.8552 5.87466 10.9375 5.67595 10.9375 5.46875V3.90625C10.9375 3.69905 10.8552 3.50034 10.7087 3.35382C10.5622 3.20731 10.3635 3.125 10.1562 3.125H2.34375C1.72215 3.125 1.12601 3.37193 0.686468 3.81147C0.24693 4.25101 0 4.84715 0 5.46875L0 22.6562C0 23.2779 0.24693 23.874 0.686468 24.3135C1.12601 24.7531 1.72215 25 2.34375 25H19.5312C20.1529 25 20.749 24.7531 21.1885 24.3135C21.6281 23.874 21.875 23.2779 21.875 22.6562V16.4062C21.875 16.199 21.7927 16.0003 21.6462 15.8538C21.4997 15.7073 21.301 15.625 21.0938 15.625ZM23.8281 0H17.5781C16.5347 0 16.0132 1.26514 16.748 2.00195L18.4927 3.74658L6.5918 15.6431C6.48255 15.7519 6.39586 15.8813 6.33672 16.0237C6.27757 16.1662 6.24712 16.3189 6.24712 16.4731C6.24712 16.6274 6.27757 16.7801 6.33672 16.9225C6.39586 17.065 6.48255 17.1944 6.5918 17.3032L7.69873 18.4082C7.8076 18.5175 7.93697 18.6041 8.07941 18.6633C8.22186 18.7224 8.37457 18.7529 8.52881 18.7529C8.68304 18.7529 8.83576 18.7224 8.9782 18.6633C9.12065 18.6041 9.25002 18.5175 9.35889 18.4082L21.2539 6.50977L22.998 8.25195C23.7305 8.98438 25 8.47168 25 7.42188V1.17188C25 0.861074 24.8765 0.563003 24.6568 0.343234C24.437 0.123465 24.1389 0 23.8281 0Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <p>{hoveredProject}</p>
              </div>
            )}
          </div>
          <div
            className="projectContainer"
            onMouseEnter={() => handleProjectHover("Project Four")}
          >
            <img src={projectFour} alt="projectFour" />
            {hoveredProject && (
              <div className="overlay">
                <a href="https://www.example.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M21.0938 15.625H19.5312C19.324 15.625 19.1253 15.7073 18.9788 15.8538C18.8323 16.0003 18.75 16.199 18.75 16.4062V21.875H3.125V6.25H10.1562C10.3635 6.25 10.5622 6.16769 10.7087 6.02118C10.8552 5.87466 10.9375 5.67595 10.9375 5.46875V3.90625C10.9375 3.69905 10.8552 3.50034 10.7087 3.35382C10.5622 3.20731 10.3635 3.125 10.1562 3.125H2.34375C1.72215 3.125 1.12601 3.37193 0.686468 3.81147C0.24693 4.25101 0 4.84715 0 5.46875L0 22.6562C0 23.2779 0.24693 23.874 0.686468 24.3135C1.12601 24.7531 1.72215 25 2.34375 25H19.5312C20.1529 25 20.749 24.7531 21.1885 24.3135C21.6281 23.874 21.875 23.2779 21.875 22.6562V16.4062C21.875 16.199 21.7927 16.0003 21.6462 15.8538C21.4997 15.7073 21.301 15.625 21.0938 15.625ZM23.8281 0H17.5781C16.5347 0 16.0132 1.26514 16.748 2.00195L18.4927 3.74658L6.5918 15.6431C6.48255 15.7519 6.39586 15.8813 6.33672 16.0237C6.27757 16.1662 6.24712 16.3189 6.24712 16.4731C6.24712 16.6274 6.27757 16.7801 6.33672 16.9225C6.39586 17.065 6.48255 17.1944 6.5918 17.3032L7.69873 18.4082C7.8076 18.5175 7.93697 18.6041 8.07941 18.6633C8.22186 18.7224 8.37457 18.7529 8.52881 18.7529C8.68304 18.7529 8.83576 18.7224 8.9782 18.6633C9.12065 18.6041 9.25002 18.5175 9.35889 18.4082L21.2539 6.50977L22.998 8.25195C23.7305 8.98438 25 8.47168 25 7.42188V1.17188C25 0.861074 24.8765 0.563003 24.6568 0.343234C24.437 0.123465 24.1389 0 23.8281 0Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <p>{hoveredProject}</p>
              </div>
            )}
          </div>
          <div
            className="projectContainer"
            onMouseEnter={() => handleProjectHover("Project Five")}
          >
            <img src={projectFive} alt="projectFive" />
            {hoveredProject && (
              <div className="overlay">
                <a href="https://www.example.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M21.0938 15.625H19.5312C19.324 15.625 19.1253 15.7073 18.9788 15.8538C18.8323 16.0003 18.75 16.199 18.75 16.4062V21.875H3.125V6.25H10.1562C10.3635 6.25 10.5622 6.16769 10.7087 6.02118C10.8552 5.87466 10.9375 5.67595 10.9375 5.46875V3.90625C10.9375 3.69905 10.8552 3.50034 10.7087 3.35382C10.5622 3.20731 10.3635 3.125 10.1562 3.125H2.34375C1.72215 3.125 1.12601 3.37193 0.686468 3.81147C0.24693 4.25101 0 4.84715 0 5.46875L0 22.6562C0 23.2779 0.24693 23.874 0.686468 24.3135C1.12601 24.7531 1.72215 25 2.34375 25H19.5312C20.1529 25 20.749 24.7531 21.1885 24.3135C21.6281 23.874 21.875 23.2779 21.875 22.6562V16.4062C21.875 16.199 21.7927 16.0003 21.6462 15.8538C21.4997 15.7073 21.301 15.625 21.0938 15.625ZM23.8281 0H17.5781C16.5347 0 16.0132 1.26514 16.748 2.00195L18.4927 3.74658L6.5918 15.6431C6.48255 15.7519 6.39586 15.8813 6.33672 16.0237C6.27757 16.1662 6.24712 16.3189 6.24712 16.4731C6.24712 16.6274 6.27757 16.7801 6.33672 16.9225C6.39586 17.065 6.48255 17.1944 6.5918 17.3032L7.69873 18.4082C7.8076 18.5175 7.93697 18.6041 8.07941 18.6633C8.22186 18.7224 8.37457 18.7529 8.52881 18.7529C8.68304 18.7529 8.83576 18.7224 8.9782 18.6633C9.12065 18.6041 9.25002 18.5175 9.35889 18.4082L21.2539 6.50977L22.998 8.25195C23.7305 8.98438 25 8.47168 25 7.42188V1.17188C25 0.861074 24.8765 0.563003 24.6568 0.343234C24.437 0.123465 24.1389 0 23.8281 0Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <p>{hoveredProject}</p>
              </div>
            )}
          </div>
          <div
            className="projectContainer"
            onMouseEnter={() => handleProjectHover("Project Six")}
          >
            <img src={projectSix} alt="projectSix" />
            {hoveredProject && (
              <div className="overlay">
                <a href="https://www.example.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M21.0938 15.625H19.5312C19.324 15.625 19.1253 15.7073 18.9788 15.8538C18.8323 16.0003 18.75 16.199 18.75 16.4062V21.875H3.125V6.25H10.1562C10.3635 6.25 10.5622 6.16769 10.7087 6.02118C10.8552 5.87466 10.9375 5.67595 10.9375 5.46875V3.90625C10.9375 3.69905 10.8552 3.50034 10.7087 3.35382C10.5622 3.20731 10.3635 3.125 10.1562 3.125H2.34375C1.72215 3.125 1.12601 3.37193 0.686468 3.81147C0.24693 4.25101 0 4.84715 0 5.46875L0 22.6562C0 23.2779 0.24693 23.874 0.686468 24.3135C1.12601 24.7531 1.72215 25 2.34375 25H19.5312C20.1529 25 20.749 24.7531 21.1885 24.3135C21.6281 23.874 21.875 23.2779 21.875 22.6562V16.4062C21.875 16.199 21.7927 16.0003 21.6462 15.8538C21.4997 15.7073 21.301 15.625 21.0938 15.625ZM23.8281 0H17.5781C16.5347 0 16.0132 1.26514 16.748 2.00195L18.4927 3.74658L6.5918 15.6431C6.48255 15.7519 6.39586 15.8813 6.33672 16.0237C6.27757 16.1662 6.24712 16.3189 6.24712 16.4731C6.24712 16.6274 6.27757 16.7801 6.33672 16.9225C6.39586 17.065 6.48255 17.1944 6.5918 17.3032L7.69873 18.4082C7.8076 18.5175 7.93697 18.6041 8.07941 18.6633C8.22186 18.7224 8.37457 18.7529 8.52881 18.7529C8.68304 18.7529 8.83576 18.7224 8.9782 18.6633C9.12065 18.6041 9.25002 18.5175 9.35889 18.4082L21.2539 6.50977L22.998 8.25195C23.7305 8.98438 25 8.47168 25 7.42188V1.17188C25 0.861074 24.8765 0.563003 24.6568 0.343234C24.437 0.123465 24.1389 0 23.8281 0Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <p>{hoveredProject}</p>
              </div>
            )}
          </div>
          <div
            className="projectContainer"
            onMouseEnter={() => handleProjectHover("Project Seven")}
          >
            <img src={projectSeven} alt="projectSeven" />
            {hoveredProject && (
              <div className="overlay">
                <a href="https://www.example.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M21.0938 15.625H19.5312C19.324 15.625 19.1253 15.7073 18.9788 15.8538C18.8323 16.0003 18.75 16.199 18.75 16.4062V21.875H3.125V6.25H10.1562C10.3635 6.25 10.5622 6.16769 10.7087 6.02118C10.8552 5.87466 10.9375 5.67595 10.9375 5.46875V3.90625C10.9375 3.69905 10.8552 3.50034 10.7087 3.35382C10.5622 3.20731 10.3635 3.125 10.1562 3.125H2.34375C1.72215 3.125 1.12601 3.37193 0.686468 3.81147C0.24693 4.25101 0 4.84715 0 5.46875L0 22.6562C0 23.2779 0.24693 23.874 0.686468 24.3135C1.12601 24.7531 1.72215 25 2.34375 25H19.5312C20.1529 25 20.749 24.7531 21.1885 24.3135C21.6281 23.874 21.875 23.2779 21.875 22.6562V16.4062C21.875 16.199 21.7927 16.0003 21.6462 15.8538C21.4997 15.7073 21.301 15.625 21.0938 15.625ZM23.8281 0H17.5781C16.5347 0 16.0132 1.26514 16.748 2.00195L18.4927 3.74658L6.5918 15.6431C6.48255 15.7519 6.39586 15.8813 6.33672 16.0237C6.27757 16.1662 6.24712 16.3189 6.24712 16.4731C6.24712 16.6274 6.27757 16.7801 6.33672 16.9225C6.39586 17.065 6.48255 17.1944 6.5918 17.3032L7.69873 18.4082C7.8076 18.5175 7.93697 18.6041 8.07941 18.6633C8.22186 18.7224 8.37457 18.7529 8.52881 18.7529C8.68304 18.7529 8.83576 18.7224 8.9782 18.6633C9.12065 18.6041 9.25002 18.5175 9.35889 18.4082L21.2539 6.50977L22.998 8.25195C23.7305 8.98438 25 8.47168 25 7.42188V1.17188C25 0.861074 24.8765 0.563003 24.6568 0.343234C24.437 0.123465 24.1389 0 23.8281 0Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <p>{hoveredProject}</p>
              </div>
            )}
          </div>
          <div
            className="projectContainer"
            onMouseEnter={() => handleProjectHover("Project Eight")}
          >
            <img src={projectEight} alt="projectEight" />
            {hoveredProject && (
              <div className="overlay">
                <a href="https://www.example.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M21.0938 15.625H19.5312C19.324 15.625 19.1253 15.7073 18.9788 15.8538C18.8323 16.0003 18.75 16.199 18.75 16.4062V21.875H3.125V6.25H10.1562C10.3635 6.25 10.5622 6.16769 10.7087 6.02118C10.8552 5.87466 10.9375 5.67595 10.9375 5.46875V3.90625C10.9375 3.69905 10.8552 3.50034 10.7087 3.35382C10.5622 3.20731 10.3635 3.125 10.1562 3.125H2.34375C1.72215 3.125 1.12601 3.37193 0.686468 3.81147C0.24693 4.25101 0 4.84715 0 5.46875L0 22.6562C0 23.2779 0.24693 23.874 0.686468 24.3135C1.12601 24.7531 1.72215 25 2.34375 25H19.5312C20.1529 25 20.749 24.7531 21.1885 24.3135C21.6281 23.874 21.875 23.2779 21.875 22.6562V16.4062C21.875 16.199 21.7927 16.0003 21.6462 15.8538C21.4997 15.7073 21.301 15.625 21.0938 15.625ZM23.8281 0H17.5781C16.5347 0 16.0132 1.26514 16.748 2.00195L18.4927 3.74658L6.5918 15.6431C6.48255 15.7519 6.39586 15.8813 6.33672 16.0237C6.27757 16.1662 6.24712 16.3189 6.24712 16.4731C6.24712 16.6274 6.27757 16.7801 6.33672 16.9225C6.39586 17.065 6.48255 17.1944 6.5918 17.3032L7.69873 18.4082C7.8076 18.5175 7.93697 18.6041 8.07941 18.6633C8.22186 18.7224 8.37457 18.7529 8.52881 18.7529C8.68304 18.7529 8.83576 18.7224 8.9782 18.6633C9.12065 18.6041 9.25002 18.5175 9.35889 18.4082L21.2539 6.50977L22.998 8.25195C23.7305 8.98438 25 8.47168 25 7.42188V1.17188C25 0.861074 24.8765 0.563003 24.6568 0.343234C24.437 0.123465 24.1389 0 23.8281 0Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <p>{hoveredProject}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="contactSection">
        <div className="contHeading">Contact</div>
        <div className="contFlexContainer">
          <div className="contLeftSection">
            <div class="contListItem">
              <div class="contIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <g clip-path="url(#clip0_6_180)">
                    <path
                      d="M24.2866 17.6661L18.8179 15.3223C18.5842 15.2227 18.3246 15.2018 18.078 15.2625C17.8315 15.3233 17.6113 15.4625 17.4507 15.6592L15.0288 18.6182C11.2279 16.8261 8.16904 13.7673 6.37695 9.96635L9.33594 7.54448C9.53305 7.38417 9.67256 7.164 9.73335 6.91731C9.79414 6.67062 9.7729 6.41083 9.67285 6.17729L7.3291 0.708542C7.21929 0.456788 7.02508 0.25124 6.77996 0.12734C6.53483 0.00344002 6.25416 -0.0310452 5.98633 0.0298307L0.908203 1.20171C0.649985 1.26133 0.419602 1.40672 0.254656 1.61415C0.0897096 1.82157 -5.94829e-05 2.07878 2.95713e-08 2.3438C2.95713e-08 14.8682 10.1514 25 22.6562 25C22.9213 25.0002 23.1787 24.9105 23.3862 24.7455C23.5937 24.5806 23.7392 24.3501 23.7988 24.0918L24.9707 19.0137C25.0312 18.7446 24.996 18.4628 24.8711 18.2168C24.7463 17.9708 24.5396 17.7761 24.2866 17.6661Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_180">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="info">
                <div class="value">+8801567-953483</div>
              </div>
            </div>
            <div class="contListItem">
              <div class="contIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M24.5264 9.31641C24.7168 9.16504 25 9.30664 25 9.5459V19.5312C25 20.8252 23.9502 21.875 22.6562 21.875H2.34375C1.0498 21.875 0 20.8252 0 19.5312V9.55078C0 9.30664 0.27832 9.16992 0.473633 9.32129C1.56738 10.1709 3.01758 11.25 7.99805 14.8682C9.02832 15.6201 10.7666 17.2021 12.5 17.1924C14.2432 17.207 16.0156 15.5908 17.0068 14.8682C21.9873 11.25 23.4326 10.166 24.5264 9.31641ZM12.5 15.625C13.6328 15.6445 15.2637 14.1992 16.084 13.6035C22.5635 8.90137 23.0566 8.49121 24.5508 7.31934C24.834 7.09961 25 6.75781 25 6.39648V5.46875C25 4.1748 23.9502 3.125 22.6562 3.125H2.34375C1.0498 3.125 0 4.1748 0 5.46875V6.39648C0 6.75781 0.166016 7.09473 0.449219 7.31934C1.94336 8.48633 2.43652 8.90137 8.91602 13.6035C9.73633 14.1992 11.3672 15.6445 12.5 15.625Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="info">
                <div class="value">mdriead.bd@gmail.com</div>
              </div>
            </div>
            <div class="contListItem">
              <div class="contIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <g clip-path="url(#clip0_6_177)">
                    <path
                      d="M21.7051 0.171806L1.40331 9.54192C-0.938978 10.6352 -0.158216 14.0707 2.34032 14.0707H10.9297V22.6601C10.9297 25.1586 14.3652 25.9399 15.4585 23.5971L24.8286 3.29534C25.6094 1.42083 23.5791 -0.609444 21.7051 0.171806Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_177">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="info">
                <div class="value">Zirabo, Ashulia, Savar, Dhaka</div>
              </div>
            </div>
          </div>

          <div className="contRightSection">
            <form action="">
              <div className="contForm">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
                <input type="phone" placeholder="Phone Number" />
                <input type="text" placeholder="Subject" />
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
                <button type="button">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footerSection">
        Copywrite & Copy : 2023 | All Right Reserved by RIEAD
      </div>
    </div>
  );
}
export default App;
