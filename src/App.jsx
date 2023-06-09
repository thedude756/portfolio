import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
    return (
        <BrowserRouter>
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <ToastContainer 
                    position="top-center"
                    style={{ marginTop: '20px' }}
                />
                <Hero />
            </div>
            <About />
            <Experience />
            <Works />
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;