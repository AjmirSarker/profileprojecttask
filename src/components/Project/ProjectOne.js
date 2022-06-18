import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './ProjectOne.css'
import { useParams } from 'react-router-dom';
const ProjectOne = () => {
    const {id}=useParams()
    const[project,setProject]=useState({})
  useEffect(()=>{
    fetch(`http://localhost:5000/projects/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        setProject(data)
    })

  },[id])
    return (
<div className='bg pt-2'>
<h1 className='py-2 fw-bolder'>Single Project Details Page</h1>
<div className='container   height w-100 d-flex align-items-center justify-content-center '>
    
 
 <div class="card bg-dark text-white  p-2">


 <h2 class="card-title">{project?.name}</h2>
 <p class="card-text"><span className='fw-bolder'>Description</span> : {project?.description}</p>
 <p class="card-text"><span className='fw-bolder'>Category</span> : {project?.category}</p>
 <p class="card-text"><span className='fw-bolder'>Start Date </span>: {project?.startDate}</p>
 <p class="card-text"><span className='fw-bolder'>End Date</span> : {project?.endDate}</p>
 <p class="card-text"><span className='fw-bolder'>Notes</span> : {project?.notes}</p>


</div>

</div>
</div>
    );
};

export default ProjectOne;