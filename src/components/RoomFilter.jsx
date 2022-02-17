import Title from "../components/Title";
import { useContext } from "react";
import { RoomContext } from "../context";

// get unique values
const getUnique = (items,value) =>{
    return ([...new Set(items.map(item => item[value]))])
}
const RoomFilter = ({rooms}) =>{

    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        pets,
        breakfast

    } = context

    // get unique types
    let types = getUnique(rooms, "type")

    // add all
    types = ["all", ...types]

    // map to jsx
    types = types.map((item,index)=>{
        return <option value={item} key = {index}>{item}</option>
    })

    let people = getUnique(rooms, "capacity")
    people = people.map((item, index) =>{
        return (
            <option value={item} key = {index}>
                {item}
            </option>
        )
    })


    
   
    return(
       <section className="filter-container">
        <Title title = "search rooms"/>
        <form  className="filter-form">
            {/* start select type */}
            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select name="type" id="type" value = {type} onChange = {handleChange} className="form-control">{types}</select>
            </div>
            {/* end select type */}

             {/* start guest type */}
             <div className="form-group">
                <label htmlFor="capacity">guest</label>
                <select name="capacity" id="capacity" value = {capacity} onChange = {handleChange} className="form-control">{people}</select>
            </div>
            {/* end guest type */}

            {/* room price */}
            <div className="form-group">
                <label htmlFor="price">
                   room price ${price}
                </label>
                <input type="range" name = "price" min = {minPrice} max = {maxPrice} id = "price" value = {price} onChange = {handleChange} className="form-control" />
            </div>
            {/*end of room price */}

            {/* room size */}
            <div className="form-group">
                <label htmlFor="size">room size</label>
                <div className="size-inputs">
                    <input type="number" name="minSize" id="size" value = {minSize} onChange = {handleChange}  className="size-input" />
                    <input type="number" name="maxSize" id="size" value = {maxSize} onChange = {handleChange}  className="size-input" />
                </div>
            </div>
            {/* end of room size */}

            {/* extras */}
            <div className="form-group">
                {/* breakfast */}
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" checked = {breakfast} onChange = {handleChange} id="breakfast" />
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                     {/* pets */}
                <div className="single-extra">
                    <input type="checkbox" name="pets" checked = {pets} onChange = {handleChange} id="pets" />
                    <label htmlFor="pets">pets</label>
                </div>
            </div>
            {/* end of extras */}
        </form>

       </section>
    )
}

export default RoomFilter