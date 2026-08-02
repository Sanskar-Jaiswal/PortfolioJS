import "./MyCertification.css"
const MyCertification = () => {
  return (
   <section id="certification">
       <h1 className='title'>Certification </h1>
       <div className="images-container">
         <img className="image" src="/image/funda.png" alt="Azure AI Fundamentals" />
         <img className="image" src="/image/asso.png" alt="Azure Administrator Associate" />
         <img className="image" src="/image/ai900.png" alt="Microsoft AI certification" />
         <img className="image" src="/image/aws.png" alt="AWS Cloud Practitioner" />
         <img className="image" src="/image/az-305.png" alt="Azure Solutions Architect" />
       </div>
   </section>
     )
}

export default MyCertification