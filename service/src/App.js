import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CommissionRequest from './pages/commission-request';
import Header from './Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/commission-Request" element={<CommissionRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
