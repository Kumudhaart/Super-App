import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './pages/Register';
import Choice from './pages/Choice';
import Browse from './pages/Browse';
import Display from './pages/Display';

const App=()=>{
  return(
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/choice" element={<Choice/>}/>
        <Route path="/browse" element={<Browse/>}/>
        <Route path="/display" element={<Display/>}/>
      </Routes>
   </BrowserRouter>
  );
}
export default App;