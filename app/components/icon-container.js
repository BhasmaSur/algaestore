import React from 'react'

import PropTypes from 'prop-types'

const IconContainer = (props) => {
  return (
    <>
      <div className={`icon-container-icon-container ${props.rootClassName} `}>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon-closed"
          className="icon-container-icon"
        >
          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon-open"
          className="icon-container-icon2"
        >
          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <style jsx>
        {`
          .icon-container-icon-container {
            position: relative;
          }
          .icon-container-icon {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .icon-container-icon2 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
        `}
      </style>
    </>
  )
}

IconContainer.defaultProps = {
  rootClassName: '',
}

IconContainer.propTypes = {
  rootClassName: PropTypes.string,
}

export default IconContainer
