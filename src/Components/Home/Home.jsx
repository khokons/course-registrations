/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {

    const [allCourses, setAllCourses]=useState([])

    useEffect(() =>{
        fetch('./data.json')
        .then(res=> res.json())
        .then(data=> setAllCourses(data))

    },[])


console.log(allCourses);
    return (
        <div>
        <div className="container mt-16 max-w-screen-xl mx-auto">
          <div className="Home_container flex gap-5">
           <div className="card_container w-[900px] grid grid-cols-3 mb-10">

            {

allCourses.map(course => (
    <div key={course.id} className="card w-[250px] h-[330px]">
    <div className="card_img">
        <img src={course.cover} alt="" />

    </div>
    <h2 className='mt-2 font-bold text-[#1C1B1B]'>{course.title}</h2>
   <p className='text-sm font-normal'><small>{course.description}</small></p>
    <div className='flex justify-between'>
        <div><p className='font-bold'>$ <span> Price : {course.price}</span></p></div>
        <div><p className='font-bold'><span> Credit : {course.credit}hr</span></p></div> 
    </div>
  
     <button className='bg-blue-800 w-full p-2 mt-2 text-white font-bold'>Select</button>
    
</div>
))
}

</div>
<div className="cart">
<Cart></Cart>
</div>
</div>

             
</div>
</div>
    );
};


export default Home;


