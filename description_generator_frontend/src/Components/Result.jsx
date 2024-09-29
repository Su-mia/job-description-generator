import React, { useState , useEffect } from 'react'
import Copy from '../assets/Icons/Copy';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import translation from "../assets/Icons/translate.png"

import axios from 'axios';


function Result({description , jobTitle , industry , tone , location , workHours , format }) {

    const [ copied , setCopied ] = useState(false);
    const [ displayed , setDisplayed ] = useState(description);
    const [ formated , setFormated ] = useState(description);
    const [ formating , setFormating ] = useState(false);
    const [ translating , setTranslating ] = useState(false);
    const [ translated , setTranslated ] = useState("")

    const [ lang , setLang ] = useState("eng")

    
    const handleCopy = () => {
        const textToCopy = displayed ;
    
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
              }, 1000);
          })
          .catch(() => {
            setCopied(false);
          });
      };


      const handleReformat = async (description_, format, jobTitle, industry, tone , location , workHours) => {
        try {
            setFormating(true);
            const data = {
                description :description_,
                format,
                jobTitle,
                industry,
                tone,
                location , 
                workHours
            };
            const response = await axios.post('http://127.0.0.1/reformat', data);
            setFormated(response.data);
          
        } catch (error) {
            console.error(error);
        } finally {
            setFormating(false);
        }
    };

    const handleTranslate = async (to_translate, translate_to) => {
        try {
            setLang(translate_to);
            setTranslating(true); 
            const data = { to_translate, translate_to };
            const response = await axios.post('http://127.0.0.1/translate', data);
            setTranslated(response.data);  
            setDisplayed(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setTranslating(false);
        }
    };

    useEffect(() => {
        if (translated && lang !== "eng") {
            handleTranslate(formated, lang);
        } else {
            setDisplayed(formated); // Display the formatted text if no translation is needed
        }
    }, [formated, lang, translated]);

  return (
    

     <div className='self-stretch md:self-auto md:w-[60%]  flex flex-col gap-6 items-end '>
        <div
        className=' bg-white rounded-lg self-stretch md:gap-3 shadow p-5 md:px-14 md:rounded-2xl md:py-7 flex flex-col'
        >
            <div className='flex items-center justify-between py-1'>
                <p className=' font-semibold tetx-[20px] md:text-[36px] gradient-text '>
                Description
                </p>
                <div className=' flex justify-center items-center gap-2 md:gap-4'>
                   <button 
                   disabled={formating || copied || translating } 
                   className='bg-Primary-100 rounded-md'>
                    <select 
                        name="format"
                        onChange={(event) => {
                            const selectedFormat = event.target.value;
                            handleReformat(formated, selectedFormat, jobTitle, industry, tone, location , workHours , format);
                          }}
                        className=' px-2 md:px-5 py-1 md:py-2 text-[12px] lg:text-[24px] outline-none  gradient-text'
                        defaultValue={"default"}
                        >
                        <option value="default" disabled>Change format</option>
                        <option value="Detailed">Detailed</option>
                        <option value="Condensed">Condensed</option>
                        <option value="Bullet-Point">Bullet-Point</option>
                        <option value="Functional">Functional</option>
                        <option value="Tabular">Tabular</option>
                        </select>
                   </button>
                   <button
                   onClick={handleCopy}
                    className=' rounded-md border-[2px] border-blue-900/65 text-white  flex justify-center items-center gap-2 px-[6px] py-1 md:py-[6px]'>                      
                        <p className=' text-[12px] lg:text-[24px] gradient-text'>
                         { copied ? "Copied !" :  "Copy"}
                        </p>
                        { !copied && <Copy/> }
                    </button>

                </div>
            </div>
            <div
            dir= { lang=="ar" ? "rtl" : "ltr" }
            className=' max-h-[500px] md:max-h-[450px] overflow-scroll border border-Neutrals-800/50 rounded-md px-2 md:px-5 py-3 md:p-4 text-[12px] lg:text-[24px] leading-[19.5px] md:leading-8'
            >
           {  formating ? 
              <p className=' text-[12px] md:text-[24px] text-Primary'>Reformating...</p>

            : translating ?
             <p className=' text-[12px] md:text-[24px] text-Primary'>Translating...</p>
            :
              <ReactMarkdown remarkPlugins={[remarkGfm]} breaks>
                { displayed } 
              </ReactMarkdown>        
           }
            
            </div>

        </div>

        <div className='flex justify-center items-start gap-4'>
            <button 
            className='gradient-3 text-[16px] md:text-[24px] text-white flex justify-center items-center gap-2 p-2 md:px-4 md:py-2 max-w-fit rounded-md md:rounded-xl'
            onClick={() => window.location.reload()}
            >
            Create a new job description
            </button>

            <button 
                   
                   className='bg-Primary-100 rounded-md flex justify-center items-center px-4 py-2 '>
                    <select 
                        name="translate_to"
                        onChange={(event) => {
                            const translate_to = event.target.value;
                            handleTranslate(formated, translate_to);
                          }}
                        className=' text-[16px] lg:text-[24px] outline-none  gradient-text'
                        defaultValue={"default"}
                        >
                        <option value="default" disabled >Translate</option>
                        <option value="ar">Arabic</option>
                        <option value="fr">French</option>
                        <option value="eng">English</option>
                    </select>
                    <img className=' ml-1' src={translation} alt="" />

            </button>
        </div>
     </div>
     
  )
}

export default Result