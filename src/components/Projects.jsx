
import glass from "../assets/glass.png"
import weather from "../assets/weather.png"
import crudApp from "../assets/crudApp.png"
import socialApp from "../assets/socialApp.png"
import svgLogoGen from "../assets/svgLogoGen.png"
import dayPlanner from "../assets/dayPlanner.png"

import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Projects() {

    /*
npm install react-bootstrap 
npm install bootstrap
    */


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

            <Container>
                <Row className="justify-content-center">
                    {projects.map(item => (
                        <Col md={3} className='m-3'>
                            <Card className='h-100' key={item.name}>
                                <a href={item.link} target="_blank">
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Img className='project-img' src={item.image} />
                                </a>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>


        </>
    )



}
