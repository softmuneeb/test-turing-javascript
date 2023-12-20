import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

// Base styles for the component
const alertMessage = {
  marginTop: '5px',
};

const highlight = {
  border: '2px solid red',
  backgroundColor: 'red',
};

const centerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  textAlign: 'center',
};

const addSkillButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  color: 'white',
  borderRadius: '5px',
  marginLeft: '10px',
  cursor: 'pointer',
};

const formBoxStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  backgroundColor: '#f5f5f5',
};

const formGroupStyle = {
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
};

const sharpEdgeButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  padding: '10px 20px',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const skillTagStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '0',
  padding: '5px 10px',
  margin: '0 5px',
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

function CandidateRegistration({ candidates, setCandidates }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    skill: '',
    skills: [],
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [highlightInput, setHighlightInput] = useState(false);

  const isValid =
    /^[a-zA-Z0-9\s]*$/.test(formData.name) &&
    /^[a-zA-Z0-9\s]*$/.test(formData.role) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const submitDisabled =
    !isValid ||
    formData.name === '' ||
    formData.email === '' ||
    formData.role === '' ||
    formData.skills.length === 0;

  const handleAddSkill = () => {
    // Hint: Implement this

    if (formData.skills.length < 5)
      setFormData({
        ...formData,
        skill: '',
        skills: [...formData.skills, formData.skill],
      });
  };

  const handleFormSubmit = (e) => {
    // Hint: Implement this
    e.preventDefault();

    if (formData.skills < 1) return;

    if (candidates.some((c) => c.email === formData.email)) {
      setRegistrationStatus('Email already exists');
      return setHighlightInput(true);
    }

    setRegistrationStatus('Candidate profile created');
    setHighlightInput(false);

    setCandidates([...candidates, formData]);
    setFormData({
      name: '',
      email: '',
      role: '',
      skill: '',
      skills: [],
    });
  };

  const handleReset = () => {
    // Hint: Implement this
    setFormData({
      name: '',
      email: '',
      role: '',
      skill: '',
      skills: [],
    });
  };

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem('candidates'));
    if (storedCandidates?.length > 0) {
      setCandidates(storedCandidates);
    }
  }, [setCandidates]);

  return (
    <>
      <Navbar candidateCount={candidates?.length || []}></Navbar>
      <div style={centerContainerStyle}>
        <div style={formBoxStyle}>
          <div data-testid='registration-component' style={formBoxStyle}>
            <form onSubmit={handleFormSubmit}>
              <div className='form-group' style={formGroupStyle}>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  placeholder='Name'
                  required
                  style={inputStyle}
                  data-testid='form-input-name'
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
              </div>
              <div className='form-group' style={formGroupStyle}>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  placeholder='Email'
                  data-testid='form-input-name'
                  required
                  style={{
                    ...inputStyle,
                    ...(highlightInput ? highlight : {}),
                  }}
                />
              </div>
              <div className='form-group' style={formGroupStyle}>
                <input
                  type='text'
                  name='role'
                  value={formData.role}
                  onChange={(e) => {
                    setFormData({ ...formData, role: e.target.value });
                  }}
                  placeholder='Role'
                  required
                  style={inputStyle}
                />
              </div>
              <div className='form-group' style={formGroupStyle}>
                <input
                  data-testid='form-input-skill'
                  type='text'
                  name='skill'
                  value={formData.skill}
                  onChange={(e) => {
                    // if(! /^[a-zA-Z\s]*$/.test(e.target.value)) return

                    setFormData({ ...formData, skill: e.target.value });
                  }}
                  placeholder='Skill'
                  style={inputStyle}
                />
                <button
                  type='button'
                  data-testid='add-btn'
                  style={addSkillButtonStyle}
                  onClick={handleAddSkill}
                  disabled={formData.skill === ''}
                >
                  Add Skill
                </button>
              </div>
              <div>
                {formData.skills.map((skill, index) => (
                  <span
                    key={index}
                    data-testid='skill-tag'
                    style={skillTagStyle}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div style={buttonGroupStyle}>
                <button
                  data-testid='submit-btn'
                  type='submit'
                  style={sharpEdgeButtonStyle}
                  disabled={submitDisabled}
                  onClick={handleFormSubmit}
                >
                  Register
                </button>
                <button
                  data-testid='reset-btn'
                  type='button'
                  style={sharpEdgeButtonStyle}
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
            <div style={registrationStatus ? alertMessage : {}}>
              {registrationStatus && registrationStatus}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateRegistration;
