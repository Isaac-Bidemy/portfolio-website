
import React from 'react';



import "./Projects.css";
import Project1 from "../../assets/images/project6.png";
import Project5 from "../../assets/images/project4.png";
import Project6 from "../../assets/images/project1.png";
import Project7 from "../../assets/images/wild.png";




import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';


const Projects = () =>{

    const data = [
        {
            src: Project6,
            url: "https://sales-site-five.vercel.app/"
        },
       
        {
            src: Project5,
            url: "https://iom-replica.vercel.app/index1.html"
        },
        {
            src: Project1,
            url: "https://shop-site-eight.vercel.app/"
        },
        {
            src: Project7,
            url: "#"
        },
     
    ]
    return(
        <section id="projects">
            <div className="project-heading">
                <h3>Recent Projects</h3>
                <p>*Some are group project while some are personal project, click on it to take you to the website*</p>
                
            </div>

            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        //   },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
            data.map(project => (
                <SwiperSlide key={project.src}>
                    <div className="project-box">
                        <a href={project.url}>
                            <img src={project.src} alt="project"/>
                            <div className="p-overlayer">
                                <strong>Outserved Reports</strong>

                            </div>

                        </a>

                    </div>
                    
                </SwiperSlide>

            ))
        }
        
       
      </Swiper>


            <div className="github-link">
                <a href="https://docs.google.com/document/d/1jG6Et30BsiuvY54NQxmVE522thNYl_ag/edit?usp=sharing&ouid=105305121172716761672&rtpof=true&sd=true" className="btn-link">
                My Resume
                </a>

            </div>
            
        </section>
    )
}
export default Projects; 