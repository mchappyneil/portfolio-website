import './index.scss'
import { Link } from 'react-router-dom'
import LogoN from '../../assets/images/n-logo-dualtone-big.png'
import LogoSubtitle from '../../assets/images/name-logo-sub.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faCameraAlt, faBars, faClose, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoN} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="neil" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink
                onClick={() => setShowNav(false)} 
                exact="true" 
                activeclassname="active" 
                to="/"
            >
                <FontAwesomeIcon 
                    icon={faHome} 
                    color="#4d4d4e"
                    />
            </NavLink>
            <NavLink
                onClick={() => setShowNav(false)} 
                exact="true" 
                activeclassname="active" 
                className="about-link" 
                to="/about"
            >
                <FontAwesomeIcon 
                    icon={faUser} 
                    color="#4d4d4e"
                />
            </NavLink>
            <NavLink 
                onClick={() => setShowNav(false)}
                exact="true" 
                activeclassname="active" 
                className="photography-link" 
                to="/photography"
            >
                <FontAwesomeIcon 
                    icon={faCameraAlt} 
                    color="#4d4d4e" 
                />
            </NavLink>
            <NavLink 
                onClick={() => setShowNav(false)}
                exact="true" 
                activeclassname="active" 
                className="contact-link" 
                to="/contact"
            >
                <FontAwesomeIcon 
                    icon={faEnvelope} 
                    color="#4d4d4e" 
                />
            </NavLink>
            <NavLink
                onClick={() => setShowNav(false)} 
                exact="true" 
                activeclassname="active"
                className="skills-link"
                to="/skills"
            >
                <FontAwesomeIcon 
                    icon={faCodeBranch} 
                    color="#4d4d4e"
                    />
            </NavLink>
            <FontAwesomeIcon
                onClick={() => setShowNav(false)} 
                icon={faClose}
                color="#726ADC"
                size="3x"
                className='close-icon'
            />
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/neil-mehta-529944244/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.github.com/mchappyneil/About_Me'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
            onClick={() => setShowNav(true)} 
            icon={faBars}
            color="#726ADC"
            size="3x"
            className='hamburger-icon'
        />
    </div>
    )
}

export default Sidebar