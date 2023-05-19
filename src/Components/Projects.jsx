import React,{useState,useEffect} from 'react'
import '../CSS/Projects.css'

const Projects = () => {
  const arr=['UI Design','UX Design','Brand Design','Web 3','EDTech','FinTech','Social Media'];
   
  const [val,setVal]=useState('UI Design');
  useEffect(()=>{
    var i=0;
      const typew=()=>{
        
        if(arr[i] !== undefined){
            setVal(arr[i]);
            i++;
              } 
              else{
                i=0;
                setVal(arr[i]);
                i++;
              }
        //  (i > arr.length) ? i=0 :i++;
    }
    setInterval(()=>typew(),2000)
        // typew();
        },[]);
  return (
    <>
    <div className='main_heading'>
        <div className='scroll1'>Scroll</div>
        <div className='inner-heading'>
            <div>SOFTWARE <br/>ENGINEER & <br/>DESIGNER</div>
            <div className='typewritter'>{val}</div>

        </div>

    </div>
    <div className='projects'>
        <div className='project'>
            <div className='hovering'></div>

            <img   src="https://uploads-ssl.webflow.com/6351127a38c7c92d8c20a7f4/63511300cd002f2bb76aa6c2_1-p-1080.png" value='e' alt=""></img>
            <div className='img-text'>Wish Video Platform</div>
        </div>
        <div className='project'>
        {/* <div className='hovering'></div> */}

            <img  src="https://uploads-ssl.webflow.com/6351127a38c7c92d8c20a7f4/63511300cd002f2bb76aa6c2_1-p-1080.png" alt=""></img>
            <div className='img-text'>Wish Video Platform</div>
        </div>
        <div className='project'>
            {/* <div className='hovering'></div> */}

            <img  src="https://uploads-ssl.webflow.com/6351127a38c7c92d8c20a7f4/63511300cd002f2bb76aa6c2_1-p-1080.png" alt=""></img>
            <div className='img-text'>Wish Video Platform</div>
        </div>
    </div>
    </>
  )
}

export default Projects;