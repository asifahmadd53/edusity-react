import React from 'react'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import  './About.css'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSIRTY</h3>  
            <h2>Nurturing</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum quae modi dolor error quas ipsa! Quae eius aliquid, asperiores dolor voluptatibus fugiat et eos. Magnam quis dolores illum ducimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum provident fugit veritatis nihil illo sint ad officia, vitae cupiditate velit, labore cumque! Commodi earum saepe minus, dolore magni neque corrupti.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis beatae delectus quae minus assumenda, eaque aliquid iste quas corrupti libero quos pariatur qui excepturi, doloremque recusandae alias laboriosam aperiam sed!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia esse tempore asperiores ipsam cumque, qui, temporibus culpa error minus ducimus perspiciatis rerum assumenda fuga quibusdam accusamus vero possimus porro laudantium?</p>
        </div>
    </div>
  )
}

export default About
