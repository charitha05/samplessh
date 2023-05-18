import React from 'react';
import './styles.css'; // Import your custom CSS file for styling
import faculty from "./pages/Faculty"

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li><a href="./App.js">Home</a></li>
          <li><a href="Faculty">Faculty</a></li>
          <li><a href="#">Exam</a></li>
          <li><a href="#">Allotment</a></li>
          <li><a href='#'>Lab</a></li>
          <li className='Logo'><a href='#'>Logout</a></li>
        </ul>
      </div>
    );
  }
}

export default NavigationBar;
