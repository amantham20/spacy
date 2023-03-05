
import './App.css';
import HomepageHeader from './HomepageHeader/HomepageHeader';
import HomepageFooter from './HomepageFooter/HomepageFooter';
import { Link } from 'react-router-dom';

function App() {
  return (
    // write tailwind code from here
    <div className="App ">
      <HomepageHeader />

      {/* Hero section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-7xl">
          <h1 className="text-5xl text-white font-extrabold tracking-tight">
            Welcome to Spacebook!
          </h1>
          <p className="mt-5 text-xl text-gray-400">
            Connect with other space enthusiasts and share your love for the cosmos.
          </p>
          <Link
            to="/signup"
            className="mt-8 bg-indigo-500 border border-transparent rounded-md shadow-sm py-3 px-4 inline-flex justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign up for free
          </Link>
        </div>
      </div>


      {/* Features section */}
      <div className="bg-gray-800 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Discover Spacebook's features
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              From sharing your favorite space photos to connecting with other space enthusiasts, Spacebook has everything you need to stay up-to-date on the latest space news and events.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-white">
                    Share your favorite space photos
                  </h3>
                  <div className="mt-2 text-sm text-gray-400">
                    <p>
                      Show off your love for the cosmos by sharing your favorite photos of stars, galaxies, and more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-white">
                    Connect with other space enthusiasts
                  </h3>
                  <div className="mt-2 text-sm text-gray-400">
                    <p>
                      Make new friends and connect with other people who share your passion for space exploration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-white">
                    Stay up-to-date on space news and events
                  </h3>
                  <div className="mt-2 text-sm text-gray-400">
                    <p>
                      Get the latest news and updates on space missions, launches, and discoveries, all in one place.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Join SPACY today
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Don't miss out on the fun! Sign up for free and start exploring the cosmos with other space enthusiasts.
            </p>
            <Link
              to="/signup"
              className="mt-8 bg-indigo-500 border border-transparent rounded-md shadow-sm py-3 px-4 inline-flex justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up for free
            </Link>

          </div>
        </div>
      </div>




    <HomepageFooter />

    </div>
  );
}

export default App;
