import './App.css';
import Navbar from './Components/Navbar.js'
import About from './Components/About';
import React, { useState } from "react";
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import News from './Components/News';
function App() {
  let pageSize = "15";
  const [progress, setProgress] = useState(0);
  let apikey = process.env.REACT_APP_NEWS_API;
  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={4}
          shadow={false}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={< News apikey={apikey} setProgress={setProgress} key="general" pageSize={pageSize} category="general" />} />
          <Route exact path="/business" element={< News apikey={apikey} setProgress={setProgress} key="business" pageSize={pageSize} category="business" />} />
          <Route exact path="/entertainment" element={< News apikey={apikey} setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" />} />
          <Route exact path="/health" element={< News apikey={apikey} setProgress={setProgress} key="health" pageSize={pageSize} category="health" />} />
          <Route exact path="/science" element={< News apikey={apikey} setProgress={setProgress} key="science" pageSize={pageSize} category="science" />} />
          <Route exact path="/sports" element={< News apikey={apikey} setProgress={setProgress} key="sports" pageSize={pageSize} category="sports" />} />
          <Route exact path="/technology" element={< News apikey={apikey} setProgress={setProgress} key="technology" pageSize={pageSize} category="technology" />} />
          <Route exact path="/about" element={<About key="about" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// cefd9a38d4ab4bc18e19b210ee9c33e4
export default App;
