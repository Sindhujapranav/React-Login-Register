import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './Components/main';
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <Layout style={{ background: 'url(https://www.usnews.com/dims4/USNEWS/0b40ca9/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fed%2F49512dcc50e5394df36dccecb41082%2FUSNews18_MainHall.jpg) center / cover' }}>
          <Header className="header-color" transparent title="HIMALAYAN COLLEGE">
            <Navigation>
              <Link to="/Login">Login</Link>
              <Link to="/Register">Register</Link>
              <Link to="/staff">Staff</Link>
              <Link to="/student">Student</Link>

            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/Login">Login</Link>
              <Link to="/Register">Register</Link>
              <Link to="/staff">Staff</Link>
              <Link to="/student">Student</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    )
  }
}




export default App;


