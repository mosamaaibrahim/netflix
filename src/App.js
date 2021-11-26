import { useEffect } from 'react';
import Navbar from './Views/Navbar'
import Home from './Views/Home'
//Redux

import { getInit } from './Redux/actions/index'
import init from './API/index';
function App(props) {
  useEffect(() => {
    getInit();
  }, [])
  return (
    <div className="bg-prblack px-3 h-screen w-screen overflow-y-auto">
      <Navbar />
      <Home />
    </div>
  );
}
export default App
