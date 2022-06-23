import React from 'react'
import Title from '../home/Title'
// import { online } from './project'
import proj1 from '../../img/proj1.jpg'
import proj2 from '../../img/proj2.png'
import './project.css'

export const online =[
    {
        id:1,
        cover:proj1,
        // hoverCover: "./images/courses/online/o1.1.png",
        projectName: "UI/UX Design Courses",
        project: "View Demo",
      },
      {
        id:2,
        cover: proj2,
        // hoverCover: "./images/courses/online/o2.1.png",
        projectName: "Art & Design",
        project: "view Demo",
      },
      {
        id:1,
        cover:proj1,
        // hoverCover: "./images/courses/online/o1.1.png",
        projectName: "UI/UX Design Courses",
        project: "View Demo",
      },
      {
        id:2,
        cover: proj2,
        // hoverCover: "./images/courses/online/o2.1.png",
        projectName: "Art & Design",
        project: "view Demo",
      },
      {
        id:1,
        cover:proj1,
        // hoverCover: "./images/courses/online/o1.1.png",
        projectName: "UI/UX Design Courses",
        project: "View Demo",
      },
      {
        id:2,
        cover: proj2,
        // hoverCover: "./images/courses/online/o2.1.png",
        projectName: "Art & Design",
        project: "view Demo",
      },
      {
        id:1,
        cover:proj1,
        // hoverCover: "./images/courses/online/o1.1.png",
        projectName: "UI/UX Design Courses",
        project: "View Demo",
      },
      {
        id:2,
        cover: proj2,
        // hoverCover: "./images/courses/online/o2.1.png",
        projectName: "Art & Design",
        project: "view Demo",
      },
      {
        id:1,
        cover:proj1,
        // hoverCover: "./images/courses/online/o1.1.png",
        projectName: "UI/UX Design Courses",
        project: "View Demo",
      },
      {
        id:2,
        cover: proj2,
        // hoverCover: "./images/courses/online/o2.1.png",
        projectName: "Art & Design",
        project: "view Demo",
      },
      {
        id:1,
        cover:proj1,
        // hoverCover: "./images/courses/online/o1.1.png",
        projectName: "UI/UX Design Courses",
        project: "View Demo",
      },
      {
        id:2,
        cover: proj2,
        // hoverCover: "./images/courses/online/o2.1.png",
        projectName: "Art & Design",
        project: "view Demo",
      },
]

const ProjectCard = () => {
    
  return (
    <div>
        <section className="online">
            <div className="container">
            <Title subtitle={'Project'} title={'Browse Our Projects '}/>
            <div className="content grid3">
                {online.map((val) =>(
                    <div className="box">
                         <div className="img">
                            <img src={val.cover} alt="" />
                           
                        </div> 
                        <h1>{val.projectName}</h1>
                        <button className='proj-btn'>{val.project}</button>
                    </div>
                ))}

                    
          

            </div>
            </div>
        </section>
    </div>
  )
}

export default ProjectCard