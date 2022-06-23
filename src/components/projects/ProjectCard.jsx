import React from 'react'
import Title from '../home/Title'
import './project.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation,Autoplay} from 'swiper'
import { online } from './project'
import {Link} from 'react-router-dom'

import 'swiper/css';

SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);


const ProjectCard = () => {
    
  return (
    <div>
      <div className="container">
      <Title subtitle={'Projects'} title={'Some of our recents works '}/>
      <div className="projects_allitems">
      <Swiper
        autoplay={{ delay: 2000 }} 
        spaceBetween={30}
        slidesPerView={2}
        navigation
        breakpoints={
          {
            640:{
                slidesPerView:1,
            },
            768:{
              slidesPerView:2,

            },

           
          }
        }
      
      >
        {online.map((val,index)=>{
          if(index >= 5) return;
          return(
            <SwiperSlide key={val.id}>
            <Link to="/projects" className='projectItem_img'>
            <img src={val.cover} alt="" />
            </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
      </div>
      </div>
        
    </div>
    
  )
}

export default ProjectCard