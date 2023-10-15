'use client';

import React from 'react';

// PoweredBy.js

const Sponsers = ({sponsersObject}) => {
  const imageCommonProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'w-1/4 h-1/4 object-cover', // Fixed width and height for all images
  };

  return (
    <div className="text-center py-4">
      <p className="text-dark text-lg mb-4 lg:text-5xl lg:mb-20">{sponsersObject.poweredBy}:</p>
      <div className="flex justify-center items-center">
        <div className="flex space-x-6 justify-center items-center">
        <a
          href="https://techcamp.america.gov/techcamps/techcamp-kochi/" // Replace with your SVG link
          {...imageCommonProps}
          >
            <img
              class="logo-main  scale-with-grid"
              src="/TechCamp.png"
              alt="Centre for Public Policy Research (CPPR)"
              className="mt-3"
            />
          </a>
          <a
            href="https://in.usembassy.gov/embassy-consulates/jobs/chennai/" // Replace with your SVG link
            {...imageCommonProps}
          >
            <img
              alt="United States of America, Department of State"
              title="United States of America, Department of State"
              src="/uscg-chennai-seal.png"
            />
          </a>
          <a
            href="https://www.cppr.in/" // Replace with your SVG link
            {...imageCommonProps}
          >
            <img
              class="logo-main  scale-with-grid"
              src="/CPPR.png"
              alt="Centre for Public Policy Research (CPPR)"
              className="mt-3"
            />
          </a>
        </div>
      </div>
      <path d="M8.622 0 4.664 9.857H11.5L7.416 16l3.957-9.857H2.5z" />
    </div>
  );
};

export default Sponsers;
