import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Demo from './component/Demo'
import Demo3 from './component/Demo3'
import Navigate from './component/Navigate'


const App = () => {
  return (
    <BrowserRouter>
    <Navigate />
     <Routes>
      <Route path='/' element={<Demo />}/>
      <Route path='demo3' element={<Demo3 />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App