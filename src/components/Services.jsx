import { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'; 

class Services extends Component{
    state = {
        services : [
            {
                icon : <FaCocktail/>,
                title : "Free Cocktails",
                info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam neque sit, consectetur corrupti sequi"
            },

            {
                icon : <FaHiking/>,
                title : "Endless Hiking",
                info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam neque sit, consectetur corrupti sequi"
            },

            {
                icon : <FaShuttleVan/>,
                title : "Free Shuttles",
                info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam neque sit, consectetur corrupti sequi"
            },

            {
                icon : <FaBeer/>,
                title : "Free Beer",
                info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam neque sit, consectetur corrupti sequi"
            },



        ]
    }
    render(){
        return(
            <section className="services">
               <Title title = "services"/>
               <div className="services-center">
                   {this.state.services.map((item,index) => {
                       return (
                           <article key = {index} className="service">
                               <span>{item.icon}</span>
                               <h5>{item.title}</h5>
                               <p>{item.info}</p>

                           </article>
                       )
                   })}
               </div>
            </section>
        )
    }
}

export default Services