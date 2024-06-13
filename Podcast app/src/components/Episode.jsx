import {useEffect , useState} from 'react';
import {useParams} from 'react-router-dom';

const Episode=()=>{
    const {episodeId}= useParams();
    const [episode,setEpisode]=useState({});

    useEffect(()=>{
        const fetchEpisode=async()=>{
            const response=await fetch(`https://podcast-api.netlify.app/episode/${episode}`);
                const data=await response.json();
                setEpisode(data);
        }
        fetchEpisode();
        },[episodeId]);

        return(
            <div>
                <h1>{episode.title}</h1>
                <p>{episode.description}</p>
                <audio controls src={episode.audio} />
                </div>
        )
        }
        export default Episode;

     
