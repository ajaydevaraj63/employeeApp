import React from 'react'
import Nav from './Nav'

const View = () => {
  return (
    <div><Nav/>
          <table class="table">
  <thead>
    <tr>
     
      <th scope="col">empid</th>
      <th scope="col">emp name</th>
      <th scope="col">designation</th>
      <th scope="col">salary</th>
      <th scope="col">company name</th>
      <th scope="col">dob</th>
      <th scope="col">email</th>
      
    </tr>
  </thead>
  <tbody>
   
 
<tr>

<td>1</td>
<td>ajay</td>
<td>hr</td>
<td>200000</td>
<td>tcs</td>
<td>05-07-1999</td>
<td>ajaydvrj@gmail.com</td>
</tr>



   
  </tbody>
</table></div>
  )
}

export default View