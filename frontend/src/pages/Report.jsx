import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import images from '../images/shitti.jpg'
const Report = () => {

    const [name ,setName]=useState('');
    const [desc ,setDesc]=useState('');
    const [imageURL ,setImagesURL]=useState('');

     const navigation = useNavigate();

     const TransformFile = (file) => {
        const reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            setImagesURL(reader.result);
          };
        } else {
            setImagesURL("");
        }
      };
    
      const handleImageUpload = (e) => {
        const file = e.target.files[0];
        // console.log(file);
        TransformFile(file);
      };
    const submitHandler = async (e) => {

        console.log(name,desc,imageURL)


        if (name === "" || desc === "" || imageURL === "" ) {
          alert("pill fill data")
        }
    
    
        e.preventDefault();
    
    
       const res = await axios
          .post('http://localhost:4000/report', {
            name,
            desc,
            imageURL,
           
          });
        console.log(res);  
       
        if(res.status === 200 ){
          navigation("")
          setName("");
          setDesc("");
          setImagesURL("");
        }else{ alert("Fill Inputs Plz")}
    
    
         
        
    
      };



    return (
        <div className='container'>
        <br></br>
        <br></br>
        <br></br>

            <div className='row'>
                <h1>The Community Whistleblower</h1>
                <h4 className='text-secondary h5'>This is our initiative to help eliminate discrimination and possible ignorance against people <br></br> with disabilities and help make the world a more inclusive place to live in.</h4>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                <br></br>
                <br></br>
                <br></br>
                    <div className="input-div  mt-2">

                        <input className="input-filed2" type='text' name="Name" placeholder="Enter Your Name" value={name} onChange={(e) => { setName(e.target.value) }} /> <br></br>
                    </div>
                    <div className="input-div mt-2">

                        <input className="input-filed2" type='text' placeholder="Enter Your description" name="description" value={desc} onChange={(e) => { setDesc(e.target.value) }} /> <br></br>
                    </div>
                    <div className="input-div mt-2">

                        <input className="input-filed2" type='file' placeholder="upload imges" name="imges"   
                        accept="*"
                        onChange={handleImageUpload}
              /> <br></br>
                    {/* <input className="custom-file-input" type="file" />  */ }  
                    
                        </div>
                    <button className="login-button2 mt-3" onClick={submitHandler}>Submit Details</button>
                </div>

                <div className='col-md-6'>
                <img src={images} alt="error" className='img-fluid' style={{width:"400px" , height:"400px"}}/>
            </div>
            </div>

        </div>
    )
}

export default Report