import React from "react"
import './Student.css'

const Student = () => {
    return(
        <>
   
   <div style={{background: "linear-gradient(pink,white,pink,yellow,white)",height:"100vh"}}>



    
    <div className='head'>
        <div className='detail'>Students Details</div>
        <button className='btn'>Add New Student</button>
       </div>
       <div>
       <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>change</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Sulekha</td>
                  <td>22</td>
                  <td>MERN</td>
                  <td>December</td>
                  <td>Edit</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                  <td>Rajiv</td>
                  <td>25</td>
                  <td>MERN</td>
                  <td>December</td>
                  <td>Edit</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                  <td>Neha</td>
                  <td>22</td>
                  <td>MERN</td>
                  <td>December</td>
                  <td>Edit</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                  <td>Chetna</td>
                  <td>24</td>
                  <td>MERN</td>
                  <td>December</td>
                  <td>Edit</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                  <td>Bhumika</td>
                  <td>22</td>
                  <td>MERN</td>
                  <td>December</td>
                  <td>Edit</td>
                </tr>
            </tbody>
          </table>
       </div>
    </div>
    
        
        
        </>
    )
}
export default Student