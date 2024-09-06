import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../ui/button';
  
function AddResume() {
   
    const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
        <div  onClick={() => setOpenDialog(true)} className='p-14 py-24 border-2 border-gray-600 items-center flex justify-center hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed bg-secondary rounded-lg mt-10 h-[280px]'>
            <PlusSquare></PlusSquare>
        </div>
        <Dialog open={openDialog}>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Resume</DialogTitle>
      <DialogDescription>
      <p>Add a title for your new resume</p>
        <Input  className="my-2" placeholder="Ex. Software Engineer"></Input>
      </DialogDescription>
       <div className='flex justify-end gap-5'>
          <Button onClick={() => setOpenDialog(false)} variant="ghost">Cancel</Button>
          <Button>Create</Button>
       </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddResume