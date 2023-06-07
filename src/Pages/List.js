import React, { useEffect, useState } from 'react'
import axios from 'axios';
const List = () => {
    const [data,setData] = useState([])
    useEffect(() =>{
        axios.get('https://sample1-c2acf-default-rtdb.firebaseio.com/register.json').then((response) => {
            let data = Object.values(response.data);
            let list =[];
            data.map(key => list.push(data))
            setData(data)
            console.log(response)
        })
    },[])
    console.log(data)
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='text-secondary'>
                    {
                        data && data.map((item,index) => <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.username}</td>
                            <td>{item.qualification}</td>
                            <td>{item.gender}</td>
                            <td>{item.skills}</td>
                            <td><button type='button' className='btn btn-danger'>Delete</button></td>
                            
                        </tr> )
                    }
                </tbody>
            </table>
        </main>
    </React.Fragment>
  )
}

export default List