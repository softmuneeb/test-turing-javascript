import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CandidateList from './components/CandidateList';
import CandidateRegistration from './components/CandidateRegistration';
import Home from './components/Home';

function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Save candidates to localStorage whenever candidates state changes
    localStorage.setItem('candidates', JSON.stringify(candidates, null, 2));
  }, [candidates]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home candidates={candidates} />} />

          <Route
            path='/candidate/list'
            element={
              <CandidateList
                candidates={candidates}
                setCandidates={setCandidates}
              />
            }
          />
          <Route
            path='/candidate/registration'
            element={
              <CandidateRegistration
                candidates={candidates}
                setCandidates={setCandidates}
              />
            }
          />

          <Route path='*' element={<div>Not found</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
