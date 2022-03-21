import { useEffect,useState} from "react";
import { ListGroupItem } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import  './Films.css';



const Peoples = () => {

    const [peoples, setPeoples] = useState([]);

    useEffect(() => {
       
       fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(data => setPeoples(data));

    }, []);

    return (
        <main>
            <section className="card-holder">
        
                {peoples.map(people=>(

                    <Card key={people.id} style={{ width: '15rem' }}>
                    <Card.Body>
                      <Card.Title>{people.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Gender: {people.gender}</ListGroupItem>
                      <ListGroupItem>Age: {people.age}</ListGroupItem>
                      <ListGroupItem>Eye Color: {people.eye_color}</ListGroupItem>
                      <ListGroupItem> Hair Color{people.hair_color}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                     <Card.Link href="{people.species}">Species</Card.Link>
                     <Card.Link href="{people.url}">Url</Card.Link>
                     <Card.Link href="{people.films}">Films</Card.Link>
                      </Card.Body>
                  </Card>
                ))};
            </section>
        </main>
    )
}
export default Peoples;

