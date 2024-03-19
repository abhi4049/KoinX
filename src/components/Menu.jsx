import React from 'react';

function Menu() {
    return (
        <div className="flex flex-no-wrap overflow-x-auto space-x-4 p-4 m-4 justify-normal md:justify-around text-center">
                <a className='flex-shrink-0 border-b-2 border-blue-600 text-blue-600'>Overview</a>
                <a className='flex-shrink-0'>Fundamentals</a>
                <a className='flex-shrink-0'>News Insights</a>
                <a className='flex-shrink-0'>Sentiments</a>        
                <a className='flex-shrink-0'>Team</a>        
                <a className='flex-shrink-0'>Technicals</a>
                <a className='flex-shrink-0'>Tokenomics</a>
        </div>
    );
}

export default Menu;



