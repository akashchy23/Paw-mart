import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';

const Myservices = () => {
    const { user } = use(AuthContext)
    const [myServices, setMyServices] = useState([]);
    console.log(myServices)
    useEffect(() => {
        fetch(`http://localhost:3000/my-services?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyServices(data))
            .catch((err) => console.log(err));
    }, [user?.email]);

   
    return (
        <div>
            <h2 className='text-center text-3xl my-3'>My Services</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        myServices?.map(services=> 
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={services?.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{services?.name}</div>
                                        <div className="text-sm opacity-50">{services?.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                               <p>{services?.description}</p>
                            </td>
                            <td>{services?.price}</td>
                            <th className='flex gap-1'>
                                <button onClick={()=>handleDelete(services?._id)} className="btn btn-error btn-xs">Delete</button>
                                <Link to={`/update-services/${services?._id}`}> <button className="btn btn-primary btn-xs">Edit</button></Link>
                               
                            </th>
                        </tr>)
                       }
                        
                    </tbody>
                   
                   
                </table>
            </div>
        </div>
    );
};

export default Myservices;