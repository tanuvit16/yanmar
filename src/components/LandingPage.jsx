import React from 'react'
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <>
    <div className="box">
        <div className="half">
             <div className="carditem">
                 <div className="image">
                     <img src="ChatGPT Image Jun 9, 2025, 11_19_13 AM.png" alt="" className="img" />
                 </div>
                 <h4 className="sub">Visitors</h4>
                 <p className="para">view and manage visitor entries<br/> as an admin.</p>
            </div>
            <div className="carditem">
                 <div className="image">
                     <img src="materials.png" alt="" className="img" />
                 </div>
                 <h4 className="sub">Materials</h4>
                 <p className="para">Admin access to material<br/> inventory and records.</p>
            </div>
             <div className="carditem">
                 <div className="image">
                     <img src="safety.png" alt="" className="img" />
                 </div>
                 <h4 className="sub">Safety</h4>
                 <p className="para">Monitor safety protocols and<br/> incident logs.</p>
            </div>
                        <div className="carditem">
                 <div className="image">
                    <img src="health.png" alt="" className="img" />
                 </div>
                 <h4 className="sub">Health</h4>
                 <p className="para">Track workplace health status<br/> and reports.</p>
            </div>
            <div className="carditem">
                 <div className="image">
                     <img src="hazard.png" alt="" className="img" />
                 </div>
                 <h4 className="sub">Hazard</h4>
                 <p className="para">Monitor and manage reported<br/> hazards efficintly.</p>
            </div>
             <div className="carditem1">
                 {/* <div className="image">
                     <img src="logo.png" alt="" className="img" />
                 </div>
                 <h4 className="sub">Material</h4>
                 <p className="para">Zero Defect Mission</p> */}
            </div>




        </div>






    </div>
    
    
    
    
    </>
  )
}

export default LandingPage