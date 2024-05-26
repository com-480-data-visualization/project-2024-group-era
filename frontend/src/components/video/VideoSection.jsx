import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoStyles.css';
import { BUTTON_PROPERTY } from '../../constants/button';

const VideoSection = () => {
    const navigate = useNavigate();

    const skipVideo = () => {
        navigate('/project-2024-group-era/home');
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <div className="video-responsive">
                <iframe 
                    src="https://www.youtube.com/embed/cvFVhOVkarw?autoplay=1&mute=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    title="YouTube video player"
                />
            </div>
            <button className={BUTTON_PROPERTY} style={{ position: 'absolute', right: 10, bottom: 10 }} onClick={skipVideo}>
                LET'S GO
            </button>
            <div className="video-names">
                <span role="img" aria-label="world">🌍</span> Group ERA:&nbsp;&nbsp;&nbsp;<br />
                <span role="img" aria-label="llama">🦙</span> Adriana Orellana<br />
                <span role="img" aria-label="llama">🦙</span> Angel Zenteno<br />
                <span role="img" aria-label="panda">🐼</span> Jianan Xu
            </div>
        </div>
    );
}

export default VideoSection;
