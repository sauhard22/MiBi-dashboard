import './App.css';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import WhyToChoose from '../components/whyToChoose';
import Facts from '../components/facts';
import HowWeWork from '../components/howWeWork';
import DownloadApp from '../components/downloadApp';
import Footer from '../components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import React, { useEffect } from 'react'
import Pricing from './home_pages/Pricing';
import Main from './home_pages/Main';
import Partners from './home_pages/Partners';
import AboutUs from './home_pages/AboutUs';

function App() {

  let { path, url } = useRouteMatch();

  useEffect(() => {
    console.log('path',path)

  }, [])

  // if (path === '/') {
  //   return <Redirect to={`${path}main`} />
  // }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path={`${path}/main`}>
            <Main />
          </Route>
          <Route path={`${path}/pricing`}>
            <Pricing />
          </Route>
          <Route path={`${path}/partners`}>
            <Partners />
          </Route>
          <Route path={`${path}/about-us`}>
            <AboutUs />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
