import React from "react";

function ProfessionalExpDetails({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Professinal Experience
      </h2>
       <hr 
        style={{
            borderColor: resumeInfo?.themeColor
        }}
       />
       {
        resumeInfo?.experience.map((experience, idx) => (
            <div key={idx} className="my-3">
                <h2 className="text-sm font-bold">{experience?.title}</h2>
                <h2 className=" text-xs flex justify-between">
                    {experience?.companyName}, 
                    {experience?.city}, 
                    {experience?.state}
                    <span>
                        {experience?.startDate} {experience?.currentlyWorking ? 'Present' : experience?.endDate}
                    </span>
                </h2>
                <p className="text-xs my-2">
                    {experience?.workSummary}
                </p>
            </div>
        ))
       }
    </div>
  );
}

export default ProfessionalExpDetails;
