import React ,{Component} from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Content/>
        <Footer/>

      </div>
  );
  }
}

export default Home;
