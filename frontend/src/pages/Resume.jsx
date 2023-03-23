import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Configuration, OpenAIApi } from "openai";
import Pdf from "react-to-pdf";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Button from 'react-bootstrap/Button';
const ref = React.createRef();


const configuration = new Configuration({
  organization: "org-9pWRmoRd903RxiL6TnB6xlFO",
  apiKey: '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',
});


export const Resume = () => {

  const openai = new OpenAIApi(configuration);
  const [data, setData] = useState({})


  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();


  useEffect(() => {
    if (transcript.includes("generate") || transcript.includes("Generate")) {
      alert("heyy");
     
    } 
}, [transcript]);


  useEffect(() => {
    const fetchUserDetails = async () => {

      const details = await axios.get('http://localhost:4000/getUser/63dc6b48bd90ea72f2b98c27');

      setData(details.data)
      console.log(details, "datya");
      // console.log(details)
    }

    fetchUserDetails();
  }, [])




  return (
    <div>
    <br></br>
   <div className="d-flex justify-content-between">
   <p className="mx-2">Microphone: {listening ? "on" : "off"}</p>

   <Button onClick={SpeechRecognition.startListening}  className="button-style-2">Voice Navigator</Button>
   
   </div>
      <div className="mx-2 container" ref={ref}>
        <div className="">
          <h3 className="mt-1">Name:{data.name}</h3>
          <p className="mt-1">Email:{data.email}</p>
        </div>
        <hr></hr>
        <div>
          <h2>Summary</h2>
          {transcript}
        </div>
        <hr></hr>
        <div>
          <h2>Education</h2>
          <p>{data.education}</p>

        </div>
        <hr></hr>
        <div>
        
          <h2>Skill & experience</h2>
          <div className="d-flex">
            {data?.skills?.map((item) => (
              <p>{item} ,</p>
            ))}
          </div>
          <p>{data?.experience} </p>


        </div>
        <hr></hr>
        <div>
          <h2>hobbies & interestedJob</h2>
          <div className="d-flex">
            {data?.hobbies?.map((item) => (
              <p>{item} ,</p>
            ))}
          </div>
          <p>{data?.interestedJob} </p>


        </div>



      </div>

      <Pdf targetRef={ref} filename="Resume_1.pdf" >
      {({ toPdf }) => <button onClick={toPdf} className="button-style-2 mx-2">Generate Pdf</button>}
    </Pdf>

    <br></br>
    <br></br>
    <br></br>
    </div>
  );
};
