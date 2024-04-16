import React from "react";

const ExamsCard = ({exam1}) =>{
    return(
        <div className="exam">
            <div className='examposter'>
                <img src={exam1.poster} alt='{exam1.name}'/>
            </div>
            <div className='examname'>
                <p>{exam1.name}</p>
            </div>
            <div className='examschool'>
                <p>By {exam1.school}</p>
            </div>
            <div className='examdetails'>
                <span className='examstudents'>
                  <p>For Classes {exam1.students}</p>
                </span>
                <span className='examcost'>
                  <p>$ {exam1.cost}</p>
                </span>
            </div>
            <div className='exambutton'>
                <button>start Practcing</button>
              </div>
        </div>
    );
}

export default ExamsCard;