import React, { useState } from 'react';
import Search from './Search';
import axios from 'axios'
import Result from './Result'
import Popup from './Popup'
function MainFile(){
    const apiurl="http://www.omdbapi.com/?i=tt3896198&apikey=cb721f88";
    const [state,setState]=useState({
        s:"",
        results:[],
        selected:{}

    });
    const search=(e) =>{
        if(e.key==="Enter"){
            axios(apiurl+"&s="+state.s).then(({ data }) =>{
                let results=data.Search;
                setState(prevState =>{
                    return{...prevState,results:results}
                })
                console.log(data);
            })
            }
        }
    const openPopup= id =>{
        axios(apiurl+ "&i="+id).then( ({data}) =>{
            let result=data;
            console.log(result);
            setState(prevState =>{
                return{...prevState,selected:result}
            })

        })
    }
    const closePopup= () =>{
        setState(prevState =>{
            return{...prevState, selected:{}}
        })
    }
    const handleInput= (e) =>{
        let s=e.target.value;
        setState(prevState =>{
            return{...prevState, s:s}
        });
        

        console.log(state.s);



    }
    return(
        <div>
           <header>
               <h1>MOVIE DATABASE</h1>
           </header>
           <main>
             <Search handleInput={handleInput} search={search}></Search>
             <Result results={state.results} openPopup={openPopup}></Result>
             {(typeof state.selected.Title!="undefined")?<Popup selected={state.selected} closePopup={closePopup}></Popup>: false}
           </main>
        </div>
    ) 
}
export default MainFile