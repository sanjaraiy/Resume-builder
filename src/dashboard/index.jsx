import AddResume from '@/components/addResume/AddResume'
import { useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../service/GlobalApi';
import ResumeCard from '@/components/resumeCard/ResumeCard';
import { GridLoader } from 'react-spinners';

function Dashboard() {

   const {user} = useUser();
   const [resumeList, setResumeList] = useState([]);
   const [loading, setLoading] = useState(false);
   useEffect(() => {
    user && getResumesList()
   }, [user])

  /**
   * 
   *  Used to get users resume list
   *   
   */


  const getResumesList = async () => {
    setLoading(true);
    GlobalApi.getUserResumes(user?.primaryEmailAddress?.emailAddress)
    .then((res) => {
       console.log(res.data);
       setResumeList(res.data.data);
    })
    .catch((err) => {
      console.log(err);
      
    }).finally(() => {
      setLoading(false);
    })
  }

  if(loading){
     return (
       <div className='flex justify-center mt-64 md:mt-56 items-center mx-auto'>
          <GridLoader color="#9f5bff"  />
       </div>
     )
  }

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
         <AddResume></AddResume>
       
        {
          resumeList.length>0 && resumeList.map((resume,idx) => (
             <ResumeCard key={idx} resume={resume}></ResumeCard>
          ))
         }
      
      </div>
    </div>
  )
}

export default Dashboard