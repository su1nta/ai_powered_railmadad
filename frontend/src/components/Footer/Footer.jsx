import React from 'react'

function Footer() {
    return (
        <>
            <div className="flex justify-center items-center h-8 bg-primary text-white font-semibold px-4">
                <div className="flex justify-between items-center w-full max-w-screen-lg">
                    <div>
                        &copy; {new Date().getFullYear()} Innovix_CU. All Rights Reserved.
                    </div>
                    <div className="flex space-x-4">
                        <a href="#home" className="hover:underline">Home</a>
                        <span>|</span>
                        <a href="#about" className="hover:underline">FAQs</a>
                        <span>|</span>
                        <a href="#about" className="hover:underline">Railway Admin Login</a>
                        <span>|</span>
                        <a href="#contact" className="hover:underline">MIS Report Login</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
