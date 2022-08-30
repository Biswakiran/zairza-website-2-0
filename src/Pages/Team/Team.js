import React from 'react'
import './Team.scss'
import team1 from '../../Assets/Image/team1.jfif'

export default function Team() {
  return (
    <>
    <div className="container">
        <p className="l-text">
           Lets Meet our Team
        </p>
        <p className="r-text">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem omnis nihil harum est quo a sunt possimus eum tempore fuga veniam dolor natus eius dolore recusandae iusto reprehenderit rem, molestiae veritatis unde perferendis aliquam reiciendis. Ipsam, delectus eos. Repellendus explicabo praesentium perferendis, earum voluptates id nisi atque animi laboriosam reprehenderit.
        </p>
    </div>

    <div className="team">
         <div className="item1">
            <img  className='img' src={team1} alt="" />
            < div className="item11">
            <p className="item-txt">Shuvam Kumar Panda </p>
             <p className="position">Coodinator</p>
             </div>   
         </div>
         <div className="item2">
         <img  className='img' src={team1} alt="" />
         < div className="item11">
            <p className="item-txt">Shuvam Kumar Panda </p>
             <p className="position">Coodinator</p>
             </div>   
         </div>
         <div className="item3">
         <img  className='img' src={team1} alt="" />
         < div className="item11">
            <p className="item-txt">Shuvam Kumar Panda </p>
             <p className="position">Coodinator</p>
             </div>   
         </div>
         <div className="item4">
         <img  className='img' src={team1} alt="" />
         < div className="item11">
            <p className="item-txt">Shuvam Kumar Panda </p>
             <p className="position">Coodinator</p>
             </div>   
         </div>
    </div>
    </>
  )
}
