import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Resume from "../../assets/pdf/Neil Mehta Resume June 2024.pdf"
import './index.scss'

const Skills = () => {
    const skillsStrArr = "Skills and Experience".split("")
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timeout)
    }, []);

    return (
        <div className='container skills-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={skillsStrArr}
                        idx={15}
                    />
                </h1>
                <p>
                I'm an ever-learning tech enthusiast with a strong passion for programming. 
                With a solid 6-year journey in Python, 4 years working with Golang and JavaScript, 
                I've been around the block in various domains of software development.
                </p>
                <p>
                My professional journey includes a year-long Co-Op placement at KOHO Financial, 
                where I played a pivotal role as a backend software developer.
                Before that, I had a blast teaching kids the magic of coding at Code Ninjas as a part time 
                Coding Instructor.
                </p>
                <p>
                On top of everything else, I've got a bunch of cool personal projects to show for; 
                from this website you're on right now, to the "person service" project I built during my coop, 
                and even a social media platform I built back in high school! 
                You can find most of them on my <a href="https://github.com/mchappyneil/About_Me">GitHub!</a>
                </p>
                <p>
                If you're interested in more of my professional experience, you can find the most recent
                version of my resumé 
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                        <button>here</button>
                    </a>.
                </p>
            </div>

            <div id="two">
                <div class="speak">I speak</div>
                <div class='scroll-container'>
                    <ul>
                        <li class="item-1">Python</li>
                        <li class="item-2">Flask</li>
                        <li class="item-3">Pandas</li>
                        <li class="item-4">SciPy</li>
                        <li class="item-5">Matplotlib</li>
                        <li class="item-6">WTForms</li>
                        <li class="item-7">structlog</li>
                        <li class="item-8">peewee</li>
                        <li class="item-9">Go</li>
                        <li class="item-10">Zap</li>
                        <li class="item-11">Echo</li>
                        <li class="item-12">Gin</li>
                        <li class="item-13">Docker</li>
                        <li class="item-14">AWS</li>
                        <li class="item-15">ReactJS</li>
                        <li class="item-16">CSS</li>
                        <li class="item-17">JavaScript</li>
                        <li class="item-18">Git</li>
                        <li class="item-19">Agile</li>
                        <li class="item-20">Queries and Databases</li>
                        <li class="item-21">PosgreSQL</li>
                        <li class="item-22">Testing</li>
                        <li class="item-23">Feature Flags</li>
                        <li class="item-24">Python</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Skills