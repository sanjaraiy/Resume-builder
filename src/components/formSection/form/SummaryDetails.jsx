import { Button } from "@/components/ui/button";
import React, { useContext, useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useParams } from "react-router";
import GlobalApi from "../../../../service/GlobalApi";
import { toast } from "sonner";
import { Brain, Loader2Icon } from "lucide-react";

const prompt = 'We are looking for a highly skilled Full Stack Developer responsible for designing, developing, and maintaining web applications, both on the client-side (front-end) and server-side (back-end). As a full-stack developer, you will collaborate with cross-functional teams to define, design, and ship new features.'
function SummaryDetails({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summary, setSummary] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (summary) {
      setResumeInfo({
        ...resumeInfo,
        summary: summary,
      });
    }
  }, [summary]);

  const onSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const data = {
      summary: summary,
    };

    GlobalApi.updateResumes(params?.resumeId, data)
      .then((res) => {
        console.log(res);
        toast("Details updated..!!");
        enabledNext(true); // Move enabledNext to the success block
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update details.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="p-5 shadow-lg border-t-primary border-t-4 rounded-lg mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add Summary for your job title</p>

        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label htmlFor="summary">Add Summary</label>
            <Button
              variant="outline"
              size="sm"
              className="border-primary flex gap-2 text-primary"
              type="button"  // Adding type="button" to prevent form submission when clicking this button
            >
              <Brain className="w-4 h-4"></Brain>
              Generate From AI
            </Button>
          </div>
          <Textarea
            className="mt-5"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />

          <div className="mt-3 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? (
                <Loader2Icon className="animate-spin"></Loader2Icon>
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SummaryDetails;

