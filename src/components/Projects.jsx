
import glass from "../assets/glass.png"
import weather from "../assets/weather.png"
import crudApp from "../assets/crudApp.png"
import socialApp from "../assets/socialApp.png"
import svgLogoGen from "../assets/svgLogoGen.png"
import wortcg from "../assets/wortcg.png"

import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Projects() {

    /*
npm install react-bootstrap 
npm install bootstrap
    */


    const projects = [
        {
            name: "WoR tcg",
            link: "https://warlordsofravegea-c36fa2705fc4.herokuapp.com/",
            image: wortcg,
            id:1
        },
        {
            name: "Cocktail-Generator",
            link: "https://matt0stark.github.io/cocktail_generator/",
            image: glass,
            id:2
        },
        {
            name: "Weather-App",
            link: "https://matt0stark.github.io/weather_fiveday/",
            image: weather,
            id:3
        },
        {
            name: "CRUD-App",
            link: "https://drive.google.com/file/d/1xuwMvjB78kL3ai-pfJ2MGTnjaBgNgUtN/view",
            image: crudApp,
            id:4
        },
        {
            name: "Social-Media-Backend",
            link: "https://drive.google.com/file/d/1V1-Mz1pEhXuhBiUsfXY2cWPJxFTyQSvd/view",
            image: socialApp,
            id:5
        },
        {
            name: "SVG-Logo-Generator",
            link: "https://drive.google.com/file/d/1cZDB053oloKWN8KGKWUB2AP0pb6wSIfg/view",
            image: svgLogoGen,
            id:6
        }
    ]
    return (
        <>
            <h1>Projects</h1>
            <Container>
                <Row className="justify-content-center">
                    {projects.map(item => (
                        <Col md={3} className='m-3' key={`colum${item.name}`}>
                            <Card className='h-100' key={item.id}>
                                <a href={item.link} target="_blank" key={`atag${item.name}`}>
                                    <Card.Title key={`title${item.name}`}>{item.name}</Card.Title>
                                    <Card.Img key={`image${item.name}`} className='project-img' src={item.image} />
                                </a>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>


        </>
    )



}
