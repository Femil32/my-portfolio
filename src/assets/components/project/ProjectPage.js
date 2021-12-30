import { useParams } from 'react-router-dom'
import { projectData } from '../../../data/projectData'

function ProjectPage() {
    const params = useParams()

    let projectName = params.name.charAt(0).toUpperCase() + params.name.slice(1)

    // console.log(params.name)
    return (
        <div className='bg-secondary text-primary min-h-screen relative'>
            <div className='absolute top-12 right-8 w-16'>
                <svg
                    viewBox='0 0 48 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-full h-full'
                >
                    <path
                        d='M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z'
                        fill='white'
                    ></path>
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M38.2223 38.2221L9.77783 9.77763L12.4295 7.12598L40.874 35.5704L38.2223 38.2221Z'
                        fill='#242424'
                    ></path>
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M38.2223 9.77766L9.77785 38.2221L7.12622 35.5704L35.5707 7.12598L38.2223 9.77766Z'
                        fill='#242424'
                    ></path>
                </svg>
            </div>
            <div className='flex justify-center items-center flex-col min-h-full py-36 max-w-[1150px] mx-auto'>
                {projectData.map(
                    (data, index) =>
                        projectName === data.name && (
                            <div className='flex flex-col gap-8' key={index}>
                                <div className='flex flex-col justify-center items-center'>
                                    <h2 className='text-7xl font-[300] w-full text-left'>
                                        /{data.id}
                                    </h2>
                                    <div className='flex justify-between items-center w-full text-[7rem] font-[400] leading-[100px]'>
                                        <p className=''>{data.name}</p>
                                        <p className=''>{data.data.year}</p>
                                    </div>
                                </div>
                                <div className='w-[1150px]'>
                                    <img src={data.data.fullImg} alt='' />
                                </div>
                                <div className='flex gap-24'>
                                    <div className='max-w-md flex flex-col justify-start items-start gap-4'>
                                        <h1 className='text-5xl font-[400]'>Information</h1>
                                        <p className='text-[18px] font-[Poppins] font-[300] leading-6'>
                                            {data.data.info}
                                        </p>
                                    </div>
                                    <div className='max-w-md flex flex-col justify-start items-start gap-4'>
                                        <h1 className='text-5xl font-[400]]'>Roles</h1>
                                        <p className='text-[18px] font-[Poppins] font-[300] leading-6'>
                                            {data.data.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    )
}

export default ProjectPage
