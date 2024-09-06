import React from 'react'

function SummaryDetails({resumeInfo}) {

  return (
    <div>
       <p className='text-xs'>
        {resumeInfo?.summary}
       </p> 
    </div>
  )
}

export default SummaryDetails