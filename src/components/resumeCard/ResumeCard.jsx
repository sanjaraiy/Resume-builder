import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ResumeCard({resume}) {
  return (
    <Link to ={'/dashboard/resume/'+resume.documentId+"/edit"}>
     <div className='p-14 bg-secondary border-2 border-primary flex items-center justify-center h-[280px] rounded-lg  hover:scale-105 transition-all hover:shodow-md  shadow-primary '>
        <Notebook></Notebook>
     </div>
     <h2 className='text-center my-1'>{resume.title}</h2>
    </Link>
  )
}

export default ResumeCard