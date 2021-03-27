import React from 'react'
import { Card, Button, Container, Row} from 'react-bootstrap';
export default function card(props) {
    return (
        <Container>
  <Row>
  <div className="Card">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.price}
                    {props.description}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
        </div>
  </Row>
  <Row>
  <div className="Card">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.price}
                    {props.description}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
        </div>
  </Row>
</Container>
        
    )
}
