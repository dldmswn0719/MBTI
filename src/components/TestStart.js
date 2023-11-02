import React from 'react'

function TestStart({ setPage }) {
    return (
        <>
            <div className='flex flex-col items-center justify-center bg-[#ffea35] w-full max-w-4xl h-full text-[#413730]'>
                <div className='flex flex-col items-center text-lg md:text-2xl font-bold'>
                    <div className='bg-[#413730] text-[#ffea35] w-auto px-5 h-24 flex items-center justify-center rounded-[50px]'>MBTI 나의 성격유형 알아보기</div>
                    <div className='-mt-[15px]'>▼</div>
                </div>
                <div className='bg-white p-5 rounded-2xl lg:text-2xl md:text-xl text-lg font-bold mt-5 cursor-pointer' onClick={()=>setPage(1)}>테스트 시작하기</div>
            </div>            
        </>
    )
}

export default TestStart