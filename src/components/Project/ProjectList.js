import React from 'react';
import './ProjectList.css'
import {  useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import CustomLink from '../Shared/CustomLink';
const ProjectList = () => {
    const navigate = useNavigate();
    const[projects,setProjects]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/projects')
        .then((res)=>res.json())
        .then((data)=>{
            setProjects(data)
        })
    },[projects])
    const Deliver = (id) => {
        const url = `http://localhost:5000/projects/${id}`;
        fetch(url, {
          method: 'DELETE'
        })
          .then((res) => {
            console.log(res);
            return res.json();
          })
          .then((data) => {
            const newProjects= projects.filter((one)=>one._id !==id)
            setProjects(newProjects)
            toast.success('Project Deleted Successfully');
          });
      };
      const Details=(id)=>{
navigate(`/projectone/${id}`)
      }
    
    return (
        <div className='container table-responsive'>
          <h2 className='mt-4 fw-bolder'>Project list</h2>
        <table class="table OverflowX table-borderless table-info container border mt-5 shadow border-warning">
   <thead className="table-dark">
     <tr>
       <th scope="col">No</th>
       <th scope="col">Name</th>
       <th scope="col">Category</th>
       <th scope="col">Details</th>
       <th scope="col">Delete</th>
       
     </tr>
   </thead>
   <tbody>
     {projects.map((order, index) => (
         <tr>
         <th scope="row">{`${index + 1}`}</th>
         <td>{order?.name}</td>
         <td>{order?.category}</td>
         <td> 
         <button
                    onClick={() => {
                      Details(order?._id);
                    }}
                    className="btn btn-sm btn-success"
                  >
                    ✔
                  </button>
           </td>
                  <td> <button
                    onClick={() => {
                      Deliver(order?._id);
                    }}
                    className="btn btn-sm btn-danger"
                  >
                    ✔
                  </button></td>
       
       </tr>
     ))}
   </tbody>
 </table>

   </div>
    );
};

export default ProjectList;