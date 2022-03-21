/* eslint-disable no-undef */

import { useEffect,useState} from "react";
import { ListGroupItem } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import  './Films.css';



const Films = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
       
       fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(data => setFilms(data));

    }, []);


    return (
        <main>
            <section className="card-holder">
              
        
                {films.map(film=>(

                    <Card key={film.id} style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={film.image} />
                    <Card.Body>
                      <Card.Title>{film.title}</Card.Title>
                      <Card.Text>
                        {film.description}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>{film.director}</ListGroupItem>
                      <ListGroupItem>{film.producer}</ListGroupItem>
                      <ListGroupItem>{film.release_date}</ListGroupItem>
                      <ListGroupItem> {film.running_time} Minutes</ListGroupItem>
                      <ListGroupItem  className="runtime">{film.rt_score}</ListGroupItem>
                    </ListGroup>
                  </Card>
                ))};
            </section>
        </main>
    )

    
}
export default Films;

