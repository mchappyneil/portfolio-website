import './index.scss';
import Self from '../../../assets/images/self-recent-cropped.png'
import { useRef } from 'react'

const Logo = () => {    
    const bgRef = useRef();
    const solidLogoRef = useRef();

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={Self} alt="Me!" />
        </div>
    )
}

export default Logo