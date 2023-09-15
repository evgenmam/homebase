import React from 'react'

// add filtering fields to this banner for min and max values of housingAppreciation2yr
const Banner = () => (
    <div className='banner'>
      <div className='links'>
        <a className='nav-link' href='https://github.com/evgenmam/homebase' target='_blank'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
        </a>
      </div>

      <svg
        className='banner-svg'
        width='292'
        height='39'
        viewBox='0 0 292 39'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2.672 38C2.128 38 1.68 37.824 1.328 37.472C0.976003 37.12 0.800003 36.672 0.800003 36.128V2.384C0.800003 1.84 0.976003 1.392 1.328 1.04C1.68 0.687997 2.128 0.511997 2.672 0.511997C3.216 0.511997 3.664 0.687997 4.016 1.04C4.368 1.392 4.544 1.84 4.544 2.384V17.36H27.968V2.384C27.968 1.84 28.144 1.392 28.496 1.04C28.848 0.687997 29.296 0.511997 29.84 0.511997C30.384 0.511997 30.832 0.687997 31.184 1.04C31.536 1.392 31.712 1.84 31.712 2.384V36.128C31.712 36.672 31.536 37.12 31.184 37.472C30.832 37.824 30.384 38 29.84 38C29.296 38 28.848 37.824 28.496 37.472C28.144 37.12 27.968 36.672 27.968 36.128V20.72H4.544V36.128C4.544 36.672 4.368 37.12 4.016 37.472C3.664 37.824 3.216 38 2.672 38Z'
          fill='white'
        />
        <path
          d='M58.628 38.48C55.844 38.48 53.284 38 50.948 37.04C48.612 36.08 46.58 34.736 44.852 33.008C43.156 31.28 41.828 29.248 40.868 26.912C39.94 24.576 39.476 22.016 39.476 19.232C39.476 16.48 39.94 13.936 40.868 11.6C41.828 9.264 43.156 7.232 44.852 5.504C46.58 3.776 48.612 2.432 50.948 1.472C53.284 0.511997 55.844 0.0319977 58.628 0.0319977C61.38 0.0319977 63.924 0.511997 66.26 1.472C68.596 2.432 70.628 3.776 72.356 5.504C74.084 7.232 75.412 9.264 76.34 11.6C77.3 13.936 77.78 16.48 77.78 19.232C77.78 22.016 77.3 24.576 76.34 26.912C75.412 29.248 74.084 31.28 72.356 33.008C70.628 34.736 68.596 36.08 66.26 37.04C63.924 38 61.38 38.48 58.628 38.48ZM58.628 34.928C60.836 34.928 62.884 34.544 64.772 33.776C66.66 32.976 68.292 31.872 69.668 30.464C71.076 29.024 72.164 27.36 72.932 25.472C73.7 23.552 74.084 21.472 74.084 19.232C74.084 17.024 73.7 14.976 72.932 13.088C72.164 11.168 71.076 9.504 69.668 8.096C68.292 6.656 66.66 5.552 64.772 4.784C62.884 3.984 60.836 3.584 58.628 3.584C56.388 3.584 54.324 3.984 52.436 4.784C50.548 5.552 48.9 6.656 47.492 8.096C46.116 9.504 45.044 11.168 44.276 13.088C43.508 14.976 43.124 17.024 43.124 19.232C43.124 21.472 43.508 23.552 44.276 25.472C45.044 27.36 46.116 29.024 47.492 30.464C48.9 31.872 50.548 32.976 52.436 33.776C54.324 34.544 56.388 34.928 58.628 34.928Z'
          fill='white'
        />
        <path
          d='M87.3751 38C86.8631 38 86.4151 37.824 86.0311 37.472C85.6791 37.088 85.5031 36.64 85.5031 36.128V2.384C85.5031 1.84 85.6791 1.392 86.0311 1.04C86.4151 0.687997 86.8631 0.511997 87.3751 0.511997C88.1431 0.511997 88.7031 0.831997 89.0551 1.472L105.231 33.632H103.599L119.487 1.472C119.871 0.831997 120.431 0.511997 121.167 0.511997C121.679 0.511997 122.111 0.687997 122.463 1.04C122.815 1.392 122.991 1.84 122.991 2.384V36.128C122.991 36.64 122.815 37.088 122.463 37.472C122.111 37.824 121.679 38 121.167 38C120.623 38 120.159 37.824 119.775 37.472C119.423 37.088 119.247 36.64 119.247 36.128V7.232L120.063 7.28L105.903 36.224C105.551 36.832 105.007 37.136 104.271 37.136C103.471 37.136 102.895 36.752 102.543 35.984L88.2871 7.472L89.2471 7.232V36.128C89.2471 36.64 89.0551 37.088 88.6711 37.472C88.3191 37.824 87.8871 38 87.3751 38Z'
          fill='white'
        />
        <path
          d='M134.484 38C133.94 38 133.493 37.824 133.141 37.472C132.789 37.12 132.613 36.672 132.613 36.128V2.384C132.613 1.84 132.789 1.392 133.141 1.04C133.493 0.687997 133.94 0.511997 134.484 0.511997H156.997C157.509 0.511997 157.941 0.687997 158.293 1.04C158.677 1.36 158.868 1.792 158.868 2.336C158.868 2.816 158.677 3.232 158.293 3.584C157.941 3.936 157.509 4.112 156.997 4.112H136.357V17.36H151.381C151.925 17.36 152.373 17.536 152.725 17.888C153.077 18.24 153.253 18.672 153.253 19.184C153.253 19.696 153.077 20.128 152.725 20.48C152.373 20.832 151.925 21.008 151.381 21.008H136.357V34.4H156.997C157.509 34.4 157.941 34.576 158.293 34.928C158.677 35.28 158.868 35.696 158.868 36.176C158.868 36.72 158.677 37.168 158.293 37.52C157.941 37.84 157.509 38 156.997 38H134.484Z'
          fill='white'
        />
        <path
          d='M167.959 38C167.351 38 166.839 37.84 166.423 37.52C166.039 37.168 165.847 36.704 165.847 36.128V2.384C165.847 1.84 166.023 1.392 166.375 1.04C166.727 0.687997 167.175 0.511997 167.719 0.511997H179.383C181.303 0.511997 183.031 0.927997 184.567 1.76C186.135 2.56 187.367 3.664 188.263 5.072C189.191 6.48 189.655 8.112 189.655 9.968C189.655 11.696 189.191 13.232 188.263 14.576C187.335 15.92 186.119 16.944 184.615 17.648C186.759 18.224 188.487 19.312 189.799 20.912C191.111 22.48 191.767 24.48 191.767 26.912C191.767 29.088 191.271 31.008 190.279 32.672C189.287 34.336 187.911 35.648 186.151 36.608C184.423 37.536 182.439 38 180.199 38H167.959ZM169.591 34.4H180.199C181.735 34.4 183.095 34.096 184.279 33.488C185.463 32.88 186.391 32.016 187.063 30.896C187.735 29.776 188.071 28.448 188.071 26.912C188.071 25.472 187.735 24.224 187.063 23.168C186.391 22.08 185.463 21.248 184.279 20.672C183.095 20.064 181.735 19.76 180.199 19.76H169.591V34.4ZM169.591 16.16H179.383C181.303 16.16 182.887 15.616 184.135 14.528C185.383 13.44 186.007 11.92 186.007 9.968C186.007 8.048 185.383 6.592 184.135 5.6C182.887 4.608 181.303 4.112 179.383 4.112H169.591V16.16Z'
          fill='white'
        />
        <path
          d='M244.726 38.48C242.678 38.48 240.774 38.192 239.014 37.616C237.286 37.008 235.782 36.16 234.502 35.072C233.222 33.984 232.246 32.72 231.574 31.28C231.318 30.768 231.302 30.304 231.526 29.888C231.782 29.44 232.198 29.136 232.774 28.976C233.222 28.848 233.654 28.896 234.07 29.12C234.518 29.344 234.854 29.68 235.078 30.128C235.558 31.056 236.262 31.888 237.19 32.624C238.118 33.36 239.222 33.936 240.502 34.352C241.782 34.736 243.19 34.928 244.726 34.928C246.422 34.928 247.926 34.656 249.238 34.112C250.55 33.536 251.574 32.72 252.31 31.664C253.078 30.576 253.462 29.264 253.462 27.728C253.462 25.776 252.742 24.096 251.302 22.688C249.862 21.28 247.606 20.384 244.534 20C240.79 19.552 237.862 18.4 235.75 16.544C233.638 14.656 232.582 12.352 232.582 9.632C232.582 7.68 233.094 5.984 234.118 4.544C235.174 3.104 236.614 2 238.438 1.232C240.262 0.431997 242.358 0.0319977 244.726 0.0319977C246.486 0.0319977 248.086 0.319997 249.526 0.895995C250.966 1.44 252.214 2.176 253.27 3.104C254.358 4 255.238 4.992 255.91 6.08C256.23 6.592 256.326 7.088 256.198 7.568C256.102 8.048 255.83 8.416 255.382 8.672C254.902 8.896 254.406 8.928 253.894 8.768C253.414 8.608 253.046 8.304 252.79 7.856C252.31 7.12 251.702 6.432 250.966 5.792C250.262 5.12 249.398 4.592 248.374 4.208C247.35 3.824 246.118 3.616 244.678 3.584C242.15 3.584 240.118 4.128 238.582 5.216C237.046 6.272 236.278 7.824 236.278 9.872C236.278 10.96 236.566 11.968 237.142 12.896C237.718 13.792 238.662 14.576 239.974 15.248C241.318 15.888 243.11 16.368 245.35 16.688C249.35 17.264 252.31 18.496 254.23 20.384C256.182 22.24 257.158 24.672 257.158 27.68C257.158 29.408 256.838 30.944 256.198 32.288C255.59 33.632 254.71 34.768 253.558 35.696C252.438 36.592 251.11 37.28 249.574 37.76C248.07 38.24 246.454 38.48 244.726 38.48Z'
          fill='white'
        />
        <path
          d='M266.86 38C266.316 38 265.868 37.824 265.516 37.472C265.164 37.12 264.988 36.672 264.988 36.128V2.384C264.988 1.84 265.164 1.392 265.516 1.04C265.868 0.687997 266.316 0.511997 266.86 0.511997H289.372C289.884 0.511997 290.315 0.687997 290.667 1.04C291.051 1.36 291.244 1.792 291.244 2.336C291.244 2.816 291.051 3.232 290.667 3.584C290.315 3.936 289.884 4.112 289.372 4.112H268.731V17.36H283.756C284.3 17.36 284.748 17.536 285.1 17.888C285.452 18.24 285.628 18.672 285.628 19.184C285.628 19.696 285.452 20.128 285.1 20.48C284.748 20.832 284.3 21.008 283.756 21.008H268.731V34.4H289.372C289.884 34.4 290.315 34.576 290.667 34.928C291.051 35.28 291.244 35.696 291.244 36.176C291.244 36.72 291.051 37.168 290.667 37.52C290.315 37.84 289.884 38 289.372 38H266.86Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M212.63 1.00022C213.422 1.01192 214.133 1.49033 214.442 2.22001L228.842 36.22C229.272 37.2371 228.797 38.4109 227.78 38.8416C226.763 39.2724 225.589 38.7971 225.158 37.78L212.527 7.95545L198.818 37.834C198.357 38.838 197.17 39.2784 196.166 38.8178C195.162 38.3572 194.722 37.1699 195.182 36.166L210.782 2.16596C211.113 1.44572 211.837 0.988515 212.63 1.00022Z'
          fill='#708DD8'
        />
      </svg>
    </div>
  )
  
  export default Banner
