import React from 'react'

function EducationDetails({resumeInfo}) {
  return (
    <div className="my-6">
    <h2
      className="text-center font-bold text-sm mb-2"
      style={{
        color: resumeInfo?.themeColor,
      }}
    >
      Education 
    </h2>
     <hr 
      style={{
          borderColor: resumeInfo?.themeColor
      }}
     />
     {
        resumeInfo?.education.map((educationItem, idx) => (
            <div key={idx} className='my-5'>
                <h2 className='text-sm font-bold'>{
                    educationItem.universityName
                }</h2>
                <h2 className='text-xs flex justify-between'>{educationItem?.degree} in {educationItem?.major}
                 <span>{educationItem?.startDate} - {educationItem?.endDate}</span>
                </h2>
                <p className='text-xs my-2'>
                    {educationItem?.description}
                </p>
            </div>
        ))
     }
  </div>
  )
}

export default EducationDetails