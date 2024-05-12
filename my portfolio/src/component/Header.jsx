import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header(){

    return(
        <div className='dark-burgundy header-pos'>
        <div id={styles['header']} className='component'>
            <div style={{display: 'flex'}}>
                <h3>About</h3>
                <h3 style={{color: 'var(--bright-pink)'}}>Me</h3>
            </div>
            <div className={styles['header-option']}>
                <Link to='/'>
                    <h4>Home</h4>
                </Link>
                <h4 onClick={() => scrollToSection(aboutRef)}>About</h4>
                {/* <h4>Resume</h4> */}
                <h4 onClick={() => scrollToSection(portfolioRef)}>Portfolio</h4>
            </div>
        </div>
        </div>
    )
}

export default Header