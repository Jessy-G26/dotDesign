import React from 'react'
import Title from '../home/Title'
import './project.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation,Autoplay} from 'swiper'
import { online } from './project'
import 'swiper/css';

SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);


const ProjectCard = () => {
    
  return (
    <div>
      
       <section id='projects'>
      <div className="container">
      <Title subtitle={'Projects'} title={'Some of our recents works '}/>
      <div className="projects_allitems">
      <Swiper
        autoplay={{ delay: 1000 }} 
        spaceBetween={30}
        slidesPerView={2}
        navigation
        breakpoints={
          {

            480:{
              slidesPerView:1,
            },
            600:{
                slidesPerView:1,
            },
            1024:{
              slidesPerView:2,

            },

           
          }
        }
      
      >
        {/* {online.map((val,index)=>{
          if(index >= 10) return;
          return(
            <SwiperSlide key={val.id}>
            <Link to="/projects" className='projectItem_img'>
            <img src={val.cover} alt="" />
            </Link>
            </SwiperSlide>
          )
        })} */}

        {online.map((val,index,demo)=>{
          if(index >= 10) return;
          return(
            <SwiperSlide key={val.id}>
             <div className="projectItem_img">
              <img src={val.cover} alt="" />
             </div>
             <a href={val.demo} target='_blank'  ><button className='proj-btn'>View Demo</button></a>
            </SwiperSlide>
          )
        })}
      </Swiper>
      </div>
      </div>
     
    </section> 
    </div>
    
  )
}

export default ProjectCard