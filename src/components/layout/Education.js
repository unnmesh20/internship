import React, { useState } from 'react';
import useForm from './useForm'
import validateInfo from './validateInfo';
const Education = () => {
    const{handleChange,values,handleSubmit,errors}=useForm(validateInfo);
    return (
        <div className="education_details">
                <h3 className="inside_heading">EDUCATION DETAILS</h3>
                <section>
                    <div className="row">
                    <div className="col s12 l6">
                    <form action="" className="col s12" onSubmit={handleSubmit}>
                        <div className="row">
                        <div className="input-field col s4 ">
                            <input type="text" name="school10" id="school10"/>
                            <label htmlFor="school10" className="active">School Name</label>
                        </div>
                        <div className="input-field col s4 offset6">
                            <input type="number" name="yop10" id="yop10"/>
                            <label htmlFor="yop10" className="active">Year of Passing</label>
                        </div>
                        <div className="input-field col s4 offset6">
                            <input type="number" name="percentage10" id="percentage10" value={values.percentage10} onChange={handleChange}/>
                            {errors.percentage10 && <small style={{color:"red"}}>{errors.percentage10}</small>}
                            <label htmlFor="percentage10" className="active">10%</label>
                        </div>
                        </div>
                    {/* Class12 */}
                    <div className="row">
                        <div className="input-field col s4 ">
                            <input type="text" name="school12" id="school12"/>
                            <label htmlFor="school12" className="active">School Name</label>
                        </div>
                        <div className="input-field col s4 offset6">
                            <input type="number" name="yop12" id="yop12"/>
                            <label htmlFor="yop12" className="active">Year of Passing</label>
                        </div>
                        <div className="input-field col s4 offset6">
                            <input type="number" name="percentage12" id="percentage12" value={values.percentage12} onChange={handleChange}/>
                            {errors.percentage12 && <small style={{color:"red"}}>{errors.percentage12}</small>}
                            <label htmlFor="percentage12" className="active">12%</label>
                        </div>
                    </div>
                    {/* UG */}
                    <div className="row">
                        <div className="input-field col s4 ">
                            <input type="text" name="ug" id="ug"/>
                            <label htmlFor="ug" className="active">School Name</label>
                        </div>
                        <div className="input-field col s4 offset6">
                            <input type="number" name="ug_year" id="ug_year"/>
                            <label htmlFor="ug_year" className="active">Year of Passing</label>
                        </div>
                        <div className="input-field col s4 offset6">
                            <input type="number" name="cgpa" id="cgpa" value={values.cgpa} onChange={handleChange}/>
                            {errors.cgpa && <small style={{color:"red"}}>{errors.cgpa}</small>}
                            <label htmlFor="cgpa" className="active">CGPA</label>
                        </div>
                    </div>
                    {/* <button type="submit">SAVE</button> */}
                    <button class="btn waves-effect waves-light" type="submit" name="action"><i class="material-icons right">save</i>SAVE</button>
                        </form>
                    </div>
                    </div>
                </section>
            </div>  
    );
}
 
export default Education;