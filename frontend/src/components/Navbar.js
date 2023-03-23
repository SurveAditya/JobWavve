import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';


import { AiOutlineClose } from 'react-icons/ai';
import { RiArrowDropRightFill } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';

import "./navbar.css";
import Button from 'react-bootstrap/Button';
import logo from "../images/logo.jpg"
import MenuDropdown from './MenuDropdown';
// import SpeechRecognition, {
//     useSpeechRecognition,
// } from "react-speech-recognition";


const Navbar = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);

    let navigate = useNavigate();
    const [navigation, setNavigation] = useState("");
    // const {
    //     transcript,
    //     listening,
    //     resetTranscript,
    //     browserSupportsSpeechRecognition,
    // } = useSpeechRecognition();

    // if (!browserSupportsSpeechRecognition) {
    //   return <span>Browser doesn't support speech recognition.</span>;
    // }
    // useEffect(() => {
    //     if (transcript.includes("home") || transcript.includes("Home")) {
    //         navigate("/");
    //     } else if (transcript.includes("report") || transcript.includes("Report")) {
    //         navigate("/report");
    //     } else if (transcript.includes("blog") || transcript.includes("Blog") ||transcript.includes("Block") ||transcript.includes("block")    )   {
    //         navigate("/blog");
    //     }
    //     else if (transcript.includes("resume") || transcript.includes("Resume") || transcript.includes("create resume") || transcript.includes("create a resume")) {
    //         navigate("/resume");
    //     }

    //     else if (
    //         transcript.includes("upskill") ||
    //         transcript.includes("train") ||
    //         transcript.includes("learn") ||
    //         transcript.includes("motivation")
    //     ) {
    //         navigate("/training");
    //     }
    // }, [transcript]);


    return (
        <section className="header ">
            <Link to="/" className="margin-left-500 d-flex" style={{ marginLeft: "1rem", textDecoration: "none" }}>
                <img src={logo} alt="errorlogo" style={{ width: "7rem" }}></img> <p className='mt-4 h4 text-dark' >JobWavve.</p>

            </Link>


            <nav className={showMediaIcons ? "navbar active" : "navbar"}>
                <ul className="menu flex items-center">
                    <li>
                        <Link to="/" className="drop-link">
                            Home{" "}
                        </Link>{" "}
                    </li>
                    <li>
                        <a href="https://jobwave-careerfair.glitch.me" className="drop-link">Virtual Fair</a>{" "}
                    </li>
                    <li>
                        <Link to="/training" className="drop-link">
                            Training{" "}
                        </Link>{" "}
                    </li>
                    <li>
                        <a href='http://10.120.102.90:3000/home' className="drop-link">
                            Create Resume{" "}
                        </a>{" "}
                    </li>
                    <li>
                        <Link to="/blog" className="drop-link">
                            Blog{" "}
                        </Link>{" "}
                    </li>
                    {/* <li>
                        <p>Microphone: {listening ? "on" : "off"}</p>
 <p>{transcript}</p>
                        <Button onClick={SpeechRecognition.startListening}  className="button-style-2">Voice Navigator</Button>
                    </li> */}
                    {
                        (!localStorage.getItem("token") || localStorage.getItem("token") === "undefined" || localStorage.getItem("token") === "null") ?
                            <div className='flex space-x-2'>
                                <li>
                                    <Link to="/login" className="button-style" style={{ padding: "-2rem" }}>Login</Link>
                                </li>
                                <li>
                                    <Link to="/sign-up" className="button-style2 ml-2" style={{ padding: "-2rem" }}>Register</Link>
                                </li>
                            </div>
                            :
                            <div className=''>
                                {/* <li>
                                    <Link to="/logout" className="button-style text-red-700" style={{ padding: "-2rem" }}>Logout</Link>
                                </li> */}
                                <MenuDropdown/>
                            </div>
                    }
                </ul>

                <AiOutlineClose
                    className="display  mx-3"
                    onClick={() => setShowMediaIcons(false)}
                />
            </nav>

            {/* <div className="hamburger-menu ">
                <Button onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu className="icons " />
                </Button>
            </div> */}
        </section>
    )
}

export default Navbar