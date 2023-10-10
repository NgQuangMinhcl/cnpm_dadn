import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'



function Header() {
  return (
    <div style={{backgroundColor:'#6600CC', height:'80px', color:'white', padding:'0'}}>
      <Row style={{margin:'0'}}>
        <Col xs={10} >
          <h1 style={{paddingTop:'10px', paddingLeft:'20px'}}>Smart Home</h1>
        </Col>

        <Col>
          <div style={{paddingTop:'15px'}}>
            <span class="bi bi-gear"  style={{fontSize: '2em', paddingLeft:'100px'}}></span>
            <span class="bi bi-bell" style={{fontSize: '2em', paddingLeft:'30px'}}></span>
          </div>
          
        </Col>
        
      </Row>
    </div>
  )
}

export default Header;
