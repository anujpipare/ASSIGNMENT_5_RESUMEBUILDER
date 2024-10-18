import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './styles.css';

const App = () => {
  const [resumeData, setResumeData] = useState(null);

  const handleResumeSubmit = (data) => {
    setResumeData(data);
  };

  return (
    <div className="App">
      <ResumeForm onSubmit={handleResumeSubmit} />
      <ResumePreview data={resumeData} />
    </div>
  );
};

export default App;
