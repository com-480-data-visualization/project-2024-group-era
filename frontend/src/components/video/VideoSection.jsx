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
        <div className="items-center">
            <div className="video-responsive">
                <iframe 
                    src="https://www.youtube.com/embed/cvFVhOVkarw?autoplay=1&mute=0"
                    frameBorder="0"
                    allow="autoplay"
                    title="YouTube video player"
                    allowFullScreen
                />
            </div>
            <button className={BUTTON_PROPERTY} style={{ position: 'absolute', right: 10, bottom: 15 }} onClick={skipVideo}>
                LET'S GO
            </button>
            <div className="video-names">
                    <span role="img" aria-label="sheep">🌍</span> Group ERA:&nbsp;&nbsp;&nbsp;<br />
                    <span role="img" aria-label="sheep">🦙</span> Adriana Orellana<br />
                    <span role="img" aria-label="sheep">🦙</span> Angel   Zenteno   <br />
                    <span role="img" aria-label="sheep">🐼</span> Jianan  Xu
            </div>
        </div>
    );
}

export default VideoSection;
