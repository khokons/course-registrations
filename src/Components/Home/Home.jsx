/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { BsBook } from 'react-icons/bs';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [allCourses, setAllCourses]=useState([]);
    const [selectedCourses, setSelectedCourses] =useState([])
    const [totalCost, setTotalCost] = useState(0)
    const [remaining, setRemaining] =useState(0)

    useEffect(() =>{
        fetch('./data.json')
        .then(res=> res.json())
        .then(data=> setAllCourses(data))

    },[]);


    const handleSelectCourse = (course) => {
        const isExist =selectedCourses.find((item) => item.id==course.id);
        let count = course.credit;
        if(isExist){
            return toast.error("Already paid this course");
        }
        else{

            
            selectedCourses.forEach((item) => {
                count = count+item.credit
            });

            const totalRemaining = 20-count;
            if(count > 20){
                return toast.error("Your credit is over & insufficient balance")
                

            }

            else{
                setTotalCost(count)
                setRemaining(totalRemaining);
                setSelectedCourses([...selectedCourses,course])
            }

            
        }
        

    }
console.log(selectedCourses)


    return (
        <div>
        <div className="container mt-16 max-w-screen-xl mx-auto">
          <div className="Home_container flex gap-5">
           <div className="card_container w-[900px] grid grid-cols-3 mb-10 gap-y-4">

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

        <div className='flex items-center font-bold gap-2'>
            <div><BsBook></BsBook></div>
            <p> Credit : {course.credit}hr</p>
            </div> 
    </div>
  
     <button onClick={()=> handleSelectCourse(course)} className='bg-blue-800 w-full p-2 mt-2 text-white font-bold'>Select</button>
     <ToastContainer></ToastContainer>
    
</div>
))
}

</div>
<div className="cart">
<Cart
selectedCourses={selectedCourses}
totalCost={totalCost}
remaining={remaining}
></Cart>
</div>
</div>

             
</div>
</div>
    );
};


export default Home;


