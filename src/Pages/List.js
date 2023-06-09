import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const List = () => {
    const [data,setData] = useState([])
    useEffect(() =>{
        fetchItems();
    },[])

    const fetchItems = async () => {
        try{
            const response = await axios.get('https://crudcrud.com/api/acc9d02683f74e4c9842cde02d302cde/register')
            setData(response.data)
            console.log(response.data)
        } catch (err) {
            console.error(err)
        }
    };
    console.log(data)
    const deleteAction = async(item) =>{
        const remainingItems = data.filter((Item) => item.username != Item.username)
        setData(remainingItems)
        try {
            await axios.delete(`https://crudcrud.com/api/acc9d02683f74e4c9842cde02d302cde/register/${item._id}`).then((res) => console.log(res))
            fetchItems();
        } catch (err) {
            console.error(err)
        }

    }
  return (
    <React.Fragment>
        <main className='container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Qualification</th>
                        <th>Gender</th>
                        <th>Skills</th>
                        <th>Delete Action</th>
                        <th>Edit Action</th>
                    </tr>
                </thead>
                <tbody className='text-secondary'>
                    {
                        data && data.map((item,index) => <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.username}</td>
                            <td>{item.qualification}</td>
                            <td>{item.gender}</td>
                            <td>{item.skills.join(', ')}</td>
                            <td><button type='button' className='btn btn-danger' onClick={() => deleteAction(item)}>Delete</button></td>
                            <td><button type='button' className='btn btn-danger'><Link className='nav-link' to={`/edituser/${item._id}`}>EditUser</Link></button></td>
                        </tr> )
                    }
                </tbody>
            </table>
        </main>
    </React.Fragment>
  )
}

export default List