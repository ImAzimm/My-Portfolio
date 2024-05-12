import { Link } from 'react-router-dom'
import portfoliocardcss from './PortfolioCard.module.css'

function PortfolioCard({key, portfolioData}){
    const thumbnail = portfolioData.thumbnail[0]
    const title = portfolioData.title
    const desc = portfolioData.desc
    const type = portfolioData.type     

    return(
        <Link to={'/portfolio'} state={{portfolioData}}>
        <div id={portfoliocardcss['container']}>
                <div id={portfoliocardcss['image-ph']}>
                    <img src={thumbnail} alt=""/>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div id={portfoliocardcss['type']}>
                    <h5>{type}</h5>
                </div>
            </div>
        </Link>
    )
}

export default PortfolioCard