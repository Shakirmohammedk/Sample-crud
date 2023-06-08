import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';

const EditUser = () => {
  const location = useLocation();
  const {id} = useParams();
  const initialState = {username:'',qualification:'',gender:'',skills:[]}
  const [editUser,setEditUser] = useState(initialState);
  // console.log(id)
  useEffect(() =>{
    axios.get('https://crudcrud.com/api/22372a98ccad47f69a6ae63369391a28/register/' +id).then((res)=>{
      setEditUser({
        ...editUser,
        username:res.data.username,
        qualification:res.data.qualification,
        gender:res.data.gender,
        skills:res.data.skills,
      })
    })
    .catch((err) => console.error(err))
  },[])
  console.log(editUser)
  const handleEdit =(event) =>{
    
    if(event.target.name==='skills'){
      const itemExits = editUser.skills.indexOf(event.target.value);
      if(itemExits > -1){
          editUser.skills.splice(itemExits,1);
      }
      else{
          editUser.skills.push(event.target.value);
      }
      setEditUser({
          ...editUser,
          skills: editUser.skills
      })
    }
    else{
      setEditUser({
          ...editUser,
          [event.target.name]:event.target.value
      })
    }
  }
  const navigate = useNavigate()
  const submitEdit = (event) =>{
    event.preventDefault();
    axios.put('https://crudcrud.com/api/22372a98ccad47f69a6ae63369391a28/register/'+id,editUser).then((res) =>{
      navigate('/list')
    })
  }
  return (
    <div>
      <form onSubmit={submitEdit}>
        <div className="form-group my-1">
          <label>Name :</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter User Name"
          
            value={editUser.username}
            onChange={handleEdit}
          />
          
        </div>
        <div className="form-group my-1">
          <label>Qualification : </label>
          <select
            name="qualification"
          
          value={editUser.qualification}
            className="form-select"
            onChange={handleEdit}
          >
            <option value="--Select--">Select</option>
            <option value="B.Tech">B.Tech</option>
            <option value="BSc">BSc</option>
            <option value="M.Tech">M.Tech</option>
            <option value="B.Com">B.Com</option>
          </select>
         
        </div>
        <div className="form-group my-1">
          <label>Gender :</label>
          <label>
            <input
              type="radio"
              name="gender"
              className="form-check-input mx-1"
              value="Male"
              onChange={handleEdit}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              className="form-check-input mx-1"
              value="Female"
             onChange={handleEdit}
            />
            Female
          </label>
          
        </div>
        <div className="form-group my-1">
          <label>Skills : </label>
          <label>
            <input
              type="checkbox"
              name="skills"
              className="form-check-input mx-1"
              defaultValue="HTML"
             onChange={handleEdit}
            />
            HTML
          </label>
          <label>
            <input
              type="checkbox"
              name="skills"
              className="form-check-input mx-1"
              defaultValue='CSS'
              onChange={handleEdit}
            />
            CSS
          </label>
          <label>
            <input
              type="checkbox"
              name="skills"
              className="form-check-input mx-1"
              defaultValue='React JS'
              onChange={handleEdit}
            />
            React JS
          </label>
          <label>
            <input
              type="checkbox"
              className="form-check-input mx-1"
              name="skills"
              defaultValue="Angular"
              onChange={handleEdit}
            />
            Angular
          </label>
          
        </div>
        <input type="submit" className="btn btn-success" value="Submit" />
      </form>
    </div>
  );
};

export default EditUser;
