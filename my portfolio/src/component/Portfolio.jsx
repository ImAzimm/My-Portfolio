import PortfolioCard from '../cards/PortfolioCard'
import portfoliocss from './Portfolio.module.css'
import { portfolioDatas } from '../Data/PortfolioData'

function Portfolio(){    
    return(
        <div className="component">
            <div className={portfoliocss['container']}>
                <h1 style={{fontSize:'2.5rem'}}>
                    <span>My </span>
                    <span style={{color:'var(--bright-pink)'}}>Portfolio</span>
                </h1>
                <p>Feel free to explore my portfolio showcasing my experience in class projects and co-curricular activities, particularly focusing on design work.</p>

                <div id={portfoliocss['cards-collage']}>
                    {
                        portfolioDatas.map((obj, index) => 
                            (<PortfolioCard key={obj.id} portfolioData={obj}/>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio