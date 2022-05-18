import React from 'react'
import Nav from './Nav'

const Empregister = () => {
  return (
    <div> <Nav/><div class="container">
    <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row g-3">
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label"><b>Employee id</b></label>
                            <input type="text" class="form-control"/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label"><b>Employee name</b></label>
                        <input type="text" class="form-control"/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label"><b>Designation</b></label>
                        <input type="text" class="form-control"/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label"><b>salary</b></label>
                        <input type="text" class="form-control"/>
                      </div>
                      <div class="col col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                        <label for="" class="form-label"><b>Company Name</b></label>
                        <input type="text" class="form-control"/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label"><b>dob</b></label>
                        <input type="date" class="form-control"/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label"><b>email</b></label>
                        <input type="text" class="form-control"/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <input type="button" value="clear" class="btn btn-dark"/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <input type="button" value="register" class="btn btn-dark"/>
                      </div>
                </div>
          </div>
    </div>
</div>  </div>
  )
}

export default Empregister