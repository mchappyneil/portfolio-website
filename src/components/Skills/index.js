import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
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
                With a solid 5-year journey in Python, 2 years (and counting!) working with 
                Golang and JavaScript, I've been around the block in various domains of 
                software development.
                </p>
                <p>
                My professional journey includes a year-long Co-Op placement at KOHO Financial, 
                where I played a pivotal role as a backend software developer. During my time there, 
                I took charge of building essential tools to streamline user backfill operations 
                for a revamped subscription tier system, which I also assisted in building the foundation
                for. I gained months of experience writing unit and integration tests, CI/CD best practices,
                and relentlessly hunted down and fixed bugs across the services my team was responsible for. 
                My dedication didn't end there; I ensured a smooth path for onboarding future employees by 
                crafting clear and effective documentation on using the services and tools I created.
                </p>
                <p>
                Before that, I had a blast teaching kids the magic of coding at Code Ninjas as a part time 
                Coding Instructor. We followed a curriculum centered on game design using JavaScript, Lua, 
                and C# and Unity. Meanwhile, as a Computer Science and Math student at the University of 
                Toronto, I'm always learning new skills and sharpening the ones I already have through my 
                classes and assignments.
                </p>
                <p>
                On top of everything else, I've got a bunch of cool personal projects to show for. 
                From this website you're on right now to my "person service" project using Golang 
                and APIs during my coop, and even a social media platform I built back in high school. 
                You can find most of them on my <a href="https://github.com/mchappyneil/About_Me">GitHub!</a>
                </p>
            </div>

            <div className='scroll-container'>
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
                </ul>
            </div>
        </div>
    )
}

export default Skills