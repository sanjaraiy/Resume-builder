import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'

function PersonalDetails({enabledNext}) {
    
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    
    const handleInputChange = (e) => {
        // console.log(e.target);
        enabledNext(false);
         const {name, value} = e.target;
        //  console.log({name, value});
         
         setResumeInfo({
            ...resumeInfo,
            [name]:value
         })
    }
     
    // console.log("info:", resumeInfo)
    const onSave = (e) => {
       e.preventDefault();
       enabledNext(true);
    }

  return (
    <div className='p-5 shadow-lg border-t-primary border-t-4 rounded-lg mt-10'>
       <h2 className='font-bold text-lg'>Personal Detail</h2>
       <p>Get Started with the basic information</p>

       <form onSubmit={onSave}>
            <div className='grid grid-cols-2 mt-5 gap-3'>
                <div>
                    <label className='text-sm'>First Name</label>
                    <Input required name="firstName" onChange={handleInputChange}></Input>
                </div>
                <div>
                    <label className='text-sm'>Last Name</label>
                    <Input required name="lastName" onChange={handleInputChange}></Input>
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Job Title</label>
                    <Input required name="jobTitle" onChange={handleInputChange}></Input>
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Address</label>
                    <Input required name="address" onChange={handleInputChange}></Input>
                </div>
                <div>
                    <label className='text-sm'>Phone</label>
                    <Input required name="phone" onChange={handleInputChange}></Input>
                </div>
                <div>
                    <label className='text-sm'>Email</label>
                    <Input required name="email" onChange={handleInputChange}></Input>
                </div>
            </div>
            <div className='mt-3 flex justify-end'>
                <Button type="submit">Save</Button>
            </div>
       </form>
    </div>
  )
}

export default PersonalDetails