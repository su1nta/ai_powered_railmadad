import React, { useState } from 'react';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import G20 from '../../assets/logog20.png';

function Header() {
    const [selectedLanguage, setSelectedLanguage] = useState("en");
    const handleLanguageChange = (event) => {
      const newLang = event.target.value;
      setSelectedLanguage(newLang);
      console.log(newLang);
    }

    const languages = {
      en: "English",
      hi: "हिन्दी",
      bn: "বাংলা",
      mr: "मराठी",
      gu: "ગુજરાતી",
      kn: "ಕನ್ನಡ",
      ml: "മലയാളം",
      pa: "ਪੰਜਾਬੀ",
      or: "ଓଡିଆ",
      sa: "संस्कृत",
      ta: "தமிழ்",
      te: "తెలుగు",
      ur: "اردو"
    };

    return (
        <header className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-12 py-4 bg-accent">
        {/* Left section with logos */}
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-10 mb-4 md:mb-0">
          <div className="h-16 md:h-20 w-32 md:w-40 lg:w-48 flex items-center justify-center">
            <img src={G20} alt="g20" className="object-contain w-full h-full" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl md:text-3xl lg:text-4xl font-extrabold text-primary">
              RailMadad
            </span>
            <span className="text-sm md:text-base lg:text-lg text-gray leading-tight">
              for Inquiry, Assistance & Grievance Redressal
            </span>
          </div>
        </div>
      
        {/* Middle section */}
        <div className="flex items-center justify-center mb-4 md:mb-0 md:flex-1 md:justify-end lg:justify-center">
          <div className="flex items-center gap-2 text-gray-600">
            <span className="flex items-center justify-center gap-2 font-black text-white text-xl p-2 md:p-3 bg-primary rounded-md cursor-pointer">
              <MdOutlinePhoneInTalk size={20} md:size={30} /> 139
            </span>
            <span className="font-medium md:font-semibold text-black">
              for security/medical assistance
            </span>
          </div>
        </div>
      
        {/* Right section with navigation */}
        <nav>
          <ul className="flex flex-wrap space-x-2 md:space-x-4">
            <li>
              <button className="btn bg-purple-200 font-normal border-gray-400 text-xs md:text-sm lg:text-base hover:bg-purple-300">
                Log In
              </button>
            </li>
            <li>
              <button className="btn btn-neutral font-normal text-xs md:text-sm lg:text-base hover:bg-gray-200">
                Sign Up
              </button>
            </li>
            <li>
              <select 
              className="select select-bordered text-xs md:text-sm w-28 md:w-36 lg:w-full"
              onChange={handleLanguageChange}
              value={selectedLanguage}>
                {Object.entries(languages).map(([code, name]) => (
                  <option key={code} value={code}>{name}</option>
                ))}
              </select>
            </li>
          </ul>
        </nav>
      </header>
      
    );
}

export default Header
