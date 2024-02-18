import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import CourseNavigation from './Navigation';
import { useState } from 'react';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import Breadcrumbs from './Breadcrumbs';

function Courses() {
  const [showCourseNav, setShowCourseNav] = useState(true);
  const { courseId } = useParams();

  return (
    <div>
      <Breadcrumbs courseId={courseId} onHamburgerClick={setShowCourseNav} />
      <hr className='d-none d-lg-block mx-4 my-0' />
      <div className={`d-flex mx-4 ${showCourseNav ? 'ms-md-0' : ''}`}>
        {showCourseNav && <CourseNavigation />}
        <div className={'flex-fill my-3'}>
          <Routes>
            <Route path='/' element={<Navigate to='Home' />} />
            <Route path='Home' element={<Home />} />
            <Route path='Modules' element={<Modules />} />
            <Route path='Piazza' element={<h1>Piazza</h1>} />
            <Route path='Assignments' element={<Assignments />} />
            <Route
              path='Assignments/:assignmentId'
              element={<h1>Assignment Editor</h1>}
            />
            <Route path='Grades' element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
