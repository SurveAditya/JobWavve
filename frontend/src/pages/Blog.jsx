import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import images from '../images/layoff.avif'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { TextToSpeech } from '../TextToSpeech';
import { useNavigate } from 'react-router-dom';

const Blog = () => {

  const [data, setData] = useState([]);

  const [filter, setFilter] = useState('tech');

  console.log(data, filter)


  let navigate = useNavigate();


  const [jobData, setjobData] = useState([]);

  const options = {
    method: "POST",
    url: "https://all-serp.p.rapidapi.com/all-serp-website",
    params: {
      keyword: `${filter} blog for building resume and interview tips during layoffs`,
      location: "in",
      language: "en",
      search_engine: "google",
      page_limit: "1",
      search_type: "All",
    },
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "1dfd7807d4msh316e5c9ecedccafp1e70dajsn633c1a47ae04",
      "X-RapidAPI-Host": "all-serp.p.rapidapi.com",
    },
    data: '{"key1":"value","key2":"value"}',
  };

  const fetchData = async () => {
    const response = await axios.request(options);
    console.log(response.data.organic_results)
    setjobData(response.data.organic_results);
  }

  useEffect(() => {
    fetchData();
  }, []);





  return (
    <div>

      <br></br>
      <br></br>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'><img className='img-fluid rounded' src={images}></img></div>
          <div className='col-md-6'>
            <div className='mt-5'>
              <h2>The layoff and the initial struggle</h2>
              <h4 className='text-style-blog mt-3'>What started off as small differences became passive aggressive face-offs, and then quickly escalated into personal conflicts. This lead to a status quo that hampered crucial business decisions. “He would bring somebody to work in my own team without my approval and then ask me to fire him when things didn’t work out.</h4>
            </div>

          </div>


        </div>
        <br></br>
        <br></br>

        <div className='row'>
          <div className='d-flex justify-content-between'>
            <div>
              <Button className='button-filter'>All</Button>
              <Button className='button-filter' onClick={() => { setFilter("Resume") }} >Resume</Button>
              <Button className='button-filter' onClick={() => { setFilter("Interview") }} >Interview</Button>
              <Button className='button-filter' onClick={() => { setFilter("Layoffs") }} >Layoffs</Button>
              <Button className='button-filter' onClick={() => { setFilter("Motivation") }} >Motivation</Button>
              <Button className='button-filter' onClick={() => { setFilter("Resume") }} >Job Search
              </Button>
            </div>

            <form class="search-box d-flex">
              <button style={{ border: "none", background: "white" }}><span style={{ fontSize: "25px", marginTop: "5px" }} className="material-symbols-outlined">search</span></button>
              <input style={{ width: "255px" }} type="search" name="focus" placeholder="Search" id="search-input" value="" />
            </form>
          </div>

        </div>
        <br></br>
        <br></br>
        <div className='row'>
          {jobData.map((item) => (

            <div className='col-md-4 mt-4'>
              <img className='img-fluid rounded' src={images}></img>
              <h5 className='mt-2'>{item.title}</h5>
              <a href={item.url} className='mt-2'>Read More</a>
            </div>


          ))}
        </div>






      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>



    
    </div>
  )
}

export default Blog