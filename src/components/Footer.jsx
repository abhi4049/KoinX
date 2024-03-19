import React from 'react'

function Footer() {
    let lawda = [];
    for (let i = 0; i <= 4; i++) {
        fetch('https://api.coingecko.com/api/v3/search/trending')
            .then(response => response.json())
            //   .then(response => console.log(response.coins[i].item))
            .then(response => {
                document.getElementById(`trend${i + 1}`).querySelector('#logo').src = response.coins[i].item.thumb,
                    document.getElementById(`trend${i + 1}`).querySelector('#sym').innerHTML = response.coins[i].item.symbol,
                    document.getElementById(`trend${i + 1}`).querySelector('#prc').innerHTML = response.coins[i].item.data.price,
                    document.getElementById(`trend${i + 1}`).querySelector('#graph').src = response.coins[i].item.data.sparkline,
                    document.getElementById(`like${i + 1}`).querySelector('#logo').src = response.coins[i].item.thumb,
                    document.getElementById(`like${i + 1}`).querySelector('#sym').innerHTML = response.coins[i].item.symbol,
                    document.getElementById(`like${i + 1}`).querySelector('#prc').innerHTML = response.coins[i].item.data.price,
                    document.getElementById(`like${i + 1}`).querySelector('#graph').src = response.coins[i].item.data.sparkline
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='bg-white my-16 mr-12 ml-10 rounded-lg p-4'>
            <span className='block text-2xl font-bold mx-2'>You May Also Like</span>
            <div className="flex overflow-x-auto lg:overflow-x-hidden my-4">

                <div id='like1' className='flex-shrink-0 w-64 rounded-lg border-2 mx-3 p-2'>
                    <div className='flex'>
                        <img id='logo' src="" alt="" className='rounded-full h-8' />
                        <span id='sym' className='text-lg mx-2'></span>
                    </div>
                    <div id='prc' className='text-xl font-semibold'></div>
                    <img id='graph' src="" alt="" className='mx-auto my-2' />
                </div>


                <div id='like2' className='flex-shrink-0 w-64 rounded-lg border-2 mx-3 p-2'>
                    <div className='flex'>
                        <img id='logo' src="" alt="" className='rounded-full h-8' />
                        <span id='sym' className='text-lg mx-2'></span>
                    </div>
                    <div id='prc' className='text-xl font-semibold'></div>
                    <img id='graph' src="" alt="" className='mx-auto my-2' />
                </div>


                <div id='like3' className='flex-shrink-0 w-64 rounded-lg border-2 mx-3 p-2'>
                    <div className='flex'>
                        <img id='logo' src="" alt="" className='rounded-full h-8' />
                        <span id='sym' className='text-lg mx-2'></span>
                    </div>
                    <div id='prc' className='text-xl font-semibold'></div>
                    <img id='graph' src="" alt="" className='mx-auto my-2' />
                </div>


                <div id='like4' className='flex-shrink-0 w-64 rounded-lg border-2 mx-3 p-2'>
                    <div className='flex'>
                        <img id='logo' src="" alt="" className='rounded-full h-8' />
                        <span id='sym' className='text-lg mx-2'></span>
                    </div>
                    <div id='prc' className='text-xl font-semibold'></div>
                    <img id='graph' src="" alt="" className='mx-auto my-2' />
                </div>


                <div id='like5' className='flex-shrink-0 w-64 rounded-lg border-2 mx-3 p-2'>
                    <div className='flex'>
                        <img id='logo' src="" alt="" className='rounded-full h-8' />
                        <span id='sym' className='text-lg mx-2'></span>
                    </div>
                    <div id='prc' className='text-xl font-semibold'></div>
                    <img id='graph' src="" alt="" className='mx-auto my-2' />
                </div>
            </div>
            <span className='block text-2xl font-bold mx-2'>Trending Coins</span>
            <div className="flex overflow-x-auto lg:overflow-x-hidden my-4">

                <div id='trend1' className='flex-shrink-0 w-64 rounded-lg border-2 mx-3 p-2'>
                    <div className='flex'>
                        <img id='logo' src="" alt="" className='rounded-full h-8' />
                        <span id='sym' className='text-lg mx-2'></span>
                    </div>
                    <div id='prc' className='text-xl font-semibold'></div>
                    <img id='graph' src="" alt="" className='mx-auto my-2' />
                </div>


                <div id='trend2' className='flex-shrink-0 w-64 rounded-lg border-2 mx-3 p-2'>
                    <div className='flex'>
                        <img id='logo' src="" alt="" className='rounded-full h-8' />
                        <span id='sym' className='text-lg mx-2'></span>
                    </div>
                    <div id='prc' className='text-xl font-semibold'></div>
                    <img id='graph' src="" alt="" className='mx-auto my-2' />
                </div>


                <div id='trend3' className='flex-shrink-0 w-64 rounded-lg border-2 mx-3 p-2'>
                    <div className='flex'>
                        <img id='logo' src="" alt="" className='rounded-full h-8' />
                        <span id='sym' className='text-lg mx-2'></span>
                    </div>
                    <div id='prc' className='text-xl font-semibold'></div>
                    <img id='graph' src="" alt="" className='mx-auto my-2' />
                </div>


                <div id='trend4' className='flex-shrink-0 w-64 rounded-lg border-2 mx-3 p-2'>
                    <div className='flex'>
                        <img id='logo' src="" alt="" className='rounded-full h-8' />
                        <span id='sym' className='text-lg mx-2'></span>
                    </div>
                    <div id='prc' className='text-xl font-semibold'></div>
                    <img id='graph' src="" alt="" className='mx-auto my-2' />
                </div>


                <div id='trend5' className='flex-shrink-0 w-64 rounded-lg border-2 mx-3 p-2'>
                    <div className='flex'>
                        <img id='logo' src="" alt="" className='rounded-full h-8' />
                        <span id='sym' className='text-lg mx-2'></span>
                    </div>
                    <div id='prc' className='text-xl font-semibold'></div>
                    <img id='graph' src="" alt="" className='mx-auto my-2' />
                </div>
            </div>
        </div>
    )
}

export default Footer


