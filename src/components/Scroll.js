import React from 'react';

// Scroll Component creates a scroll overflow for children
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;