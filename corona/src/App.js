import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import {Route,Routes} from 'react-router-dom'
import Korea from './pages/Korea';
import Location from './pages/Location';
import World from './pages/World'
import Vaccine from './pages/Vaccine'

function App(props) {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path='/Korea' element={<Korea />} />
        <Route path='/Location' element={<Location />} />
        <Route path='/World' element={<World />} />
        <Route path='/Vaccine' element={<Vaccine />} />
      </Routes>
    </div>
  );
}

export default App;