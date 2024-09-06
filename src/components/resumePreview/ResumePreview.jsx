import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext } from 'react'
import PersonalDetails from './preview/PersonalDetails';
import SummaryDetails from './preview/SummaryDetails';
import ProfessionalExpDetails from './preview/ProfessionalExpDetails';
import EducationDetails from './preview/EducationDetails';

function ResumePreview() {

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
     style={{
        borderColor: resumeInfo?.themeColor
     }}
    >
        {/* Personal Detail */}
         <PersonalDetails resumeInfo={resumeInfo}></PersonalDetails>

        {/* Summary  */}
         <SummaryDetails resumeInfo={resumeInfo}></SummaryDetails>
        
        {/* Professional Experience  */}
         <ProfessionalExpDetails resumeInfo={resumeInfo}></ProfessionalExpDetails>
        
        {/* Education  */}
        <EducationDetails resumeInfo={resumeInfo}></EducationDetails>
        
        {/* Skills  */}
    </div>
  )
}

export default ResumePreview