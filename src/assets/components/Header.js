function Header() {
    return (
        <>
            <nav className='font-medium'>
                <ul className='text-xl uppercase flex justify-between items-center px-12 pt-8 tracking-wide'>
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
                    <li className='max-w-2xl w-full flex justify-between items-center'>
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
