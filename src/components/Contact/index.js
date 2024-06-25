import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import Toronto from '../../assets/images/toronto.png'

const Contact = () => {
    const contactMeArr = "Contact Me".split("")
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timeout)
    }, []);

    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={contactMeArr}
                        idx={15}
                    />
                </h1>
                <p>
                    As I complete my last semester of my degree, I'm excited to announce 
                    that I'm open to any full-time developer positions! If you have any
                    opportunities that align with my skills and interests, I'd love to 
                    hear from you. Please also feel free to reach out if you have any 
                    tech-related questions or just want to chat about my other passions 
                    - I'm always up for engaging discussions!
                </p>
                <br />
                <p>
                    You can connect with me via <a href='https://www.linkedin.com/in/neil-mehta-529944244/'>LinkedIn</a>, <a href='https://www.instagram.com/mchappyneil/'>Instagram</a>, 
                    or shoot me an email at <a href='mailto: neil.mehta0201@gmail.com'>neil.mehta0201@gmail.com</a>!
                </p>
            </div>

            <div className='info-map'>
                Neil Mehta,
                <br />
                Toronto, ON
                <br />
                Canada <br />
                <span>neil.mehta0201@gmail.com</span>
            </div>

            <div className='location-img'>
                <img className='location' src={Toronto} alt="Toronto" />
            </div>
        </div>
    </>)
}

export default Contact