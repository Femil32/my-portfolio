import MyPhoto from '../img/photo.JPG'

function About() {
    return (
        <div className='text-secondary bg-primary py-[6rem] px-[12rem] min-h-screen' id='about'>
            <div
                className='text-7xl max-w-3xl text-left font-[600]'
                style={{ wordSpacing: '20px' }}
            >
                <h2>ALLOW ME TO INTRODUCE.</h2>
            </div>
            <div className='relative flex justify-between items-start py-16 gap-[12rem]'>
                <div class='text-left'>
                    <h4 class='text-5xl mb-2'>HELLO,</h4>
                    <p class='text-2xl max-w-md font-[Poppins]'>
                        I am
                        <p className='inline-block mx-3 '>
                            <span className='px-1'>&#10533;</span>
                            <span className='gradient-text font-[500]'>FEMIL SAVALIYA</span>
                            <span className='px-1'>&#10531;</span>
                        </p>
                        front-end developer, located in Gujarat, India. <br /> I work as a freelance
                        with companies, agencies and individuals.
                    </p>
                </div>
                <div className=' w-[22rem] h-auto overflow-hidden rounded-md my-shadow -mt-[4rem]'>
                    <img className='w-full h-full' src={MyPhoto} alt='MyPhoto' />
                </div>
            </div>
        </div>
    )
}

export default About
