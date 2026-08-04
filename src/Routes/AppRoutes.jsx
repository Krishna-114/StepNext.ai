// here we will write all the paths and elemnts for the whole StepNext.ai

import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Landing from '../Pages/Landing/Landing';
import LandingLayout from '../Layouts/LandingLayout';

function AppRoute(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route element={<LandingLayout/>}/>
            <Route path='/' element={<Landing/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default AppRoute;

