import aboutmecss from './AboutMe.module.css'
import image from '../assets/my image.jpg'

function AboutMe(){
    return(
        <div className='burgundy'>
        <div id='aboutme' className='component'>
            <div id={aboutmecss['aboutme-container']}>
                <div className='my-image'>
                    <img src={image} alt="" />
                </div>
                <div id={aboutmecss['aboutme-details']}>
                    <h1>
                        <span>About </span>
                        <span style={{color:'var(--bright-pink)'}}>Me</span>
                    </h1>
                    <p>Currently pursuing a degree in Computer Science majoring Software Engineering at Universiti Malaya, expected completion February 2026. </p>
                    <p>Seeking for internship placement for 24 weeks from 14th July until 26th December to develop skills, particularly in web development.</p>
                    <p>Specialized in software development and database management with proficiency in Java, JavaScript, HTML, CSS & SQL using framework such as Android Studio, React and Anaconda. </p>
                    <p>Brings a track record of successfully collaborating on academic projects that stimulate real-world problem-solving. </p>
                    <p>Eager to contribute to innovate projects, enhance team dynamics with strong communication skills, and achieve personal growth by tackling challenging assignments in the tech industry.</p>
                    <a href="mailto:aabdulazim758@gmail.com">
                        <button>Contact me</button>
                    </a>
                    {/* <h4>Hello, Welcome</h4>
                    <h1>My name is Abdul Azim</h1>
                    <p>Feel free to browse through my portfolio at your leisure. If you have any questions or need further information, please don't hesitate to reach out to me.</p>
                    <button>Contact me</button> */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutMe