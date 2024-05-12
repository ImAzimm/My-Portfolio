import portfoliopagecss from './PortfolioPage.module.css';
import ImageCollage from './ImageCollage'
import { useLocation, useParams } from 'react-router-dom';

function PortfolioPage(props){
    const location = useLocation()
    const {portfolioData} = location.state
    const data = portfolioData

    const gotoLink = (link) =>{
        window.open(link, '_blank');    
    };

    return(
        <><div className="component">
            <div id={portfoliopagecss['details-container']}>
                    <div id={portfoliopagecss['details']}>
                        <h1 style={{color:'var(--bright-pink)', textShadow:'4px 4px 8px 0px #d9d9d9'}}>{data.title}</h1>
                        <p>{data.desc}</p>
                        <div id={portfoliopagecss['grid']}>
                            {data.link.map((metadata, index) => (
                            <><span>{metadata.span}</span>
                            <button onClick={() => gotoLink(metadata.link)}>See more</button></>))}
                        </div>
                    </div>

                    <div className='my-image'>
                        <img src={data.thumbnail[1]} alt="" />
                    </div>
                </div>
        </div>
        
        <div className='component burgundy'>
            <div style={{padding:'6rem 0'}}>
                <h1 style={{color:'white'}}>
                    <span>My </span>
                    <span style={{color:'var(--bright-pink)'}}>Artwork</span>
                </h1>
                <ImageCollage images={data.image}/>
            </div>
        </div>
        </>
    )
}

export default PortfolioPage