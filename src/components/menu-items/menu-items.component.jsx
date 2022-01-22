import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-items.styles.scss';

const MenuItem = ({ title, id, imageUrl, size, history, match, linkUrl }) => (
    <div className={`menu-item ${size}`} key={id} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);