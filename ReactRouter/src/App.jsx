import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from './layouts/MainLayout';
import { Home } from "./pages/Home";
import {Concept} from './pages/Concept';
import {Contact} from './pages/Contact';
import {NotFound} from './pages/NoPage';
import { About } from "./pages/About";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/concept' element={<Concept />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
      </BrowserRouter >

    </>
  )
}

export default App
