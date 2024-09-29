import  React , {useState} from 'react'
import axios from 'axios';

import Step1 from './utils/Step1'
import Step2 from './utils/Step2'
import Step3 from './utils/Step3'
import ButtonC from './utils/ButtonC'
import Progress1 from '../assets/Icons/Progress1'
import Progress2 from '../assets/Icons/Progress2'
import Progress3 from '../assets/Icons/Progress3'
import Line from '../assets/Icons/Line'
import Result from './Result';

function Hero() {

  const [step , setStep] = useState(1);
  const [loaded, setLoaded] = useState(false);

  const [titleError, setTitleError] = useState("");
  const [industryError, setIndustryError] = useState("");

  const [description, setDescription] = useState("Job description is null");

  const [formData, setFormData] = useState({
    jobTitle: '',
    industry: '',
    tone:'',
    location:'',
    workHours:0,
    format:''
  });

  const nextStep = () => {
    if (!formData.jobTitle) {
      setTitleError("You need to specify a job title");
    } else {
      setTitleError("");
    }
  
    if (!formData.industry) {
      setIndustryError("You need to specify an industry");
    } else {
      setIndustryError("");
    }
  
    if (formData.jobTitle && formData.industry) {
      setStep(prevStep => prevStep + 1);
    }
    
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
};


  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} handleChange={handleChange} titleError={titleError} industryError={industryError} />;
      case 2:
        return <Step2 formData={formData} handleChange={handleChange} />;
      case 3:
        return <Step3 formData={formData} />;
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    let isValid = true;

  // Validate jobTitle
  if (!formData.jobTitle) {
    setTitleError("You need to specify a job title");
    setStep(1); 
    isValid = false;
  } else {
    setTitleError("");
  }

  // Validate industry
  if (!formData.industry) {
    setIndustryError("You need to specify an industry");
    setStep(1); 
    isValid = false;
  } else {
    setIndustryError("");
  }

     // If validation fails, return early
     if (!isValid) return;
     setStep(3);

   
      const formDataObj = {
        jobTitle: formData.jobTitle,
        industry: formData.industry,
        tone: formData.tone,
        location: formData.location,
        workHours: formData.workHours,
        format: formData.format
    };

    //to backend
     try {
      const response = await   
      axios.post( 'http://127.0.0.1/description' , formDataObj );
      setDescription(response.data);

      } catch (error) {
      console.error(error);
      }
      setLoaded(true);

  }
  

  return (
    <div className={` flex flex-col  ${loaded ? " ": "md:flex-row"}  items-center justify-start md:justify-center gap-4 md:gap-14 px-7 py-10 md:py-16 flex-1 self-stretch`} >
     { !loaded ? 
      <div className=' flex flex-col md:w-[45%]'>
       <p className=' text-center font-extrabold text-Primary text-[24px] lg:text-[56px]'>
          <span className=' pr-1 text-Secondary-500'>
          Effortlessly 
          </span>
          Create Customized Job Descriptions
       </p>
       <p className='text-center text-[14px] lg:text-[20px] font-normal text-Neutrals-800'>
       Streamline your hiring process with our AI-driven job description generator. Just enter a few details, and get customized job descriptions that fit your needs
       </p>
     </div>
     :
          <div className=' flex flex-col '>
            <p className=' text-center font-extrabold text-Secondary-500 text-[32px] md:text-[86px]'>
            Here is your job description
            </p>
          </div>}




     { !loaded && 
     <form 
     className=' bg-white rounded-lg self-stretch md:self-auto shadow p-5 md:px-14 md:rounded-2xl md:py-7 flex flex-col md:max-h-min md:w-[40%]'
     >
      <div className=' flex justify-center gap-2 p-2 items-center'>
        <button 
        onClick={(e) => {
          e.preventDefault();
          setStep(1);
        }}
        >
        <Progress1 isIn={step == 1}/>
        </button>
        <Line/>
        <button 
        onClick={(e) => {
          e.preventDefault();
          setStep(2);
        }}
        >
        <Progress2 isIn={step == 2}/>
        </button>
        <Line/>
        <button
        onClick={(e) => {
          e.preventDefault();
          setStep(2);
        }}
        >
        <Progress3 isIn={step == 3}/>
        </button>
      </div>
      <div className=' flex flex-col justify-between flex-1 gap-3'>
          {renderStep()}
          <div className='self-stretch flex justify-between'>
            {step === 2 && 
              <ButtonC handler={prevStep} cont={"Back"} isBack={true} />
            }
            <p></p>
            {step === 1 &&
             <ButtonC handler={nextStep} cont={"Next"} isNext={true}/>
             }
            {step === 2 && 
             <ButtonC handler={handleSubmit} cont={"Generate"} isGenerate={true} />
            }
            
          </div> 
      </div>
     
     </form> }
      {
        loaded && <Result description={description} jobTitle={formData.jobTitle} industry={formData.industry} tone={formData.tone} workHours={formData.workHours} location={formData.location} format={formData.format}/>
      }
    </div>
  )
}

export default Hero
