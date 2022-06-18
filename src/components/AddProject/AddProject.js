// import React from 'react';
// import './AddProject.css'
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
// import { useState } from 'react';
// const AddProject = () => {
//     let End;
//     const Check=()=>{
//         const Start= document.getElementById('StartDate')?.value;
//         console.log(Start);
//         End=Start
//     }
   
//     const [selectedDate,setselectedDate]= useState(null)
//     const [minDate,setminDate] = useState('')
//     return (
//         <div>
//           <DatePicker
//            id='StartDate'
          
//             selected={selectedDate} onChange={date =>setselectedDate(date)}
//            dateFormat='dd/MM/yyyy'
//            maxDate={new Date()}
//            showYearDropdown
//            scrollableYearDropdown></DatePicker>
           
//            <DatePicker
//            id='EndDate'
          
//             selected={minDate} onChange={date =>setminDate(date)}
//            dateFormat='dd/mm/yyyy'
//            minDate={new Date()}
//            showYearDropdown
//            scrollableYearDropdown></DatePicker>
//            <button onClick={Check}>Click</button>
//         </div>
//     );
// };

// export default AddProject;
import React from 'react';
import '../nayeam/custom-form.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
const AddProject = () => {
    const [user] = useAuthState(auth);
    const GetInfo=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const category= e.target.category.value;
        const startDate= e.target.startDate.value;
        const endDate=e.target.endDate.value;
        const notes = e.target.notes.value;
        const data={name,description,category,startDate,endDate,notes}
        console.log(data);
        const url ='http://localhost:5000/projects'
        fetch(url, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
        toast.success('Your projecthave been saved');
        e.target.reset();
    }
    return (
        <div>
            <h1 className='my-3'>Add New Project</h1>
        <div className='form '>
            
        <form onSubmit={GetInfo}>

            <div class="custom-margin-bottom">
                <input required type="text"
                    name='name' placeholder='Project Name' class="form-control3" />
            </div>

            <div class="custom-margin-bottom">
                <input required type="text"
                    name='description' placeholder='Description' class="form-control3" />
            </div>

            <div class="custom-margin-bottom">
                <input required type="text"
                    name='category' placeholder='Category' class="form-control3" />
            </div>

            <div class="custom-margin-bottom">
                <input required type="date"
                    name='startDate' placeholder='Start Date (dd/mm/yyyy)' class="form-control3" />
            </div>

            <div class="custom-margin-bottom">
                <input required type="date"
                    name='endDate' placeholder='End Date (dd/mm/yyyy)' class="form-control3" />
            </div>

            <div class="custom-margin-bottom">
                <textarea required type="text"
                    name='notes' placeholder='Notes' class="form-control3" />
            </div>

            <button className='submit-button' type='submit'>ADD PROJECT</button>
        </form>
    </div>
    </div>
    );
};

export default AddProject;