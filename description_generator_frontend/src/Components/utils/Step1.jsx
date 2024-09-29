import React from 'react'

function Step1({formData , handleChange , titleError , industryError}) {
  return (
    <div className='flex flex-col justify-center  gap-4 md:gap-6 md:pt-5'>
        <div className=' flex flex-col'>
            <label htmlFor="jobTitle" className=' text-[12px] lg:text-[24px] font-semibold text-Primary'>Job Title <span className=' px-1 text-red-600'>*</span></label>
            <input
              required
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange} 
              placeholder='Type here'
              className=' bg-Primary-100 rounded-md p-2 md:p-3 text-[12px] lg:text-[24px] outline-none'
            />
            <p className=' text-red-600'>{titleError}</p>
         </div>
         <div className=' flex flex-col'>
            <label htmlFor="industry" className=' text-[12px] lg:text-[24px] font-semibold text-Primary'>Industry <span className=' px-1 text-red-600'>*</span></label>
            <input
              required
              type="text"
              id="industry"
              name='industry'
              value={formData.industry}
              onChange={handleChange}
              placeholder='Type here'
              className=' bg-Primary-100 rounded-md p-2 md:p-3  text-[12px] lg:text-[24px] outline-none'
            />
            <p className=' text-red-600'>{industryError}</p>
         </div>
         <div className=' flex flex-col'>
            <label htmlFor="tone" className=' text-[12px] lg:text-[24px] font-semibold text-Primary'>Tone</label>
            <select 
            id="tone" 
            name="tone" 
            onChange={handleChange}
            className='bg-Primary-100 rounded-md p-2 md:p-3  text-[12px] lg:text-[24px] outline-none'
            defaultValue={"default"}
            >
              <option value="default" >Don't specify</option>
              <option value="professional">Professional </option>
              <option value="friendly">Friendly</option>
              <option value="motivational">Motivational</option>
              <option value="straightforward">Straightforward</option>
              <option value="urgent">Urgent</option>
            </select>
         </div>
   </div>
  )
}

export default Step1
