import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white', 
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function NavbarUi() {

  const name = window.sessionStorage.getItem("name");

  const navigate = useNavigate();

  const handleClick = () =>{
        window.sessionStorage.clear();
         navigate('/');
        }

const handleClick3 = () =>{
         navigate('/FeedBack');
        }

const handleClick4 = () =>{
          navigate('/main');
         }

const handleClick5 = () =>{
          navigate('/Store');
         }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{ height: "90px" }}>
        <Navbar.Brand href="#home">GAME STORE</Navbar.Brand>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={handleClick4} href="" style={{ color: 'white' }}>HOME</Nav.Link>
            <Nav.Link onClick={handleClick5} href="" style={{ color: 'white' }}>STORE</Nav.Link>
            <NavDropdown title="CATEGORIES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="" as={Link} to="/pcgames">PC GAMES</NavDropdown.Item>
              <NavDropdown.Item href="" as={Link} to="/mobilegames">
                MOBILE GAMES 
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={handleClick3} href="#pricing" style={{ color: 'white' }}>FEEDBACK</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="" style={{ color: 'white', marginLeft:'30px'}}>WELCOME <span style={{color:"Lightgreen", textTransform:"uppercase"}}>{name}</span></Nav.Link>
            <Nav.Link onClick={handleClick} href="" style={{ color: 'white', marginLeft:'30px'}}>LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarUi;
