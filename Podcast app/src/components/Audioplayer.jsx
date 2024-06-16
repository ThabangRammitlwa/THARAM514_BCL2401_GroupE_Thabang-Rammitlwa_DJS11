import ReactAudioPlayer from "react-audio-player";

const Audioplayer=(AudioSrc)=>{

   return(
    <div>
        <ReactAudioPlayer
        src={AudioSrc}
        controls
        />
    </div>
    );
    };
    export default Audioplayer;


