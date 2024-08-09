import components from 'components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/*'  element={<components.Child1 />}></Route>
          <Route path='/second' element={<components.Child2 />}></Route>
          <Route path='/third'  element={<components.Child3 />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
