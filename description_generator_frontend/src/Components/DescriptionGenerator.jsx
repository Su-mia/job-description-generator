import React, { useState , useEffect } from 'react';
import axios from 'axios';


function DescriptionGenerator() {

    const [description, setDescription] = useState("Job description is null");
    const [jobTitle, setJobTitle] = useState('');      
    const [industry, setIndustry] = useState('');      
    const [tone, setTone] = useState('');      


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await   
        axios.get(` http://127.0.0.1/description/${jobTitle}/${industry}/${tone}`);
        setDescription(response.data);

        } catch (error) {
        console.error(error);
        }
    };

return (
        <div>
          <h1>Job Description Generator</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="jobTitle">Job Title:</label>
            <input
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}   
    
            />
            <br />
            <label htmlFor="industry">Industry:</label>
            <input
              type="text"
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}   
    
            />
            <br />
            <label htmlFor="tone">tone:</label>
            <input
              type="text"
              id="tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}   
    
            />
            <button type="submit">Generate Description</button>
          </form>
          <p>{description}</p>
        </div>
  )
}

export default DescriptionGenerator
