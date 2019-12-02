import React from 'react';
import Header from './header.js';
import Courses from './courses.js';
import Testimonials from './testimonials';
import Interval from './interval';
import findOurCourses from './findOurCourses';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Courses/>
      <Testimonials/>
      <Interval/>
      <findOurCourses/>
    </div>
  );
}

export default App;
