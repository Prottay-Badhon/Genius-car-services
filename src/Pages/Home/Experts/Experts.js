import React from 'react';
import './Experts.css';
import expert1 from "../../../images/experts/expert-1.jpg"
import expert2 from "../../../images/experts/expert-2.jpg"
import expert3 from "../../../images/experts/expert-3.jpg"
import expert4 from "../../../images/experts/expert-4.jpg"
import expert5 from "../../../images/experts/expert-5.jpg"
import expert6 from "../../../images/experts/expert-6.png"
import Expert from '../Expert/Expert';
const experts=[
    {id: 1,name: "expert-1",image: expert1},
    {id: 2,name: "expert-2",image: expert2},
    {id: 3,name: "expert-3",image: expert3},
    {id: 4,name: "expert-4",image: expert4},
    {id: 5,name: "expert-5",image: expert5},
    {id: 6,name: "expert-6",image: expert6},

]

const Experts = () => {
    return (
            <div className="container" id="experts">
                <h2 className='text-center'>Our Experts</h2>
               <div className="row gx-5 ">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
               </div>
            </div>
    );
};

export default Experts;