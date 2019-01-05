import React from 'react';
import loaderSrc from '../../assets/loader.gif';
import './style.css';

const Loader = props => (
    <div>
        <img alt="Loader icon" src={loaderSrc} />
    </div>
);

export default Loader;