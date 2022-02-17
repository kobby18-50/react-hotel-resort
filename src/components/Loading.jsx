import loadingGif from "../images/gif/loading-gear.gif"
const Loading = () =>{
    return(
        <div className = "loading">
            <h4>room data is loading. please wait</h4>
            <img src={loadingGif} alt="" />
        </div>
    )
}

export default Loading