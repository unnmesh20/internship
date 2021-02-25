import React,{useState} from 'react'
import useForm from './useForm'
import validateInfo from './validateInfo';
const Header = () => {
  function componentDidMount(){
    const M=window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems, {});
    });
  }
  const{handleChange,values,handleSubmit,errors}=useForm(validateInfo);
  // const[name,setName]=useState("");
  // function handleChange(event){
  //   console.log(event.target.value);
  //   setName(event.target.value);
  //}
  return (  
    <div className="header1">
        <h1 className="heading">STUDENT REGISTRATION FORM</h1>
        <section className="header_section">
        <div className="row">
          <h3 className="inside_heading">PERSONAL INFORMATION</h3>
          <form action="" className="col s12" onSubmit={handleSubmit}>
          <div>
            <div className="row">
              <div className="input-field col s4">
                <input type="text" name="first_name" id="first_name" value={values.first_name} onChange={handleChange} />
                {errors.first_name && <small style={{color:"red"}}>{errors.first_name}</small>}
                <label htmlFor="first_name" className="active">
                  First Name
                </label>
              </div>
              <div className="input-field col s4">
                <input type="text" name="last_name" id="last_name" value={values.last_name} onChange={handleChange} />
                {errors.last_name && <small style={{color:"red"}}>{errors.last_name}</small>}
                <label htmlFor="last_name" className="active">
                  Last Name
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input type="text" name="" id="" className="datepicker" onFocus={componentDidMount} />
                <label htmlFor="dob">DOB</label>
              </div>
            </div>
            <div className="row">
                <div className="input-field col s4 offsets12">
                    <input type="email" name="email" id="email" value={values.email} onChange={handleChange}/>
                    {errors.email && <small style={{color:"red"}}>{errors.email}</small>}
                    <label htmlFor="email" className="active">Email</label>
                </div>
                <div className="input-field col s4 offsets12">
                    <input type="number" name="phone" id="phone" value={values.phone} onChange={handleChange}/>
                    {errors.phone && <small style={{color:"red"}}>{errors.phone}</small>}
                    <label htmlFor="phone" className="active">Phone Number</label>
                </div>
            </div>
            
        </div>
            {/* <button type="submit">SAVE</button> */}
            <button className="btn waves-effect waves-light" type="submit" name="action"><i className="material-icons right">save</i>SAVE</button>
          </form>
        </div>
        </section>
      </div>
  );
}
 
export default Header;
