import React from "react";
import "./Carrer.css";



const Carrer = () =>{

    const carrers = [
        {
            title: "Front-end sofware developer.",
            name: "Senior",
            year: "2022-Present"
        },
        {
            title: "Bank Sales officer.",
            name: "Senior",
            year: "2024"
        },
        {
            title: "Trucker.",
            name: "Manager",
            year: "2020-2022"
        },

    ]
    const educations = [
        {
            title: "University of Ilorin, Nigeria",
            name: "Bachelor of Science of Information and Commmnication Science",
            year: "2016 - 2022"
        },
        {
            title: "New horizons Ikeja, Lagos, Nigeria",
            name: "Frontend software Development Certification",
            year: "2024 - 2025"
        },
        {
            title: "Academic project",
            name: "Development of Webbase (LGP) Sales System ",
            year: "2021-2022"
        },
    ]
    return (
        <section id="carrer">
            <div className="carrer-education">
                <div className="carrer" data-aos="fade-right">
                    <h3>Carrer</h3>
                    <div className="c-b-container">
                        {
                            carrers.map((carrer, index)=>(
                                <div className="c-box" key={index}>
                                    <h4>{carrer.title}</h4>
                                    <strong>{carrer.name}</strong>
                                    <span>{carrer.year}</span>

                                </div>

                            ))
                        } 

                    </div>


                </div>
                <div className="carrer edu" data-aos="fade-left">
                    <h3>Education</h3>
                    <div className="c-b-container">
                        {
                            educations.map((carrer, index)=>(
                                <div className="c-box" key={index}>
                                    <h4>{carrer.title}</h4>
                                    <strong>{carrer.name}</strong>
                                    <span>{carrer.year}</span>

                                </div>

                            ))
                        } 

                    </div>


                </div>
                
            </div>
            <div className="btn-c">
                    <a href="#" download className="btn-link">
                        Get CV <i className="fa-solid fa-download"></i>
                    </a>

                </div>
            
        </section>
    )
}
export default Carrer;