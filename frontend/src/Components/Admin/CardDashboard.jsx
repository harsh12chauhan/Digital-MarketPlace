import React from 'react'

const CardDashboard = ({heading,nums,icon,percent,fromwhen,plcss,pltext}) => {
  return (
    <div className='p-4 m-2 rounded-2xl w-[260px] shadow-[0px_0px_10px_1px] shadow-gray-300'>
        <div className='flex justify-between items-center'>
            <div>
                <p className=' font-medium text-gray-500'>{heading}</p>
                <h2 className=' font-semibold text-2xl'>{nums}</h2>
            </div>
            <div>
                <div className='bg-pink-400 py-2 px-3 text-white text-xl rounded-full'>
                    {icon}
                </div>
            </div>
        </div>
        <div className='flex justify-start items-center mt-4'>
            <h3 className={`${plcss} ${pltext} p-1 mr-2 text-sm rounded-lg`}>{percent}</h3>
            <p className='text-[14px] font-light text-gray-400'>{fromwhen}</p>
        </div>
    </div>
  )
}

export default CardDashboard