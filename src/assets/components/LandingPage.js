import About from './About'
import Banner from './Banner'
import Contact from './Contact'
import Header from './Header'
import Projects from './project/Projects'

function LandingPage() {
    return (
        <div className='relative '>
            <Header />
            <Banner />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}

export default LandingPage
