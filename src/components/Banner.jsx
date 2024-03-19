import React from 'react'

function Banner() {
    for (let i = 0; i <= 2; i++) {
        fetch('https://api.coingecko.com/api/v3/search/trending')
          .then(response => response.json())
          .then(response => document.getElementById(`trending${i + 1}`).innerHTML = `${response.coins[i].item.name}` + ` (` + `${response.coins[i].item.symbol}` + `)`)
          .catch(err => console.error(err));
      }
    return (
        
        <>
            <div className='text-white text-center bg-blue-600 h-fit rounded-xl mt-16 mb-8 mx-12 lg:mx-4'>
                <div className='py-8'>
                    <div className='text-2xl px-12 py-2 font-bold lg: tezt-xl'>Get Started with KoinX for FREE</div>
                    <div className='text-base  px-6 py-2'>
                        With our range of features that you can equip for free, KoinX allows you to be more educated and aware of yoour tax reports.
                    </div>
                    <img src="https://media.licdn.com/dms/image/D4D0BAQEJbnDESVdHVA/company-logo_200_200/0/1688729917818?e=2147483647&v=beta&t=P0XNIjL6g2S8A2hpyJAFwXZN0J0ebngIcmHYtp4hhIU" alt="" className='rounded-lg mx-auto h-40 w-40 object-cover py-2' />
                    <button className='bg-white text-blue-900 font-bold my-3 px-4 py-2 rounded-lg underline'>Get Started for FREE</button>
                </div>
            </div>
            <div className='text-black bg-white h-fit mt-16 mb-8 px-4 mx-12 lg:mx-4 rounded-lg'>
                <div className='text-xl py-2 text-left font-semibold'>Trending Coins (24h)</div>
                <div className='my-3 font-small' id="trending1"></div>
                <div className='my-3 font-small' id="trending2"></div>
                <div className='my-3 font-small' id="trending3"></div>
            </div>
        </>
    )
}

export default Banner
