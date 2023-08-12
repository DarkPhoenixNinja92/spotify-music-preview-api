import playPause from "../assets/play-pause.svg";

const Preview = () => {
    return (
        <div className="outer">
            <h3 className="close">X</h3>
            <div className="inner">
                <img src="" alt="" srcset="" />
                <h3 className="songName">Song Name</h3>
                <h3 className="artistName">Artist</h3>
                <img className="playPause" src={playPause} />
            </div>
        </div>
    )
}

export default Preview;