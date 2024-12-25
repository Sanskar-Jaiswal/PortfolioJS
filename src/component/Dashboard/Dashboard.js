import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
  return (
 
    <div className='container'>
    <div className='text'>
    <h1 className='title'>I ’m Sanskar.</h1>
    <h4 className='des'>Web  Developer  |  UI Designer  |  Devops Engineer</h4>
    <p>
    Rutrum cursus varius ullamcorper venenatis faucibus lobortis
     turpis dignissim. Commodo pellentesque tristique aliquet turpis.
     Morbi risus imperdiet
    </p>
    <button  className='button'>Explore my work</button>
    </div>
    <div className='profileimage'>
    <img src="./image/profilephoto.png" alt="myimage"/>
    </div>
    </div>


  )
}

export default Dashboard