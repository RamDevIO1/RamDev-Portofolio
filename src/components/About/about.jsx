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
    </article>
  )
};

export default About;
