import React from 'react';
import './menu-items.styles.scss';

const MenuItem = ({ title, id, imageUrl, size }) => (
    <div className={`menu-item ${size}`} key={id}>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;