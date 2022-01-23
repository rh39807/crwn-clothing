import React from "react";
import { connect } from 'react-redux';
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import MenuItem  from "../menu-items/menu-items.component";
import './directory.styles.scss';

const Directory = ( { sections }) => (
    <div className='directory-menu'>
        {sections.map((section,index)=><MenuItem key={index} {...section}/>)}
    </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);