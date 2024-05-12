import { useRef } from "react"
import AboutMe from "../component/AboutMe"
import Home from "../component/Home"
import Portfolio from "../component/Portfolio"


function HomePage({homeRef, aboutmeRef, portfolioRef}){
    return(
        <>
        <Home ref={homeRef}/>
        <AboutMe ref={aboutmeRef}/>
        <Portfolio ref={portfolioRef}/>
        </>
    )
}

export default HomePage