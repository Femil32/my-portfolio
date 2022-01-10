import { Link } from 'react-router-dom'
import { projectData } from '../../../data/projectData'

function Projects() {
    return (
        <div
            className='bg-secondary text-primary py-[20vh] px-[6vw] min-h-screen md:py-[20vh] md:px-[2vw]'
            id='work'
        >
            <div
                className='text-[10vw] max-w-[80vw] text-left font-[600] leading-[12vw] md:text-[7vw] md:leading-[8vw]'
                // style={{ wordSpacing: '18px' }}
            >
                <p>DISCOVER MY LATEST PROJECTS.</p>
            </div>
            <div className='flex justify-center items-center flex-col pt-[15vh] md:pt-[20vh] gap-[20vh] md:gap-[25vh]'>
                {projectData.map((data, index) => (
                    <Link
                        className='flex flex-col justify-center items-center w-[90vw] md:w-[80vw]'
                        key={index}
                        to={{
                            pathname: `/project/${data.link}`,
                            state: ' { fromDashboard: true }',
                        }}
                    >
                        <div className='flex justify-center items-center mb-3 w-full md:mb-5'>
                            <img src={data.imgPath} alt='' />
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <h2 className='text-[7vw] font-[500] md:text-[5vw]'>
                                /{data.id} {data.name}
                            </h2>
                            <p className='text-[4vw] font-[400] md:text-[2vw]'>{data.role}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Projects
