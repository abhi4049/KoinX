import React from 'react'

function Sentiment() {
    return (
        <div className='bg-white rounded-lg p-4 m-4'>
            <span className='block text-2xl font-bold mx-2'>Sentiment</span>
            <div className="inline-flex">
                <span className='block text-xl font-semibold my-4 text-gray-600 mx-2'>Key Events</span>
                <img className='w-5 h-5 my-auto' src="data:image/png;base64,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" alt="" />
            </div>
            <div className='relative overflow-x-auto'>
                <div className='flex'>
                    <div className='flex-shrink-0 w-80 lg:w-1/2 shadow-lg mx-2 bg-blue-100 rounded-lg'>
                        <img src="https://media.licdn.com/dms/image/D4D0BAQEJbnDESVdHVA/company-logo_200_200/0/1688729917818?e=2147483647&v=beta&t=P0XNIjL6g2S8A2hpyJAFwXZN0J0ebngIcmHYtp4hhIU" alt="" className='w-10 h-10 rounded-full m-4' />
                        <div className='mx-2 my-4 text-justify'>
                            <span className='block text-lg font-semibold'>Lorem ipsum dolor sit amet consectr, sue adipisicing elit nicdowjf. Sapiente suscipit</span>
                            <span className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sit magnam consequuntur esse, libero aspernatur possimus quo maiores sed adipisci alias qui culpa facilis impedit.</span>
                        </div>
                    </div>
                    <div className='flex-shrink-0 w-80 lg:w-1/2 shadow-lg mx-4 bg-teal-100 rounded-lg'>
                        <img src="https://media.licdn.com/dms/image/D4D0BAQEJbnDESVdHVA/company-logo_200_200/0/1688729917818?e=2147483647&v=beta&t=P0XNIjL6g2S8A2hpyJAFwXZN0J0ebngIcmHYtp4hhIU" alt="" className='w-10 h-10 rounded-full m-4' />
                        <div className='mx-2 my-4 text-justify'>
                            <span className='block text-lg font-semibold'>Lorem ipsum dolor sit amet consectr, sue adipisicing elit nicdowjf. Sapiente suscipit</span>
                            <span className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sit magnam consequuntur esse, libero aspernatur possimus quo maiores sed adipisci alias qui culpa facilis impedit.</span>
                        </div>
                    </div>
                    <div className='flex-shrink-0 w-80 lg:w-1/2 shadow-lg mx-4 bg-pink-100 rounded-lg'>
                        <img src="https://media.licdn.com/dms/image/D4D0BAQEJbnDESVdHVA/company-logo_200_200/0/1688729917818?e=2147483647&v=beta&t=P0XNIjL6g2S8A2hpyJAFwXZN0J0ebngIcmHYtp4hhIU" alt="" className='w-10 h-10 rounded-full m-4' />
                        <div className='mx-2 my-4 text-justify'>
                            <span className='block text-lg font-semibold'>Lorem ipsum dolor sit amet consectr, sue adipisicing elit nicdowjf. Sapiente suscipit</span>
                            <span className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sit magnam consequuntur esse, libero aspernatur possimus quo maiores sed adipisci alias qui culpa facilis impedit.</span>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="inline-flex">
                <span className='block text-xl font-semibold my-10 text-gray-600 mx-2'>Analyst Estimates</span>
                <img className='w-5 h-5 my-auto' src="data:image/png;base64,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" alt="" />
            </div>
            <div className='w-full inline lg:flex'>
                <div className='w-full lg:w-1/5'>
                    <div className='bg-teal-100 w-40 h-40 rounded-full flex justify-center items-center scale-75 lg:scale-100'>
                        <span className='text-green-500 text-4xl font-semibold'>72%</span>
                    </div>
                </div>
                <div className='grid grid-rows-3 w-full lg:w-3/5 text-gray-500'>
                    <div className='flex'>
                        <div className='items-center px-4 w-16'>Buy</div>
                        <div className='w-36 lg:w-72 h-2 m-2 bg-red-500'></div>
                        <div className='items-center px-4 w-16'>72%</div>
                    </div>
                    <div className='inline-flex'>
                        <div className='items-center px-4 w-16'>Hold</div>
                        <div className='w-4 lg:w-8 h-2 m-2 bg-gray-400'></div>
                        <div className='items-center px-4 w-16'>8%</div>
                    </div>
                    <div className='flex'>
                        <div className='items-center px-4 w-16'>Sell</div>
                        <div className='w-10 lg:w-20 h-2 m-2 bg-green-500'></div>
                        <div className='items-center px-4 w-16'>20%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sentiment

