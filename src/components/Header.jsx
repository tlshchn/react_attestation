import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import "../App.css"
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> 
            <Link to={'/'}>tm.</Link> 
            </Navbar.Brand>
          <Nav className="me-auto">
            
          <div>
    <motion.p
    initial={{
      x:-1000,
      opacity:0
    }}

    animate={{
        x: -10,
        y: 9,
        opacity: 1
    }}
    transition={{
      delay:1,
      duration: 2,
      type:'tween'
    }}
    ><Link to={'/'}> - твоя мечта</Link> 
    </motion.p> </div>
          </Nav>
         
        </Container>
      </Navbar>
  
      
    </div>
  )
}

export default Header