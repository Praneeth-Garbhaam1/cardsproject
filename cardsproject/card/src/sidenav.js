import React, { Component } from 'react'
import {Nav} from 'react-bootstrap'
export default class sidenav extends Component {
    
    render() {
        return (
            <>

            <Nav className="col-md-3 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link >
                  <label>Category</label>
                            <select >
                                <option>Tablet</option>
                                <option>Keypad</option>
                                <option>Iphone</option>
                            </select>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>Min-Price
                {/* onChange={props.state} */}
                <input type="text" /><br></br>
                Max-price
                <input type="text"/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>Size</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>Color</Nav.Link>
            </Nav.Item>
        
            </Nav>
                </>
        )
    }
}
