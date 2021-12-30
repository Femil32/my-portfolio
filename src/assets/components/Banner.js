function Banner() {
    return (
        // <div className='h-[calc(100vh-88px)] flex justify-center items-center'>
        <div className='relative min-h-[calc(50rem-88px)]'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <div className='flex flex-col text-[11rem] leading-[150px] font-extrabold tracking-wide'>
                    <span>DEVELOPER</span>
                    <span>INTERACTIVE</span>
                </div>
                <span className='inline-block border-b-2 border-white text-green-400 tracking-wider hover:border-b-2 hover:border-blue-600 transition-all mt-6 text-xl font-[500]'>
                    FREELANCE
                </span>
            </div>
        </div>
    )
}

export default Banner
