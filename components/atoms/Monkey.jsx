import React from 'react'
import PropTypes from 'prop-types'

export const Monkey = ({ size, eyeColor }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 384 458"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M169.685 59.2019C147.217 27.2422 129.117 17.2795 122.875 16.2931"
        stroke="#4A2407"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M188.772 69.495C197.649 31.4495 193.027 11.3127 189.606 5.99999"
        stroke="#4A2407"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M199.023 63.1781C230.944 40.6533 240.874 22.5361 241.85 16.2931"
        stroke="#4A2407"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M328.428 245.88C329.523 254.074 331.087 281.869 340.151 286.395C369.512 301.053 379.81 232.206 383.07 215.624C386.314 199.124 381.815 160.298 357.701 169.632C356.907 169.937 356.338 170.316 355.931 170.736C345.408 166.025 333.33 167.235 329.49 180.592C323.802 200.386 325.744 225.85 328.428 245.88Z"
        fill="#D7C1A5"
      />
      <path
        d="M54.508 180.592C50.6725 167.235 38.5887 166.025 28.0719 170.736C27.6648 170.317 27.0952 169.937 26.3019 169.632C2.1878 160.298 -2.31662 199.123 0.931847 215.624C4.19122 232.206 14.4899 301.052 43.8515 286.395C52.9171 281.869 54.4742 254.076 55.5741 245.88C58.2595 225.85 60.2018 200.386 54.508 180.592Z"
        fill="#D7C1A5"
      />
      <path
        d="M355.39 209.706C355.39 119.044 282.423 45.5491 192.416 45.5491C102.413 45.5491 29.4458 112.147 29.4458 209.706C29.4458 391.882 102.412 373.861 192.416 373.861C282.423 373.861 355.39 391.882 355.39 209.706Z"
        fill="#4A2407"
      />
      <path
        d="M58.1922 266.248C58.1922 350.512 118.543 418.819 192.984 418.819C267.425 418.819 327.775 350.512 327.775 266.248C327.775 181.982 327.056 75.4439 192.398 108.617C39.8831 75.4439 58.1922 181.982 58.1922 266.248Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M165.136 220.784C165.136 192.812 148.066 170.133 127.006 170.133C105.945 170.133 88.8706 192.812 88.8706 220.784C88.8706 248.76 105.945 271.438 127.006 271.438C148.066 271.438 165.136 248.761 165.136 220.784Z"
        fill="white"
      />
      <path
        d="M258.47 271.435C279.529 271.435 296.601 248.758 296.601 220.784C296.601 192.811 279.529 170.133 258.47 170.133C237.411 170.133 220.34 192.811 220.34 220.784C220.34 248.758 237.411 271.435 258.47 271.435Z"
        fill="white"
      />
      <path
        d="M114.117 238.363C114.117 252.151 121.005 263.327 129.506 263.327C138.002 263.327 144.89 252.151 144.89 238.363C144.89 224.577 138.001 213.402 129.506 213.402C121.005 213.402 114.117 224.577 114.117 238.363Z"
        fill={eyeColor}
      />
      <path
        d="M255.256 263.327C263.755 263.327 270.645 252.151 270.645 238.363C270.645 224.576 263.755 213.399 255.256 213.399C246.757 213.399 239.867 224.576 239.867 238.363C239.867 252.151 246.757 263.327 255.256 263.327Z"
        fill={eyeColor}
      />
      <path
        d="M359.442 353.068C359.442 410.535 284.662 457.121 192.415 457.121C100.174 457.121 25.394 410.535 25.394 353.068C25.394 295.604 100.174 249.018 192.415 249.018C284.661 249.018 359.442 295.604 359.442 353.068Z"
        fill="url(#paint1_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M233.285 394.43C229.491 394.929 225.512 395.194 221.411 395.194C201.441 395.194 184.362 388.9 177.424 380C157.049 382.679 142 392.092 142 403.292C142 416.578 163.176 427.348 189.299 427.348C215.422 427.348 236.598 416.578 236.598 403.292C236.598 400.162 235.423 397.172 233.285 394.43Z"
        fill="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="192.641"
          y1="102.406"
          x2="192.641"
          y2="418.819"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D7C1A5" />
          <stop offset="1" stopColor="#766043" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="192.418"
          y1="249.018"
          x2="192.418"
          y2="457.121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D7C1A5" />
          <stop offset="1" stopColor="#766043" />
        </linearGradient>
      </defs>
    </svg>
  )
}

Monkey.propTypes = {
  size: PropTypes.number,
  eyeColor: PropTypes.string,
}