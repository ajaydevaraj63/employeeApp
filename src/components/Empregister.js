import React, { useState } from 'react'
import Nav from './Nav'

const Empregister = () => {
      var[empid,setEmpid]=useState("")
      var[empdesg,setEmpdesg]=useState("")
      var[empname,setEmpname]=useState("")
      var[empsal,setEmpsal]=useState("")
      var[cmpname,setcmpname]=useState("")
      var[empmail,setEmpmail]=useState("")
      var[empdob,setEmpdob]=useState("")
      const[list,setlist]=useState([])
const ins=()=>{
    
      const data={empid,empdesg,empname,empsal,cmpname,empmail,empdob}
    setlist((ls)=>[...ls,data])
}
  return (
    <div> <Nav/><div class="container">
    <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row g-3">
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label"><b>Employee id</b></label>
                            <input type="text" class="form-control" onChange={(e)=>{setEmpid(e.target.value)}}/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label"><b>Employee name</b></label>
                        <input type="text" class="form-control"onChange={(e)=>{setEmpname(e.target.value)}}/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label"><b>Designation</b></label>
                        <input type="text" class="form-control"onChange={(e)=>{setEmpdesg(e.target.value)}}/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label"><b>salary</b></label>
                        <input type="text" class="form-control"onChange={(e)=>{setEmpsal(e.target.value)}}/>
                      </div>
                      <div class="col col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                        <label for="" class="form-label"><b>Company Name</b></label>
                        <input type="text" class="form-control"onChange={(e)=>{setcmpname(e.target.value)}}/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label"><b>dob</b></label>
                        <input type="date" class="form-control"onChange={(e)=>{setEmpdob(e.target.value)}}/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label"><b>email</b></label>
                        <input type="text" class="form-control"onChange={(e)=>{setEmpmail(e.target.value)}}/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <input type="button" value="clear" class="btn btn-dark"/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <input type="button" value="register" class="btn btn-dark" onClick={ins}/>
                      </div>
                </div>
          </div>
    </div>


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
   
  {
list.map((value,key)=>
<tr>

<td>{value.empid}</td>
<td>{value.empname}</td>
<td>{value.empdesg}</td>
<td>{value.empsal}</td>
<td>{value.cmpname}</td>
<td>{value.empdob}</td>
<td>{value.empmail}</td>
</tr>
)

}
   
  </tbody>
</table>
</div>  </div>
  )
}

export default Empregister