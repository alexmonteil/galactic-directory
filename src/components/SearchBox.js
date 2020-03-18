import React from 'react';

// SearchBox Component receives user input and runs searchChange on event
const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
            className='pa3 ba br4 b--navy bg-lightest-blue' 
            type='search' 
            placeholder='search users' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;