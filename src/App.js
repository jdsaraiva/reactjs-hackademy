import React from 'react';
import Header from './header.js';
import Courses from './courses.js';
import Testimonials from './testimonials';
import Interval from './interval';
import FindOurCourses from './FindOurCourses';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Courses/>
      <Testimonials/>
      <Interval/>
      <FindOurCourses/>
    </div>
  );
}

export default App;
