import React, { useState } from "react";
import PersonalDetails from "./form/PersonalDetails";
import SummaryDetails from "./form/SummaryDetails";
import Experience from "./form/Experience";
import EducationalDetails from "./form/EducationalDetails";
import Skills from "./form/Skills";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

function FormSection() {
  
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enabledNext, setEnabledNext] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Button variant="outline" size="sm" className="flex gap-2">
          <LayoutGrid></LayoutGrid> Theme
        </Button>
        <div className="flex gap-2">
         { activeFormIndex > 1 && 
            <Button 
               size="sm" 
               onClick={() => setActiveFormIndex(activeFormIndex-1)}
            >
              <ArrowLeft></ArrowLeft>
            </Button>
         }

          <Button 
              className="flex gap-2" 
              size="sm" 
              onClick={() => setActiveFormIndex(activeFormIndex+1)}
              disabled={!enabledNext}
            >
              Next <ArrowRight></ArrowRight>
          </Button>
        </div>
      </div>


      
      {
        activeFormIndex == 1 ? <PersonalDetails enabledNext={(v) => setEnabledNext(v)}></PersonalDetails> 
        : activeFormIndex == 2 ?  <SummaryDetails enabledNext={(v) => setEnabledNext(v)}></SummaryDetails>   
        : activeFormIndex == 3 ? <Experience enabledNext={(v) => setEnabledNext(v)}></Experience>
        : activeFormIndex == 4 ? <EducationalDetails enabledNext={(v) => setEnabledNext(v)}></EducationalDetails>
        : activeFormIndex == 5 ? <Skills enabledNext={(v) => setEnabledNext(v)}></Skills>
        : null
      }
      

      

     

     
    </div>
  );
}

export default FormSection;
