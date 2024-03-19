import React from 'react'

function About() {
    return (
        <div className='bg-white rounded-lg p-4 m-4'>
            <span className='block text-2xl font-bold mx-2 my-3'>About Bitcoin</span>
            <span className='block text-xl font-bold mx-2 my-3'>What is Bitcoin?</span>
            <span className='block text-lg mx-2 my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ipsam! Optio cumque quisquam nihil dignissimos soluta qui placeat id magnam ipsa sunt dolorum enim harum, quod facere assumenda natus itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fuga suscipit delectus unde, sed quasi eaque architecto dignissimos, laudantium ad similique hic ex officiis, recusandae eum at quisquam illum explicabo?</span>
            <span className='block text-xl font-bold mx-2 my-3'>Lorem ipsnum dolor sit amet</span>
            <span className='block text-lg mx-2 my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ipsam! Optio cumque quisquam nihil dignissimos soluta qui placeat id magnam ipsa sunt dolorum enim harum, quod facere assumenda natus itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fuga suscipit delectus unde, sed quasi eaque architecto dignissimos, laudantium ad similique hic ex officiis, recusandae eum at quisquam illum explicabo?</span>
            <span className='block text-lg mx-2 my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ipsam! Optio cumque quisquam nihil dignissimos soluta qui placeat id magnam ipsa sunt dolorum enim harum, quod facere assumenda natus itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fuga suscipit delectus unde, sed quasi eaque architecto dignissimos, laudantium ad similique hic ex officiis, recusandae eum at quisquam illum explicabo?</span>
            <span className='block text-lg mx-2 my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ipsam! Optio cumque quisquam nihil dignissimos soluta qui placeat id magnam ipsa sunt dolorum enim harum, quod facere assumenda natus itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fuga suscipit delectus unde, sed quasi eaque architecto dignissimos, laudantium ad similique hic ex officiis, recusandae eum at quisquam illum explicabo?</span>

            <span className='block text-2xl font-bold mx-2 my-3'>Already Holding Bitcoin?</span>
            <div className='inline lg:flex justify-around mx-16 mt-5'>
                <div className='flex w-full my-2 lg:w-2/5 bg-gradient-to-br from-emerald-400 to-blue-700 rounded-lg'>
                    <img src="https://media.licdn.com/dms/image/D4D0BAQEJbnDESVdHVA/company-logo_200_200/0/1688729917818?e=2147483647&v=beta&t=P0XNIjL6g2S8A2hpyJAFwXZN0J0ebngIcmHYtp4hhIU" alt="" className='w-1/3 h-auto rounded-lg m-4' />
                    <div className='w-2/3 mx-3 my-4'>
                        <span className='block text-xl font-bold text-white'>Calculate your Profits</span>
                        <button className='bg-white text-black font-bold my-3 px-4 py-1 rounded-lg underline'>Check Now</button>
                    </div>
                </div>
                <div className='flex w-full my-2 lg:w-2/5 bg-gradient-to-br from-orange-300 to-red-600 rounded-lg'>
                    <img src="https://media.licdn.com/dms/image/D4D0BAQEJbnDESVdHVA/company-logo_200_200/0/1688729917818?e=2147483647&v=beta&t=P0XNIjL6g2S8A2hpyJAFwXZN0J0ebngIcmHYtp4hhIU" alt="" className='w-1/3 h-auto rounded-lg m-4' />
                    <div className='w-2/3 mx-3 my-4'>
                        <span className='block text-xl font-bold text-white'>Calculate your tax liability</span>
                        <button className='bg-white text-black font-bold my-3 px-4 py-1 rounded-lg underline'>Check Now</button>
                    </div>
                </div>
            </div>
            <span className='block text-lg mx-2 my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque corrupti voluptas vel consequatur consequuntur blanditiis, ipsa doloribus. A odio voluptates animi pariatur! Dolor mollitia ab explicabo facere dolorum eaque aliquid.</span>
        </div>
    )
}

export default About
