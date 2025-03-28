import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Resume from "../../assets/pdf/Resume.pdf"
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
                    My professional experience includes year-long internship at KOHO, where I had the chance to apply my 
                    technical expertise as a Backend Engineer on a variety of projects, chief amongst which included 
                    assisting in the design and implementation of a revamped subscription tier system for the company. 
                    Currently, I work for the University of Toronto as a Mathematics Teaching Assistant.
                </p>
                <p>
                    Before that, I worked at Code Ninjas as a part time Coding Instructor, where I 
                    designed and led the FIRST LEGO Robotics competition team and Python program, 
                    leading to marked improvement in our students' coding proficiency, problem-solving 
                    skills, and teamwork!
                </p>
                <p>
                    I enjoy building side projects that reflect my hobbies or allow me to explore and learn about
                    new topics that I find interesting. For example: this website, an AI model using
                    the GAN architecture capable of image-to-image artistic style transfer, and many others - which
                    can be found on my <a href="https://github.com/mchappyneil/About_Me">GitHub!</a>
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
