/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedCourses,totalCost}) => {
    return (
        <div>
            
            <h1 className='text-lg font-bold text-[#2F80ED]'>Credit Hour Remaining  hr</h1>
            <hr />
            <h2 className='text-4xl mb-5 mt-5'>Courses Name</h2>
            <hr />

            <ol> 
                   {selectedCourses.map((course, index) => ( 
                       <li key={course.id}>
                           {index + 1}. {course.title} 
                       </li>
                   ))}
               </ol>


            < hr />
            <h2 className='mt-5 text-xl text-[#1C1B1BCC]'>Total Credit Hour : {totalCost}hr</h2>
        </div>
    );
};

export default Cart;