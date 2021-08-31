import React, {useState} from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import GYAHM from '../../assets/projects/GYAHM.jpg';
import MyJober from '../../assets/projects/MyJober.jpg';
import NoteTaker from '../../assets/projects/NoteTaker.jpg';
import ReadMe from '../../assets/projects/ReadMe.jpg';
import SeQL from '../../assets/projects/SQL-ET.jpg';
import Weather from '../../assets/projects/Weather-Dash.jpg';
import Scheduler from '../../assets/projects/WorkScheduler.jpg';
import './Project.css';


function ProjectComponent({ imageSrc, description, appLink, githubLink }) {

    const [showLinks, setshowLinks] = useState(false);

    return (
        <Col xs={6} md={4}>
            <div 
                style={{width: 'auto', position: 'relative', textAlign: 'center'}}
                onMouseEnter={() => setshowLinks(true)}
                onMouseLeave={() => setshowLinks(false)}
            >
                <Image 
                    src={imageSrc} 
                    rounded 
                    responsive
                    style={{ width:'70%', height:'100%', backgroundSize: 'cover'}}
                    className="imageHover"
                />
                {showLinks &&
                    <div className="textHover">
                        <a href={appLink} style={{fontSize: '30px'}}>App Link</a>
                        <a href={githubLink}><img src="https://img.icons8.com/fluency/48/000000/github.png"/></a>
                    </div>
                }
            </div>
        </Col>
    );
}


function ProjectsComponent () {
    
    const projects = [
        {
            imageSrc: GYAHM,
            description: 'Group project 1',
            appLink: 'https://jmol721.github.io/get-you-a-happy-meal-toy-not-included/',
            githubLink: 'https://github.com/jmol721/get-you-a-happy-meal-toy-not-included'
        },
        {
            imageSrc: MyJober,
            description: 'Group project 3',
            appLink: 'https://shielded-chamber-45932.herokuapp.com/#/',
            githubLink: 'https://github.com/chdonovan/Jobs-posting'
        },
        {
            imageSrc: NoteTaker,
            description: 'Express project',
            appLink: 'https://express-molina.herokuapp.com/',
            githubLink: 'https://github.com/jmol721/express.js-challenge-jose-molina'
        },
        {
            imageSrc: ReadMe,
            description: 'ReadMe Generator',
            appLink: 'https://github.com/jmol721/Jose-Molina-Project-7',
            githubLink: 'https://github.com/jmol721/Jose-Molina-Project-7'
        },
        {
            imageSrc: Weather,
            description: 'Weather Dashboard',
            appLink: 'https://jmol721.github.io/Jose-Molina-Project-6/',
            githubLink: 'https://github.com/jmol721/Jose-Molina-Project-6'
        },
        {
            imageSrc: SeQL,
            description: 'SQL Project',
            appLink: 'https://github.com/jmol721/molina-sql-challenge',
            githubLink: 'https://github.com/jmol721/molina-sql-challenge'
        },
        {
            imageSrc: Scheduler,
            description: 'Work Day Scheduler',
            appLink: 'https://jmol721.github.io/Jose-Molina-Project-5/',
            githubLink: 'https://github.com/jmol721/Jose-Molina-Project-5'
        },
    ];
    
    return (
        <div style={{ paddingTop: '5%', margin: '10px', border: 'black 2px'}}>
            <Container>
                <Row>
                    <h1>
                        <p>Here are some of the projects I have been working on!</p>
                    </h1>
                </Row>
                <Row>
                    {projects.map((project, index) => {
                    return <ProjectComponent key={index} {...project}/>
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default ProjectsComponent;