import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { Loader2Icon } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import GlobalApi from '../../../../service/GlobalApi';
import { toast } from "sonner"

function PersonalDetails({enabledNext}) {
    
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const params = useParams();
    const [formData, setFormData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
     console.log(params)
    }, [])

    const handleInputChange = (e) => {
        // console.log(e.target);
        enabledNext(false);
         const {name, value} = e.target;
        //  console.log({name, value});
         setFormData({
            ...formData,
            [name]:value
         })
         setResumeInfo({
            ...resumeInfo,
            [name]:value
         })
    }
     
    // console.log("info:", resumeInfo)
    const onSave = (e) => {
       e.preventDefault();
       setLoading(true);
       const data={
        data:formData
       }
       GlobalApi.updateResumes(params?.resumeId, data)
       .then((res) => {
         console.log(res.data);
         toast('Details updated..!!')
       })
       .catch((err) => {
        console.log(err);
        
       })
       .finally(()=>{
        setLoading(false);
        enabledNext(true);
       })
       
      
    }

  return (
    <div className='p-5 shadow-lg border-t-primary border-t-4 rounded-lg mt-10'>
       <h2 className='font-bold text-lg'>Personal Detail</h2>
       <p>Get Started with the basic information</p>

       <form onSubmit={onSave}>
            <div className='grid grid-cols-2 mt-5 gap-3'>
                <div>
                    <label className='text-sm'>First Name</label>
                    <Input name="firstName"  required defaultValue={resumeInfo?.firstName} onChange={handleInputChange}></Input>
                </div>
                <div>
                    <label className='text-sm'>Last Name</label>
                    <Input required name="lastName" defaultValue={resumeInfo?.lastName} onChange={handleInputChange}></Input>
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Job Title</label>
                    <Input required name="jobTitle" defaultValue={resumeInfo?.jobTitle} onChange={handleInputChange}></Input>
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Address</label>
                    <Input required name="address" defaultValue={resumeInfo?.address} onChange={handleInputChange}></Input>
                </div>
                <div>
                    <label className='text-sm'>Phone</label>
                    <Input required name="phone" defaultValue={resumeInfo?.phone} onChange={handleInputChange}></Input>
                </div>
                <div>
                    <label className='text-sm'>Email</label>
                    <Input required name="email" defaultValue={resumeInfo?.email} onChange={handleInputChange}></Input>
                </div>
            </div>
            <div className='mt-3 flex justify-end'>
                <Button type="submit" disabled={loading}> {loading ? <Loader2Icon className='animate-spin'></Loader2Icon> : 'Save'}</Button>
            </div>
       </form>
    </div>
  )
}

export default PersonalDetails