import React,{useState} from 'react'

export default function Textform(props) {
    
    const[text,setText]=useState("pls enter text some like u")

    const handleupcase=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Text is Uppercase","success")

    }
     
    const handlelocase=()=>{
      let newText=text.toLowerCase()
      setText(newText)
      props.showAlert("Text is lowercase","success")
  }
     
  const Alltextclear=()=>{
    setText("")
    props.showAlert("Text is clear","warning")
  }

  const AllremoveSpace=()=>{

    let newText=text.replace(" ","")
    setText(newText)
    props.showAlert("Single Space Remove","success")

  }
    
    const handleonchange=(event)=>{
        setText(event.target.value)
    }

  return (
    <>
  <div className="container my-5">
    <div className="form-group" >
    <h2 style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} >{props.heading}</h2>
   <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}}  onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleupcase}>UpperCase</button> 
  <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handlelocase}>LowerCase</button>
  <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={Alltextclear}>Clear</button>
  <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={AllremoveSpace}>Remove Single Space</button>
  
  </div>

  <div className="container my-5">
   <h2 style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} >Your Text Summary</h2>
   <p>{text.split(/\s+/).filter((a)=>{return a.length!==0}).length} word and {text.length} length</p>
   <p>{0.008*text.split(" ").filter((a)=>{return a.length!==0}).length} Reading Time depend Your Speed</p>
 <h2 style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} >Preview</h2>
 <p>{text.length>0? text:"enter the something"}</p>
 </div>

     

  </>
  )
}

