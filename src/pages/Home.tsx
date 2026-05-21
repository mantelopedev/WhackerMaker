import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to WhackerMaker</h1>
            <p>Your go-to tool for converting 3D models into .whacker files for Beat Saber modding.</p>
            <Link to="/editor" className="start-button">Get Started</Link>
        </div>
    );
};

export default Home;