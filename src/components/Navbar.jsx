// import React from 'react';

// function Navbar() {
//     return (
//         <nav className="flex items-center justify-between flex-wrap p-4">
//             <div className="flex items-center flex-shrink-0 text-white mr-6">
//                 <div className='mx-8 text-blue-600 text-2xl font-bold'>Koin<span className='text-amber-400'>X<sup className='text-sm text-black'>TM</sup></span></div>
//             </div>
//             <div className="block lg:hidden">
//                 <button className="flex items-center px-3 py-2 border rounded text-blue-600">
//                     <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
//                 </button>
//             </div>
//             <div id='menu' className="w-full hidden lg:flex lg:items-center lg:w-auto justify-end">
//                 <div className="text-sm font-semibold mt-2">
//                     <a href="#responsive-header" className="block m-3 lg:inline-block lg:mt-0">Crypto Taxes</a>
//                     <a href="#responsive-header" className="block m-3 lg:inline-block lg:mt-0">Free Tools</a>
//                     <a href="#responsive-header" className="block m-3 lg:inline-block lg:mt-0">Resource Center</a>
//                 </div>
//                 <div>
//                     <a href="#" className="inline-block text-sm font-semibold px-4 py-2 leading-none rounded-lg text-white bg-blue-600 mt-4 lg:mt-0">Get Started</a>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import React, { useState } from 'react';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <div className='mx-8 text-blue-600 text-2xl font-bold'>Koin<span className='text-amber-400'>X<sup className='text-sm text-black'>TM</sup></span></div>
            </div>
            <div className="block lg:hidden">
                <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        {/* <path d={showMenu ? "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" : "M4 6h16M4 12h16m-7 6h7"} /> */}
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div id='menu' className={`w-full ${showMenu ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto justify-end`}>
                <div className="text-sm font-semibold mt-2">
                    <a href="#responsive-header" className="block m-3 lg:inline-block lg:mt-0">Crypto Taxes</a>
                    <a href="#responsive-header" className="block m-3 lg:inline-block lg:mt-0">Free Tools</a>
                    <a href="#responsive-header" className="block m-3 lg:inline-block lg:mt-0">Resource Center</a>
                </div>
                <div>
                    <a href="#" className="inline-block text-sm font-semibold px-4 py-2 leading-none rounded-lg text-white bg-blue-600 mt-4 lg:mt-0">Get Started</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
