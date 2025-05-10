import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails'
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components'
import Footer from './components/Footer'
import AnimatedCursor from 'react-animated-cursor'
import UserChatBox from './components/UserChatBox'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-x-hidden'>
        <AnimatedCursor
          innerSize={12}
          outerSize={16}
          color='255, 255, 255'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            {
              target: '.custom',
              options: {
                innerSize: 12,
                outerSize: 12,
                color: '255, 255, 255',
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <div className=''>
                  <Navbar />
                  <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <div className='relative z-0'>
                  <Contact />
                  <StarsCanvas />
                </div>
                <Footer />
                <UserChatBox />
              </>
            }
          />
          <Route path='/project/:id' element={<ProjectDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
