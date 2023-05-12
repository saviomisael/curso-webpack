import ContactPage from 'ContactApp/ContactPage';
import HomePage from 'HomeApp/HomePage';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'reactstrap';

import './app.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>

      <Routes>
        <Route index path="/" element={<HomePage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
