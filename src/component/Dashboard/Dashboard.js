import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
  return (
 
    <div className='container'>
      <div className='text'>
          <h1 className='title'>I ’m Sanskar.</h1>
          <h4 className='des'>Web  Developer  |  UI Designer  |  Devops Engineer</h4>
           <p>
              Innovative and results-driven Full Stack Developer and DevOps Engineer with a robust foundation in ASP.NET Core, ASP.NET MVC, and MSSQL. Demonstrated history of architecting and implementing sophisticated systems, such as employee management and ecommerce application platforms using .Net Entity Framework and React.
              Proficient in optimizing application performance, minimizing downtime, and ensuring seamless application flow across systems to enhance operational efficiency. Adept at continuous improvement through mastering emerging technologies, maintaining alignment with industry advancements. 
              Proven track record of integrating cutting-edge technologies and frameworks into projects to drive tangible benefits, resulting in enhanced project success and organizational profitability. Committed to excellence, innovation, and ongoing learning to deliver continuous value to teams and projects.
          </p>
          <a href="#projects" className='button'>Explore my work </a>
        </div>
      <div className='profileimage'>
    <     img src="./image/profilephoto.png" alt="myimage"/>
      </div>
    </div>


  )
}

export default Dashboard