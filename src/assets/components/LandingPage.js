import About from './About'
import Banner from './Banner'
import Contact from './Contact'
import Projects from './Projects'

function LandingPage() {
    return (
        <div className='relative '>
            <Banner />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}

export default LandingPage
