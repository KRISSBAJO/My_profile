import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

import 'font-awesome/css/font-awesome.min.css';

import Layout from './Layout/Layout';
import Home from './components/Home/Home';
import About from './components/Pages/About';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';
import ErrorPage from './components/Pages/ErrorPage.js';
import ProfileChart from './components/Pages/ProfileChart';
import Availability from './components/Pages/Availability';

function App() {
    return (
        <Router>
            <div className="App">
                <Layout>
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/ProfileChart" element={<ProfileChart />} />
                        <Route path="/availability" element={<Availability  />} />
                        <Route index element={<Home />} />
                        <Route path="*" element={<ErrorPage />} /> {/* This line handles undefined routes */}
                    </Routes>
                </Layout>
            </div>
        </Router>
    );
}

export default App;