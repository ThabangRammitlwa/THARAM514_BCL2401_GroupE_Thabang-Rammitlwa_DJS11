import { useState, useRef } from 'react';

export const AudioPlayer = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const playAudio = (url: string) => {
        const audio = new Audio(url);
        audio.addEventListener('canplaythrough', () => {
            setDuration(audio.duration);
            audioRef.current = audio;
            audio.play();
            setIsPlaying(true);
        });
        audio.addEventListener('timeupdate', () => {
            setCurrentTime(audio.currentTime);
        });
        audio.addEventListener('ended', () => {
            setIsPlaying(false);
            setCurrentTime(0);
        });
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const seekAudio = (time: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    return{isPlaying,currentTime, duration,playAudio,pauseAudio,seekAudio}

}

export default AudioPlayer