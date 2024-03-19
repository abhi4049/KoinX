import React from 'react'

function Performance() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true')
    .then(response => response.json())
    .then(response => {
      document.getElementById("inrprice").innerHTML = response.bitcoin.inr
      document.getElementById("usdprice").innerHTML = response.bitcoin.usd
      document.getElementById("inr24hcg").innerHTML = response.bitcoin.inr_24h_change
      document.getElementById("usd24hcg").innerHTML = response.bitcoin.usd_24h_change
      document.getElementById("inr24hvol").innerHTML = response.bitcoin.inr_24h_vol
      document.getElementById("usd24hvol").innerHTML = response.bitcoin.usd_24h_vol
      document.getElementById("inrmc").innerHTML = response.bitcoin.inr_market_cap
      document.getElementById("usdmc").innerHTML = response.bitcoin.usd_market_cap
    }
    )
    .catch(err => console.error(err));
    return (
        <div className='bg-white rounded-lg p-4 m-4'>
            <span className='block text-2xl font-bold mx-2'>Performance</span>
            <div className="inline-flex">
                <span className='block text-xl font-semibold my-4 text-gray-600 mx-2'>Fundamentals</span>
                <img className='w-5 h-5 my-auto' src="data:image/png;base64,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" alt="" />
            </div>
            <div className='grid grid-cols-2 gap-0 mx-0 my-3 lg:grid-cols-4 lg:gap-16 lg:mx-16 text-base font-semibold'>
                <div className='grid grid-cols-1 text-gray-400'>
                    <span>inr Price</span>
                    <span>inr 24h C</span>
                    <span>inr 24h Volume</span>
                    <span>inr Market Cap</span>
                </div>
                <div className='grid grid-cols-1 text-black text-right'>
                    <span id="inrprice"></span>
                    <span id="inr24hcg"></span>
                    <span id="inr24hvol"></span>
                    <span id="inrmc"></span>
                </div>
                <div className='grid grid-cols-1 text-gray-400'>
                    <span>usd Price</span>
                    <span>usd 24h Change</span>
                    <span>usd 24h Volume</span>
                    <span>usd Market Cap</span>
                </div>
                <div className='grid grid-cols-1 text-black text-right'>
                    <span id="usdprice"></span>
                    <span id="usd24hcg"></span>
                    <span id="usd24hvol"></span>
                    <span id="usdmc"></span>
                </div>
            </div>
        </div>
    )
}

export default Performance
