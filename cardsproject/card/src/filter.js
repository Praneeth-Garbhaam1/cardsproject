import React from 'react'
import {Form,Container, Row, Col,ListGroup} from 'react-bootstrap'

const filters = ({data, minPrice, maxPrice, selectedCategories, val, onMaxPriceChange, onMinPriceChange}) => {

        return (
            <div>
                <Container>
                <Row>
                       
                <Form>
                    <Col>
                    <Form.Group controlId="formBasicMinPrice">
                        <Form.Label>Min Price</Form.Label>
                        <Form.Control type="text"  value={minPrice} onChange = {(e) => onMinPriceChange(e.target.value)} placeholder="Enter minimum price" />
                        
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="formBasicMaxPrice">
                        <Form.Label>Max Price</Form.Label>
                        <Form.Control type="text"    value={maxPrice} onChange={(e) => onMaxPriceChange(e.target.value)} placeholder="Enter Maximum Price" />
                    </Form.Group>
                    </Col>
                    
                </Form>
                <ListGroup>
                    <Form.Label className="label">Category</Form.Label>
                    {
                        Array.isArray(data) && data.map((item) => (

                            <ListGroup.Item key={item}>
                                <Form.Check name="category" label={item} onClick={() => val(item)}
                                    checked={selectedCategories.includes(item)} />
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
                </Row>
                </Container>
            </div>
        )
    }

export default filters