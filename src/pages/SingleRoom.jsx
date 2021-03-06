import {Link} from "react-router-dom"
import DefaultBcg from "../images/room-1.jpeg";
import { RoomContext } from "../context";
import { Component } from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import StyledHero from "../components/StyledHero";

class SingleRoom extends Component{

    constructor(props){
        super(props)
        // console.log(this.props);

        this.state = {
            slug : this.props.match.params.slug,
            DefaultBcg
        }
    }

        static contextType = RoomContext

    render(){
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)

        if (!room){
            return <div className="error">
            <h3>no such room can be found</h3>
            <Link to = "/rooms" className="btn-primary">
                return to rooms
            </Link>
        </div>
            
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room

        const [mainImg, ...defaultImg] = images
        return(
            <>
            <StyledHero img = {images[0] || this.state.DefaultBcg}>
                <Banner title = {`${name} room`}>
                    <Link to = "/rooms" className = "btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item, index) =>{
                        return <img key = {index} src={item} alt={name} />
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size :  {size} SQFT</h6>
                        <h6>max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                        <h6>{pets ? "pets are allowed" : "no pets in the premises"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index) =>{
                        return <li key = {index}>
                            * {item}
                        </li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}

export default SingleRoom