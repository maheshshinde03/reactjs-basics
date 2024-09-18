import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
import Teacher from './components/Teacher';
import DataBinding from './components/DataBinding';
import EventBinding from './components/EventBinding';
import UseState from './components/UseState';
import UseStateObject from './components/UseStateObject';
import UseStateArray from './components/UseStateArray';
import ConditionRender from './components/ConditionRender';
import DynamicCssClass from './components/DynamicCssClass';
import MapOperator from './components/MapOperator';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import GetApi from './components/GetApi';
import PostApi from './components/PostApi';
import PutDeleteApi from './components/PutDeleteApi';
import UseEffect from './components/UseEffect';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Binding
                </a>
                <ul className="dropdown-menu">
                  <li><Link className='dropdown-item' to="/data-binding">Data Binding</Link></li>
                  <li><Link className='dropdown-item' to="/event-binding">Event Binding</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Use State
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/use-state">Use State</Link></li>
                  <li><Link className="dropdown-item" to="/use-state-array">UseState Array</Link></li>
                  <li><Link className="dropdown-item" to="/use-state-object">UseState Object</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className='nav-link active' to="/condition-render">Conditional Render</Link>
              </li>

              <li className="nav-item">
                <Link className='nav-link active' to="/dynamic-css-class">Dynamic CSS Class</Link>
              </li>

              <li className="nav-item">
                <Link className='nav-link active' to="/map-operator">Map Operator</Link>
              </li>

              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  API
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/get-api">GET Api</Link></li>
                  <li><Link className="dropdown-item" to="/post-api">POST Api</Link></li>
                  <li><Link className="dropdown-item" to="/put-delete-api">PUT DELETE Api</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className='nav-link active' to="/use-effect">Use Effect</Link>
              </li>

            </ul>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<DataBinding></DataBinding>}></Route>
          <Route path='/data-binding' element={<DataBinding></DataBinding>}></Route>
          <Route path='/event-binding' element={<EventBinding></EventBinding>}></Route>
          <Route path='/use-state' element={<UseState></UseState>}></Route>
          <Route path='/use-state-object' element={<UseStateObject></UseStateObject>}></Route>
          <Route path='/use-state-array' element={<UseStateArray></UseStateArray>}></Route>
          <Route path='/condition-render' element={<ConditionRender></ConditionRender>}></Route>
          <Route path='/dynamic-css-class' element={<DynamicCssClass></DynamicCssClass>}></Route>
          <Route path='/map-operator' element={<MapOperator></MapOperator>}></Route>
          <Route path='/get-api' element={<GetApi></GetApi>}></Route>
          <Route path='/post-api' element={<PostApi></PostApi>}></Route>
          <Route path='/put-delete-api' element={<PutDeleteApi></PutDeleteApi>}></Route>
          <Route path='/use-effect' element={<UseEffect></UseEffect>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
