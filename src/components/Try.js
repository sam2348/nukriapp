import React,{useRef,useState} from 'react';
import './Try.css'

const Try = () => {
    // const ref = useRef();
    const [bgcolor,setBgcolor]=useState('');
    const handler =(event)=>{
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regEx.test(event.target.value) === false) {
            setBgcolor('abc')
            return
        } else {
            setBgcolor('bg')
        }  
    }
  return (
    <div className='mt-5 text-center'>
        <h1 className='mt-5'>hello</h1>
        <input type="text" className={bgcolor}
        minLength={8}
        onChange={handler} 
        /> <br/><span>my name is sandeep</span>
    </div>
  )
}

export default Try;