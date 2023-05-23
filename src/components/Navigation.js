import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Education from './education/Education';
import Overview from './overview/Overview';
import Projects from './projects/Projects';
import WorkExperience from './work-experience/WorkExperience';

const Navigation=()=>{
    return(
        <div className='nav-bar'>
            
            <Router>
              <div className='navigation'>
              <nav>
              <Link className='links' to="/"> <button className='nav' >About Me</button> </Link>
            <Link className='links' to="/education/"> <button className='nav' >Education</button> </Link>
              <Link className='links' to="/projects/"> <button className='nav' >Projects</button> </Link>
              <Link className='links' to="/experience/"> <button className='nav' >Experience</button> </Link>
              
              </nav>
              </div>


              <Routes>
                 <Route path='/' exact component ={Overview} />
                 <Route path='/education/' exact component={Education}/>
                <Route path='/projects/' exact component={Projects}/>
                <Route path='/experience' exact component={WorkExperience}/>
              </Routes>
            </Router>
        </div>
    )

}
export default Navigation;

