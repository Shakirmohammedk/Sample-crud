import React, { useEffect, useState } from 'react'
import axios from 'axios';
const List = () => {
    const [data,setData] = useState([])
    useEffect(() =>{
        fetchItems();
    },[])

    const fetchItems = async () => {
        try{
            const response = await axios.get('https://crudcrud.com/api/ffd18f34cad2483480cfa6ceaabf282b/register')
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
            await axios.delete(`https://crudcrud.com/api/ffd18f34cad2483480cfa6ceaabf282b/register/${item._id}`).then((res) => console.log(res))
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
                            <td><button type='button' className='btn btn-danger' onClick={() => deleteAction(item)}>Delete</button></td>
                        </tr> )
                    }
                </tbody>
            </table>
        </main>
    </React.Fragment>
  )
}

export default List