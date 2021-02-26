import React, { useState,useEffect } from 'react';
import useForm from './useForm'
import validateInfo from './validateInfo';
const Contact = () => {
  const{handleChange,values,handleSubmit,errors}=useForm(validateInfo);
   useEffect(() =>{
    const M=window.M;
    M.AutoInit();
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
    },[]);
  
  })
  return (  
    <div className="contact_details">
        <div className="row">
          <h3 className="inside_heading">CONTACT DETAILS</h3>
          <form action="" className="col s12" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s12 l6">
                <input type="text" name="address1" id="address1" value={values.address1} onChange={handleChange} />
                {errors.address1 && <small style={{color:"red"}}>{errors.address1}</small>}
                <label htmlFor="address1" className="active">
                  Address Line-1
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 l6">
                <input type="text" name="address2" id="address2" />
                <label htmlFor="address2" className="active">
                  Address Line-2
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 l4">
                <input type="number" name="pincode" id="pincode" />
                {errors.pincode && <small style={{color:"red"}}>{errors.pincode}</small>}
                <label htmlFor="pincode" className="active">
                  Pincode
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 l4">
                <select name="" id="country">
                  <option value="">Choose country</option>
                  <option value="India">India</option>
                </select>
                <label htmlFor="country">Country</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 l4">
                <select name="" id="state">
                  <option value="">Choose State</option>
                  <option value="Odisha">Odisha</option>
                </select>
                <label htmlFor="state">State</label>
              </div>
            </div>
            {/* <button type="submit">SAVE</button> */}
            <button className="btn waves-effect waves-light" type="submit" name="action"><i className="material-icons right">save</i>SAVE</button>
          </form>
        </div>
      </div>
  );
}
 
export default Contact;

