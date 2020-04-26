import React from 'react';
import './Scroll.css';

const Scroll = (props) =>{

    return(
 <div  style={{ overflow: 'scroll',border: '5px solid black',  height: '530px'}}>
     {props.children}
 </div>
    );
};


export default Scroll;