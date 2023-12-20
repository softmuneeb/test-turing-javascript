import React, { useState, useEffect } from 'react';
// import ProfileCard from './ProfileCard';
import Navbar from './Navbar';

// Base styles for the component
const searchContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  textAlign: 'center',
};

const profileCardStyle = {
  backgroundColor: '#f0f0f0',
  padding: '10px',
  maxWidth: '600px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginBottom: '10px',
};

const searchBoxContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const skillsStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '5px',
  padding: '5px 10px',
  margin: '5px',
};

const searchBoxStyle = {
  flex: '1',
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px',
};

const searchButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#525252',
  color: 'white',
  border: 'none',
};

const listAllButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#525252',
  color: 'white',
  border: 'none',
};

function CandidateList({ candidates, setCandidates }) {
  const [searchText, setSearchText] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState('');

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem('candidates'));
    if (storedCandidates?.length > 0) {
      setCandidates(storedCandidates);
      setFilteredCandidates(storedCandidates);
    }
  }, [setCandidates]);

  const handleSearch = () => {
    // Hint: Implement this

    setFilteredCandidates(
      candidates.filter((c) => c.skills.some((s) => s === searchText)),
    );
  };

  const handleListAll = () => {
    // Hint: Implement this
    setSearchText('');
    setFilteredCandidates(candidates);
    // console.log(candidates);
  };

  return (
    <>
      <Navbar></Navbar>
      <div style={{ ...searchContainerStyle, alignItems: 'center' }}>
        <div style={searchBoxContainerStyle}>
          <input
            type='text'
            placeholder='search skills'
            value={searchText}
            style={searchBoxStyle}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button style={searchButtonStyle} onClick={handleSearch}>
            Search Button
          </button>
          <button
            data-testid='candidate-card'
            style={listAllButtonStyle}
            onClick={handleListAll}
          >
            List All
          </button>
        </div>
        {filteredCandidates.length} profiles found
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {filteredCandidates.length === 0
            ? ''
            : filteredCandidates.map((candidate, index) => (
                <div key={index} style={{}}>
                  <div
                    style={{
                      ...profileCardStyle,
                      textAlign: 'left',
                      marginRight: '10px',
                    }}
                  >
                    <h2 style={{ marginBottom: '10px' }}>
                      Role: {candidate.role}
                    </h2>
                    <p>Name: {candidate.name}</p>
                    <p>Email: {candidate.email}</p>
                    <div>
                      <p style={{ fontWeight: 'bold' }}>Skills</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {candidate.skills.map((skill, index) => (
                          <div key={index} style={skillsStyle}>
                            {/* Hint: Implement this */}
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default CandidateList;
