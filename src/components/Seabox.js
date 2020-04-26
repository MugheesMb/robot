import React from 'react';

const Seabox = ( { searchfield, searchChange}) => {
    return (<div className='pa2'>
        <input className='pa2 br2 b--black bg-lightest-blue' type='search' placeholder='Search mugy friends :)'onChange={searchChange} />
    </div>);
}

export default Seabox;
