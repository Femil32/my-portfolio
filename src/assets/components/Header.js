function Header() {
    return (
        <>
            <nav className='font-medium'>
                <ul className='text-[3vw] uppercase flex justify-between items-center px-[2vw] pt-8 tracking-wide md:gap-[1rem] md:text-[2vw]'>
                    <li className=''>
                        <a
                            data-link=''
                            href='/'
                            className='flex justify-start items-start flex-col '
                        >
                            <span>Femil</span>
                            <span>Savaliya</span>
                        </a>
                    </li>
                    <li className='flex justify-between items-center gap-[3vw] md:gap-[5vw]'>
                        <a className='tracking-wide' href='#work'>
                            PROJECTS
                        </a>
                        <a className='tracking-wide' href='#about'>
                            IN REGARDS TO
                        </a>
                        <a className='tracking-wide' href='#contact'>
                            CONTACT
                        </a>
                    </li>
                    <li className='tracking-wide'>
                        <a href='/en' className=''>
                            CV
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header
