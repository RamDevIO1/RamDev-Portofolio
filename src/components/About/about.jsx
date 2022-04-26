import React from 'react'
import './about.css'

const About = () => {

  React.useEffect(() => {

  }, [])

  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm @RamDev who likes to learn new interesting things
          I am also a novice programmer learning programming languages Html, Css, Javascript, ReactJs, NodeJS
          I From Indonesia
        </p>
      </section>
      
      <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>
          <ul className="skills-list content-card">
            
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web design</h5>
                <data>50%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style="width: 50%;"></div>
              </div>
            </li>
            
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Html</h5>
                <data>80%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style="width: 80%;"></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Javascript</h5>
                <data>75%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style="width: 75%;"></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Css</h5>
                <data>56%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style="width: 56%;"></div>
              </div>
            </li>
            
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">ReactJs</h5>
                <data>25%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style="width: 25%;"></div>
              </div>
            </li>
            
          </ul>

        </section>

      
    </article>
  )
};

export default About;
