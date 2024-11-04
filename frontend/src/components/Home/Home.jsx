import React, { useState } from 'react'
import bodybg from '../../assets/body-bg.jpg';
import Train from '../Forms/Train';
import Station from '../Forms/Station';
import { FaTrainSubway } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { FiPackage } from "react-icons/fi";
import { MdOutlineContentPaste } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";

// Import images
import bookingIcon1 from '../../assets/booking-icon-1.png';
import bookingIcon2 from '../../assets/booking-icon-2.png';
import bookingIcon3 from '../../assets/booking-icon-3.png';
import bookingIcon4 from '../../assets/booking-icon-4.png';
import bookingIcon5 from '../../assets/booking-icon-5.png';
import bookingIcon6 from '../../assets/booking-icon-6.png';
import bookingIcon7 from '../../assets/booking-icon-7.png';
import bookingIcon8 from '../../assets/booking-icon-8.png';

const icons = [
    { src: bookingIcon1, label: "Ticket Booking" },
    { src: bookingIcon2, label: "Train Enquiry" },
    { src: bookingIcon3, label: "Reservation Enquiry" },
    { src: bookingIcon4, label: "Retiring Room Booking" },
    { src: bookingIcon5, label: "Indian Railways" },
    { src: bookingIcon6, label: "UTS Ticketing" },
    { src: bookingIcon7, label: "Freight Businesses" },
    { src: bookingIcon8, label: "Railway Parcel Website" }
];

function Home() {
    const [activeTab, setActiveTab] = useState(0)
    const forms = [
        { id: 0, name: 'Train', content: <Train /> },
        { id: 1, name: 'Station', content: <Station /> },
        { id: 2, name: 'Rail Anubhav', content: <div>Rail Anubhav</div> },
        { id: 3, name: 'Enquiry', content: <div>Enquiry</div> },
        { id: 4, name: 'Track Concern', content: <div>Track Concern</div> },
        { id: 5, name: 'Suggestions', content: <div>Suggestions</div> },
    ]

    const formImg = [
        { id: 0, content: <FaTrainSubway size={40} color="white" />},
        { id: 1, content: <FaUniversity size={40} color="white" />},
        { id: 2, content: <GiNotebook size={40} color="white" /> },
        { id: 3, content: <FiPackage size={40} color="white" /> },
        { id: 4, content: <MdOutlineContentPaste size={40} color="white" /> },
        { id: 5, content: <MdOutlineFeedback size={40} color="white" /> }
    ]

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bodybg})` }}></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex justify-center items-center min-h-screen overflow-hidden">
                <div className="p-8 rounded-lg flex gap-40 items-center justify-center space-x-8 max-h-screen max-w screen overflow-y-auto">
                    <div className="grid grid-cols-4 gap-12">
                        {icons.map((icon, index) => (
                            <a key={index} href="#" className="p-4 flex gap-2 flex-col items-center justify-start">
                                <img src={icon.src} alt={`Icon ${index + 1}`} />
                                <span className="w-20 text-center text-white whitespace-normal" style={{ textShadow: '1px 1px 2px black' }}>{icon.label}</span>
                            </a>
                        ))}
                    </div>
                    <div className="flex bg-accent">
                        <div className="flex flex-col">
                            {forms.map((form, index) => (
                                <button
                                    key={form.id}
                                    className={`bg-primary border-b border-gray-400 border-opacity-40 flex flex-col items-center justify-center gap-2 px-10 py-4 text-white font-medium tracking-wide opacity-95 hover:opacity-100 ${activeTab === form.id ? 'bg-secondary' : ''}`}
                                    onClick={() => setActiveTab(form.id)}
                                >
                                    {formImg[index].content}
                                    {form.name}
                                </button>
                            ))}
                        </div>
                        <div className="ml-4 p-4 border rounded-lg w-64">
                            {forms.find((form) => form.id === activeTab)?.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home