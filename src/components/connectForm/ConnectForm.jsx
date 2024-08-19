import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Dropdown from '../dropdown/Dropdown';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";


const ConnectForm = () => {
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [intrestedfor, setIntrestedfor] = useState("")
    const [mode, setMode] = useState("")

    const data = {
        "Name": name,
        "Contact": contact,
        "Interested for": intrestedfor,
        "Mode": mode
    }
    function handleClick(e) {
        setLoading(true)
        console.log(loading, "shivam")
        if (data.Name.length === 0 || data.Contact.length === 0 || data['Interested for'].length === 0 || data.Mode.length === 0) {
            setTimeout(() => {
                setLoading(false)
            }, 1000);
            toast.error("Please fill all the fields !")
        }
        else {
            const response = axios.post("https://sheetdb.io/api/v1/ibkbfzeu05can", data)
            response.then(res => {
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
                toast.success("Form submitted Successfully !")
                setName("")
                setContact("")
                setIntrestedfor("")
                setMode("")
            }).catch(res => toast.error(res.message))
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="form w-80 ml-5 mt-8 la:mt-0 h-96  bg-white rounded-2xl lg:w-519px lg:h-517px p-12">
                <p className='text-center text-2xl la:text-4xl font-extrabold'>Want to Explore More?</p>

                <span>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-person-fill text-submitToConnect w-4 la:w-6 opacity-60 relative top-5 la:top-8 left-0" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    <input className='border-b-2 pl-6  la:pl-8 la:py-2 w-full' onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Your Name' value={name} name="" id="" required={true} />
                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telephone-fill text-submitToConnect w-4 la:w-6 opacity-60 relative top-5 la:top-8 left-0" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                    <input className='border-b-2 pl-6  la:pl-8 la:py-2 w-full' onChange={(e) => setContact(e.target.value)} type="text" placeholder='Contact' value={contact} name="" id="" />
                </span><span>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-mortarboard-fill  text-submitToConnect opacity-60 w-4 la:w-6 relative top-5 la:top-8 left-0" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                    </svg>
                    <input className='border-b-2 pl-6  la:pl-8 la:py-2 w-full' value={intrestedfor} onChange={(e) => setIntrestedfor(e.target.value)} type="text" placeholder='Interested For' name="" id="" />
                    <span className='absolute'>
                        <Dropdown
                            set={setIntrestedfor}
                            arr={["UPSC", "GATE", "CAT"]}
                        /></span>
                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-book-fill  text-submitToConnect opacity-60 relative top-5 la:top-8 left-0 w-4 la:w-6" viewBox="0 0 16 16">
                        <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                    <input className='border-b-2 pl-6 la:pl-8 la:py-2 w-full' value={mode} onChange={(e) => setMode(e.target.value)} type="text" placeholder='Mode' name="" id="" />
                    <span className='absolute'>
                        <Dropdown
                            set={setMode}
                            arr={["Online", "Offline"]}
                        /></span>
                </span>
                {loading ? <div className='ml-48 mt-8'><ClipLoader
                    size={40}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /></div>  : <button className='bg-submitToConnect mt-4 la:mt-8 w-full text-white text-center py-2 la:py-3 la:px-28 rounded-lg' onClick={handleClick}>Submit to Connect!</button>}
            </div>
        </>
    )
}

export default ConnectForm