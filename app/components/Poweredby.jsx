"use client";


import React from 'react';

// PoweredBy.js

const PoweredBy = () => {
    return (
        <div className="text-center py-4">
            <p className="text-white mb-4">Powered by:</p>
            <div className="flex justify-center items-center space-x-4">
                <a
                    href="https://techcamp.america.gov/techcamps/techcamp-kochi/" // Replace with your SVG link
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg className="logo-svg w-24 h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 775.5 170">
                        {/* <style type="text/css">
                    .logo-svg .st0{fill:#2B3049;}
                    .logo-svg .st1{fill:#3A6FB6;}
                </style> */}
                        <rect x="110" class="st0" width="49.2" height="49.2"></rect>
                        <polygon class="st1" points="98.4 0 0 0 0 19.8 78.6 19.8 78.6 140.8 98.4 140.8 "></polygon>
                        <polygon class="st1" points="0 29.4 0 49.2 49.2 49.2 49.2 140.8 69 140.8 69 29.4 "></polygon>
                        <polygon class="st0" points="252.1 76.6 252.1 49.3 170.2 49.3 170.2 76.6 184 76.6 184 61.8 203.6 61.8 203.6 128.2 189.5 128.2 189.5 140.8 232.7 140.8 232.7 128.2 218.7 128.2 218.7 61.8 238.1 61.8 238.1 76.6 "></polygon>
                        <path class="st0" d="M275.8 74.2c-18.8 0-31 13.4-31 34.2 0 20.9 12.7 33.9 33.1 33.9 8.4 0 16.1-2 23-6l0.5-0.3v-12.4l-1.6 0.9c-7.2 4-13.8 5.9-20.2 5.9 -11.6 0-18.5-6-20-17.4h44.6l0.1-0.9c0.3-2 0.3-4 0.3-5.7C304.7 91.6 297.1 74.2 275.8 74.2zM259.7 101.8c0.9-5.6 4.2-16.1 16.3-16.1 11.3 0 14.2 9.6 14.9 16.1H259.7z"></path>
                        <path class="st0" d="M341.8 74.2c-20.8 0-33.8 13.1-33.8 34.2 0 21.2 12.5 33.9 33.5 33.9 8.3 0 16.1-2 22.7-5.9l0.5-0.3v-12.5l-1.6 0.9c-4.8 2.7-12.1 5.9-19.9 5.9 -12.9 0-20.2-8.2-20.2-22.4 0-14 7.3-22 19.9-22 2.9 0 6.3 0.5 9.2 1.3v12.9H365V78.8l-0.7-0.3C359.8 76.9 350.9 74.2 341.8 74.2z"></path>
                        <path class="st0" d="M435 95.2c0-13.4-7.1-21-19.6-21 -7.8 0-15.5 3-22.9 8.9V34.9h-25.3V47H378v81.7h-10.7v12.1h36v-12.1h-10.7V95c6.9-5.7 13.3-8.5 19.1-8.5 6.2 0 8.8 3 8.8 10.1v32.1h-10.7v12.1h36v-12.1H435V95.2z"></path>
                        <path class="st0" d="M493.9 47.5c-29.5 0-48.6 18.8-48.6 47.9 0 28.6 19.1 47.1 48.8 47.1 15.3 0 26.8-5 32.4-7.9l0.6-0.3v-14.8l-1.6 0.9c-5.7 3.3-17.3 8.8-30.3 8.8 -16.6 0-34.3-9.1-34.3-34.5 0-21.2 12.9-34.3 33.7-34.3 5.8 0 12.7 1.1 17.9 2.8V80h14.6V54.8l-0.6-0.3C519.6 51.3 507 47.5 493.9 47.5z"></path>
                        <path class="st0" d="M586.2 97.7c0-16-8.2-23.5-25.7-23.5 -7.8 0-16.8 1.4-24.1 3.9l-0.7 0.2v11.9l1.4-0.5c2.5-0.8 11.6-3.6 20.9-3.6 10.2 0 13.6 3.1 13.6 12.2v3.8h-11.3c-19.5 0-29.8 7.1-29.8 20.4 0 12.1 8.3 19.8 21.2 19.8 8.9 0 15.8-4 20.4-7.9v6.3h34.8v-11.9h-20.7V97.7zM571.6 112.4v11c-3.7 3.4-9.3 7.6-16.4 7.6 -6.3 0-10-3.3-10-8.9 0-6.6 5-9.7 15.7-9.7H571.6z"></path>
                        <path class="st0" d="M672.2 128.8v11.9h34.4v-11.9h-10V94.7c0-13-6.8-20.4-18.7-20.4 -9.7 0-16.9 5-22.2 9.7 -2.8-6.3-8.6-9.7-16.7-9.7 -9 0-15.7 4.2-20.7 8.4v-6.8h-23.7v11.9h9.8v41h0.8v11.9H629v-11.9h-10V93.7c6.1-5.3 11-7.5 16.3-7.5 5.8 0 8.2 2.8 8.2 9.5v33.1h-10v11.9h34.4v-11.9h-10V93.5c5.7-5 10.9-7.3 16.1-7.3 5.8 0 8.2 2.8 8.2 9.5v33.1H672.2z"></path>
                        <path class="st0" d="M747 74.2c-7.6 0-14.1 2.6-19.8 8v-6.4h-24.6v12.1h10.7v70h-10.7V170h37.9v-12.1h-12.6v-21.1c5.1 3.8 10.9 5.6 17.4 5.6 18 0 30.1-13.8 30.1-34.4C775.5 87.8 764 74.2 747 74.2zM760.6 108.3c0 14.1-6.6 22.1-18.2 22.1 -5.6 0-10.5-1.9-14.5-5.6V93.3c5-4.9 10-7.2 15.7-7.2C759.3 86.2 760.6 103.1 760.6 108.3z"></path>
                    </svg>
                </a>
                <a
                    href="https://in.usembassy.gov/embassy-consulates/jobs/chennai/" // Replace with your SVG link
                    target="_blank"
                    rel="noopener noreferrer">
                    <img alt="United States of America, Department of State"
                        title="United States of America, Department of State"
                        src="https://in.usembassy.gov/wp-content/themes/cms3/dist/images/dos-logo-light.png"
                        className="w-16 h-16 object-cover"
                    />
                </a>
                <a
                    href="https://www.cppr.in/" // Replace with your SVG link
                    target="_blank"
                    rel="noopener noreferrer">
                    <img class="logo-main  scale-with-grid"
                        src="https://www.cppr.in/wp-content/uploads/2020/07/CPPR-logo.jpg"
                        alt="Centre for Public Policy Research (CPPR)"
                        className="w-18 h-16 object-cover" />
                </a>
            </div>
            <path d="M8.622 0 4.664 9.857H11.5L7.416 16l3.957-9.857H2.5z" />
        </div >
    );
};

export default PoweredBy;


