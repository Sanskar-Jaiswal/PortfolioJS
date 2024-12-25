import React from 'react'
import "./MyProjects.css"


const MyProjects = () => {
  return (
    <section id="projects"> <h1 className='title'>Projects</h1>
    <p>
        Showcasing projects highlights practical applications of skills and demonstrates a hands-on understanding of key concepts. Each project serves as a portfolio piece, providing tangible proof of technical abilities, problem-solving skills, and attention to detail. By building and sharing these projects, professionals illustrate their proficiency in specific technologies, adaptability to industry trends, and capability to deliver impactful solutions. Ultimately, these projects emphasize both technical competence and creativity, making them invaluable for career growth and professional credibility.
    </p>
    <div className="card-container">
    <div className="card">
      <img src="./image/devops.png" alt="Image 1" className="card-img"/>
      <h3 className="card-title">DevOps & CI/CD Automation</h3>
      <p className="card-description">Projects features that automated on CI/CD pipelines with Jenkins, Docker, and Kubernetes and storing artifacts in UrbanCode Deploy maintaining the version for reliable deployment across Azure, enhancing scalability and efficiency.</p>
    </div>
    <div className="card">
      <img src="./image/UIUX.png" alt="Image 2" className="card-img"/>
      <h3 className="card-title">UI/UX Design:</h3>
      <p className="card-description">Projects highlight a design-focused approach with Figma, blending professional aesthetics and functionality, tailored for intuitive and visually appealing interfaces across web and mobile.</p>
    </div>
    <div className="card">
      <img src="./image/dotnet.png" alt="Image 3" className="card-img"/>
      <h3 className="card-title">.NET Development</h3>
      <p className="card-description">Includes full-stack solutions such as a real-time chat application  built with clean architecture, emphasizing scalable backend development and secure data management .</p>
    </div>
    <div className="card">
      <img src="./image/terra.png" alt="Image 4" className="card-img"/>
      <h3 className="card-title"> IaC with Terraform</h3>
      <p className="card-description">Using Terraform, automated and manages infrastructure on Azure, enabling scalable, consistent, and repeatable environments for development and testing.</p>
    </div>
    <div className="card">
      <img src="./image/AI.png" alt="Image 5" className="card-img"/>
      <h3 className="card-title">Card 5 Title</h3>
      <p className="card-description">This is a description for Card 5.</p>
    </div>
    <div className="card">
      <img src="./image/agile.png" alt="Image 6" className="card-img"/>
      <h3 className="card-title">Card 6 Title</h3>
      <p className="card-description">This is a description for Card 6.</p>
    </div>
  </div>
    </section>
   
  )
}

export default MyProjects