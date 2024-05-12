import styles from './Home.module.css'
import image from '../assets/my image 2.jpg'

function Home(){
    return(
        <div className='component'>
            <div id={styles['home-container']}>
                <div id={styles['home-details']}>
                    <h4>Hello, Welcome</h4>
                    <h1>My name is Abdul Azim</h1>
                    <p>Feel free to browse through my portfolio at your leisure. If you have any questions or need further information, please don't hesitate to reach out to me.</p>
                    <a href="mailto:aabdulazim758@gmail.com">
                        <button>Contact me</button>
                    </a>
                </div>
                
                <div className='my-image'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home