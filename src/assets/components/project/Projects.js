import { Link } from 'react-router-dom'
import { projectData } from '../../../data/projectData'

function Projects() {
    return (
        <div className='bg-secondary text-primary py-[6rem] px-[12rem] min-h-screen' id='work'>
            <div
                className='text-7xl max-w-3xl text-left font-[600]'
                style={{ wordSpacing: '20px' }}
            >
                <h2>DISCOVER MY LATEST PROJECTS.</h2>
            </div>
            <div className='flex justify-center items-center flex-col py-16 gap-[12rem]'>
                {projectData.map((data, index) => (
                    <Link
                        className='flex flex-col'
                        key={index}
                        to={{
                            pathname: `/project/${data.link}`,
                            state: ' { fromDashboard: true }',
                        }}
                    >
                        <div className='mb-5 w-[900px]'>
                            <img src={data.imgPath} alt='' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-5xl font-[500]'>
                                /{data.id} {data.name}
                            </h2>
                            <p className='text-2xl font-[400]'>{data.role}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Projects
