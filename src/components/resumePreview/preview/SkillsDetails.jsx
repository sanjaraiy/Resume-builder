import React from 'react'

function SkillsDetails({resumeInfo}) {
  return (
    <div className="my-6">
    <h2
      className="text-center font-bold text-sm mb-2"
      style={{
        color: resumeInfo?.themeColor,
      }}
    >
       Skills
    </h2>
     <hr 
      style={{
          borderColor: resumeInfo?.themeColor
      }}
     />

     <div className='grid grid-cols-2 gap-3 my-5'>
        {resumeInfo?.skills.map((skill, idx) => (
            <div key={idx} className='flex items-center justify-between '>
                <h2 className='text-xs'>{skill?.name}</h2>
                <div className='h-2 bg-gray-200 w-[120px]'>
                <div className='h-2'
                style={{
                    backgroundColor: resumeInfo?.themeColor,
                    width: skill?.rating+'%'
                }}>

                </div>

                </div>
            </div>
        ))}
     </div>
    
  </div>
  )
}

export default SkillsDetails