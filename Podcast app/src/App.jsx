import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Preview from './components/Preview';
import Show from './components/Show';
import Seasons from './components/Seasons';
import Episode from './components/Episode';
import Genre from './components/Genre';
import AudioPlayer from './components/Audioplayer';

function App(){

  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Preview />} />
    <Route path="/show/:id" element={<Show />} />
    <Route path="/seasons/:id" element={<Seasons/>}/>
    <Route path="/episode/:id" element={<Episode/>}/>
    <Route path="/genre/:id" element={<Genre/>}/>
    <Route path="/audioplayer" element={<AudioPlayer/>}/>

  </Routes>
  
  </BrowserRouter>
  )
}

export default App
