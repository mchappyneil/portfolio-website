import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/n-logo-dualtone-big.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "eil!".split("")
    const jobArray = "avid developer.".split("")

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timeout)
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>

                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray} 
                    idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={jobArray} 
                    idx={19}/>
                </h1>
                <h2>Developer / Student / Photographer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home