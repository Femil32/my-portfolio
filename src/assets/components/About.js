import MyPhoto from '../img/photo.png'

function About() {
    return (
        <div
            className='text-secondary bg-primary py-[20vh] px-[6vw] min-h-screen md:py-[20vh] md:px-[2vw]'
            id='about'
        >
            <div className='text-[10vw] max-w-[80vw] text-left font-[600] leading-[12vw] md:text-[7vw] md:leading-[8vw]'>
                <p>ALLOW ME TO INTRODUCE.</p>
            </div>
            <div className='relative flex flex-col justify-center items-center py-16 gap-[20vw] md:gap-[12rem] md:flex-row md:justify-between md:items-start'>
                <div className='text-left'>
                    <h4 className='text-5xl mb-4 md:mb-2'>HELLO,</h4>
                    <h1 className='text-2xl max-w-md font-[Poppins]'>
                        I am
                        <p className='inline-block md:mx-3'>
                            <span className='px-1'>&#10533;</span>
                            <span className='gradient-text font-[500]'>FEMIL SAVALIYA</span>
                            <span className='px-1'>&#10531;</span>
                        </p>
                        front-end developer, located in Gujarat, India. <br /> I work as a freelance
                        with companies, agencies and individuals.
                    </h1>
                </div>
                <div className='w-[20rem] h-auto overflow-hidden rounded-md md:absolute md:-top-28 md:right-44'>
                    <img className='w-full h-full' src={MyPhoto} alt='MyPhoto' />
                </div>
            </div>
        </div>
    )
}

export default About
