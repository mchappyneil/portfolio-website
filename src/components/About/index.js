import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faGitAlt, faGolang, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const aboutStrArr = "About Me".split("")
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timeout)
    }, []);

    return (
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={aboutStrArr}
                        idx={15}
                    />
                </h1>
                <p>
                    Hey there! I'm a student at the University of Toronto pursuing a double 
                    major in Mathematics and Computer Science. As an enthusiastic developer 
                    and learner, I feel at ease working in both frontend and backend 
                    environments, although my experience leans more towards the backend.
                </p>
                <br />
                <p>
                    I'm on the lookout for a position at an established company that's ready 
                    to make a mark in the tech landscape with their groundbreaking products or 
                    services. I'm passionate about leveraging technology to positively impact 
                    people's lives and make a meaningful difference in the world.
                </p>
                <br />
                <p>
                    When it comes to my personality, you'll find me to be curious, amicable, 
                    and resourceful. I'm always eager to learn and collaborate with others to 
                    achieve the best results. In my downtime, you'll catch me indulging in 
                    various hobbies, including playing video games, skateboarding, exploring 
                    new books, and capturing moments through photography.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faGitAlt} color='#ec4d28'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faGolang} color='#00acd7'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faPython} color='#9d07a4'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faDocker} color='#2496ed'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default About
