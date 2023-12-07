
import glass from "../assets/glass.png"
import weather from "../assets/weather.png"
import crudApp from "../assets/crudApp.png"
import socialApp from "../assets/socialApp.png"
import svgLogoGen from "../assets/svgLogoGen.png"
import dayPlanner from "../assets/dayPlanner.png"

export default function Projects () {



    const projects = [
        {
            name: "Cocktail Generator",
            link: "https://matt0stark.github.io/cocktail_generator/",
            image: glass
        },
        {
            name: "Weather App",
            link: "https://matt0stark.github.io/weather_fiveday/",
            image: weather
        },
        {
            name: "CRUD App",
            link: "https://drive.google.com/file/d/1xuwMvjB78kL3ai-pfJ2MGTnjaBgNgUtN/view",
            image: crudApp
        },
        {
            name: "Social Media Backend",
            link: "https://drive.google.com/file/d/1V1-Mz1pEhXuhBiUsfXY2cWPJxFTyQSvd/view",
            image: socialApp
        },
        {
            name: "SVG Logo Generator",
            link: "https://drive.google.com/file/d/1cZDB053oloKWN8KGKWUB2AP0pb6wSIfg/view",
            image: svgLogoGen
        },
        {
            name: "Day Planner",
            link: "https://matt0stark.github.io/event_manager/",
            image: dayPlanner
        },
       
    ]




    return (
        <>
            <h1>Projects</h1>

            <div>
                {projects.map(item => (
                    <div key={item.name}>
                        <a href={item.link} target="_blank">
                        <h3>{item.name}</h3>
                        <img src={item.image}/>
                        </a>
                       
                    </div>
                ))}
            </div>


        </>
    )



}
