import footercss from './Footer.module.css'

function Footer(){
    return(
        <div className="dark-burgundy">
            <div className="component" id={footercss['footer']}>
                <div>
                    <a href="https://www.linkedin.com/in/abdul-azim-bin-abdul-salam-30b696210/?originalSubdomain=my" title='Abdul Azim LinkedIn' target='_blank'>
                        <h4>LinkedIn</h4>
                    </a>
                    <a href="mailto:aabdulazim758@gmail.com" target='_blank'>
                        <h4>Email</h4>
                    </a>
                    <a href="http://wa.me/60178721853" target='_blank'>
                        <h4>WhatsApp</h4>
                    </a>
                </div>
                <h5>
                    <span>©About</span>
                    <span className="pink">Me</span>
                    <span> - Made from Abdul Azim Bin Abdul Salam</span>
                </h5>
            </div>
        </div>
    )
}

export default Footer