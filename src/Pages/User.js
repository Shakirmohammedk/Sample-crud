import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
    const initialState = {username:'',qualification:'',gender:'',skills:[]}
    const [user, setUser] = useState(initialState);
    const [error, setErrors] =useState({})

    const handleInput = (event) =>{
        if(event.target.name==='skills'){
            const itemExits = user.skills.indexOf(event.target.value);
            if(itemExits > -1){
                user.skills.splice(itemExits,1);
            }
            else{
                user.skills.push(event.target.value);
            }
            setUser({
                ...user,
                skills: user.skills
            })
        }
        else{
            setUser({
                ...user,
                [event.target.name]:event.target.value
            })
        }
    }
   
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(validateForm()){
            console.log(user, 'user')
            
        }
    }

    const validateForm = () =>{
        let isValid = true;
        const errors = {}
        // username validation
        if(user.username === ''){
            errors.username = 'Enter Username'
            isValid = false
        }
        // Qualification validation
        if(user.qualification === ''){
            errors.qualification = 'Please Select Your Qualification'
            isValid = false
        }
        // gender validation
        if(user.gender === ''){
            errors.gender = 'Please Select Gender'
            isValid = false
        }
        // skill validation
        if(user.skills.length <= 0){
            errors.skills = 'Please Select atleast one skill.'
            isValid = false
        }
        setErrors(errors)
        return isValid
    }

  return (
    <div>
        <main className='container bg-info-subtle rounded-2 p-3' style={{width:'60%'}}>
            <form onSubmit={handleSubmit}>
                <div className='form-group my-1'>
                    <label>Name :</label>
                    <input type='text' className='form-control' name='username' placeholder='Enter User Name' onChange={handleInput} />
                    {error.username ? <small className='text-danger'>{error.username}</small> :null}
                </div>
                <div className='form-group my-1'>
                    <label>Qualification : </label>
                    <select name='qualification' onChange={handleInput} className='form-select' >
                        <option value='--Select--'>Select</option>
                        <option value='B.Tech'>B.Tech</option>
                        <option value='BSc'>BSc</option>
                        <option value='M.Tech'>M.Tech</option>
                        <option value='B.Com'>B.Com</option>
                    </select>
                    {error.qualification ? <small className='text-danger'>{error.qualification}</small> :null}
                </div>
                <div className='form-group my-1'>
                    <label>Gender :</label>
                    <label><input type='radio' name='gender' className='form-check-input mx-1'  value='Male' onChange={handleInput} />Male</label>
                    <label><input type='radio' name='gender' className='form-check-input mx-1' value='Female' onChange={handleInput} />Female</label>
                    {error.gender ? <small className='text-danger'>{error.gender}</small> :null}
                </div>
                <div className='form-group my-1'>
                    <label>Skills : </label>
                    <label><input type='checkbox' className='form-check-input mx-1' name='skills' value='HTML' onChange={handleInput}/>HTML</label>
                    <label><input type='checkbox' className='form-check-input mx-1' name='skills' value='CSS' onChange={handleInput}/>CSS</label>
                    <label><input type='checkbox' className='form-check-input mx-1' name='skills' value='React JS' onChange={handleInput} />React JS</label>
                    <label><input type='checkbox' className='form-check-input mx-1' name='skills' value='Angular' onChange={handleInput} />Angular</label>
                    {error.skills ? <small className='text-danger'>{error.skills}</small> :null}
                </div>
                <input type='submit' className='btn btn-success' value='Submit' />
            </form>
            <Link className='nav-link' to='/edituser'>EditUser</Link>
        </main>
    </div>
  )
}

export default User