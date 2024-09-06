import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import GlobalApi from "../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router";

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const {user} = useUser();
  const navigate = useNavigate();

  const onCreate = async () => {
    setLoading(true);
    const uuid = uuidv4();
    // console.log(resumeTitle, uuid);
    const data = {
        data: {
            title: resumeTitle,
            resumeId: uuid,
            userEmail: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName
        }
    }

    GlobalApi.createNewResume(data)
    .then((res) => {
      console.log(res.data.data.documentId);
      setLoading(false);
      navigate('/dashboard/resume/'+res.data.data.documentId+'/edit');
    })
    .catch((err) => {
        console.log(err);
        
    })
    .finally(() => {
      setOpenDialog(false);
      setLoading(false);
      setResumeTitle("");
    })
    
  };
  return (
    <div>
      <div
        onClick={() => setOpenDialog(true)}
        className="p-14 py-24 border-2 border-gray-600 items-center flex justify-center hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed bg-secondary rounded-lg h-[280px]"
      >
        <PlusSquare></PlusSquare>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add a title for your new resume</p>
              <Input
                className="my-2"
                placeholder="Ex. Software Engineer"
                onChange={(e) => setResumeTitle(e.target.value)}
                //    value={resumeTitle}
              ></Input>
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button onClick={() => setOpenDialog(false)} variant="ghost">
                Cancel
              </Button>
              <Button disabled={!resumeTitle || loading} onClick={() => onCreate()}>
                {
                    loading ? (<Loader2 className="animate-spin"></Loader2>) : ('Create')
                }
                
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
