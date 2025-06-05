import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import CommissionRequest from './pages/commission-request';
import CommissionInfo from './pages/commission-info';
import Gallery from './pages/gallery';
import Home from './pages/home';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/commission-Request" element={<CommissionRequest />} />
        <Route path="/commission-info" element={<CommissionInfo />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;