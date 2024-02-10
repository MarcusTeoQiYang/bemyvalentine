import React from 'react'
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
// import reach snowfall
import Snowfall from 'react-snowfall';
//change snowfall image
import snowLogo from './img/Hearts.png';
const snowFlake = document.createElement('img')
snowFlake.src = snowLogo
const images = [snowFlake]

function App() {
  return (
    <div className="App">
      <Snowfall style={{
        position:'fixed',
        width:'100vw',
        height:'100vh',
      }}
      snowflakeCount={80}
      radius={[10,20]}
      speed={[0.5,2.5]}
      wind={[-0.5,2]}
      images={images}
      rotationSpeed={[-1,1]}
      />
      <Routes>
            <Route path="/" element={<HomePage/>}/>
            {/* <Route path="/test" element={<TestPage/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
