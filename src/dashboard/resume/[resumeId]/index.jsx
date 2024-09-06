import FormSection from "@/components/formSection/FormSection";
import ResumePreview from "@/components/resumePreview/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import dummy from "@/data/Dummy";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function EditResume() {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
     setResumeInfo(dummy);
  },[])

//   useEffect(() => {
//     console.log(params.resumeId);
//   }, []);

  return (
    <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* Form Section */}
        <FormSection></FormSection>

        {/* Preview Section */}
        <ResumePreview></ResumePreview>
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
