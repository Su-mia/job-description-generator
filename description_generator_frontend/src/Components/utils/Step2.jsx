import React from 'react'

function Step2({formData , handleChange}) {
  return (
    <div className='flex flex-col justify-center gap-4 md:gap-6 md:pt-5'>
       <div className=' flex flex-col'>
            <label htmlFor="location" className=' text-[12px] lg:text-[24px] font-semibold text-Primary'>Location</label>
            <select 
              id="location" 
              name="location" 
              onChange={handleChange}
              className='bg-Primary-100 rounded-md p-2 md:p-3  text-[12px] lg:text-[24px] outline-none'
              defaultValue={"default"}
              >
              <option value="remote">Remote</option>
              <option value="onsite">Onsite</option>
              <option value="default">Don't specify</option>
            </select>
         </div>
         <div className=' flex flex-col'>
            <label htmlFor="workHours" className='  text-[12px] lg:text-[24px] font-semibold text-Primary'>Work Hours per week</label>
            <input
              type="number"
              id="workHours"
              name="workHours"
              placeholder='Type here'
              value={formData.workHours}
              onChange={handleChange}
              className=' bg-Primary-100 rounded-md p-2 md:p-3  text-[12px] lg:text-[24px] outline-none'
            />
         </div>
         <div className=' flex flex-col'>
            <label htmlFor="workHours" className=' text-[12px] lg:text-[24px] font-semibold text-Primary'>Output format</label>
            <select 
            id="format" 
            name="location" 
            onChange={handleChange}
            className='bg-Primary-100 rounded-md p-2 md:p-3  text-[12px] lg:text-[24px] outline-none'
            defaultValue={"default"}
            >
              <option value="default">Don't specify</option>
              <option value="Detailed">Detailed</option>
              <option value="Condensed">Condensed</option>
              <option value="Bullet-Point">Bullet-Point</option>
              <option value="Functional">Functional</option>
              <option value="Tabular">Tabular</option>
            </select>
         </div>
    </div>
  )
}

export default Step2
