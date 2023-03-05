import React from 'react'

const HomepageFooter = () => {
  return (
    <footer className="bg-gray-900">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div className="px-5 py-2">
          <a href="#" className="text-base text-gray-500 hover:text-gray-400">
            About
          </a>
        </div>

        <div className="px-5 py-2">
          <a href="#" className="text-base text-gray-500 hover:text-gray-400">
            Blog
          </a>
        </div>

        <div className="px-5 py-2">
          <a href="#" className="text-base text-gray-500 hover:text-gray-400">
            Careers
          </a>
        </div>

        <div className="px-5 py-2">
          <a href="#" className="text-base text-gray-500 hover:text-gray-400">
            Contact
          </a>
        </div>
      </nav>

      <div className="mt-8 flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-gray-300">
          <span className="sr-only">Facebook</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zM7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm4.14 10.72h1.44v4.1h2.01v-4.1h1.44v-1.87h-1.44v-.96c0-.47.13-.79.8-.79h.64v-1.46a10.89 10.89 0 0 0-1.17-.06c-1.15 0-1.94.69-1.94 1.95v1.27h-1.44v1.87z"
            />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.46 5.04c-.8.36-1.64.6-2.52.71a4.26 4.26 0 0 0 1.86-2.35 8.5 8.5 0 0 1-2.68
                1.02 4.25 4.25 0 0 0-7.3 3.8A12.03 12.03 0 0 1 3.5 3.9a4.24 4.24 0 0 0 1.3 5.7 4.2 4.2 0 0 1-1.9-.52v.05a4.25 4.25 0 0 0 3.45
                4.2 4.25 4.25 0 0 1-1.9.07 4.25 4.25 0 0 0 4 2.95A8.5 8.5 0 0 1 2 18.4a12 12 0 0 0 6.5 1.9c7.8 0 12.1-6.5 12.1-12.1 0-.18 0-.36-.02-.54a8.7
                8.7 0 0 0 2.1-2.2l-.04-.02z"
                />
            </svg>
          </a>

          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.25a9.77 9.77 0 0 0-3.1 19.09c.49.09.67-.21.67-.48v-1.68c-2.74.6-3.32-1.29-3.32-1.29-.45-1.14-1.09-1.44-1.09-1.44-.89-.61.07-.6.07-.6.98.07 1.49 1 1.49 1 .87 1.47 2.28 1.05 2.83.8.08-.62.35-1.05.63-1.29-2.2-.25-4.51-1.11-4.51-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.64.63.7 1.03 1.59 1.03 2.68 0 3.84-2.32 4.68-4.53 4.93.35.31.67.92.67 1.86v2.76c0 .27.18.58.68.48A9.77 9.77 0 0 0 12 2.25z"
              />
            </svg>
          </a>
        </div>

        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2023 SPACY. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default HomepageFooter