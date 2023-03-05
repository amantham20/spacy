import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

import HomepageHeader from './HomepageHeader/HomepageHeader';
import HomepageFooter from './HomepageFooter/HomepageFooter';
const About = () => {
  return (
    <>
    <HomepageHeader />
    <div>
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-white text-4xl font-bold mb-4">Space Explorers</h1>
        <p className="text-gray-400 text-center mb-8">
          We are a team of space enthusiasts who love to explore the unknown and share our findings with the world.
        </p>
        
      </div>
      <div className="flex flex-wrap items-center lg:w-1/2">
        {/* centers all the items inside */}
        <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg m-4 p-8">
          
            <img src="https://media.licdn.com/dms/image/C5103AQGHD7LSpP8Byg/profile-displayphoto-shrink_400_400/0/1581493392845?e=1683763200&v=beta&t=0Mj6Bk4hwCsSh4RREbEY45A8ihe_voN-qr20msyxjzE" className="rounded-full w-32 h-32 mb-4" />

          <h2 className="text-white text-xl font-bold mb-4">Rajmeet Bob Singh Chandok</h2>


          <p className="text-gray-400 mb-4">
          A motivated and passionate individual with a strong interest in creating an impact through technology and artificial intelligence. Currently a sophomore at Michigan State University, and helping various student ventures by creating responsive mobile and web applications.
          </p>
          

          <div className="flex space-x-4 mb-8">

          <a href="https://www.linkedin.com/in/rajmeet-chandok/" className="text-gray-400 hover:text-white">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <SiGithub className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FiMail className="w-6 h-6" />
          </a>
        </div>
        </div>
    <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg m-4 p-8">
    <img src="https://media.licdn.com/dms/image/C5603AQHveOz2griuOw/profile-displayphoto-shrink_400_400/0/1657648443680?e=1683763200&v=beta&t=EcknsbXUvmyT7mdzJ7Nu63DY3KH6tgKXZGpm-6SQx6s" className="rounded-full w-32 h-32 mb-4" />

      <h2 className="text-white text-xl font-bold mb-4">Aman Dhruva Thamminana</h2>
      <p className="text-gray-400 mb-4">
      Student by day and developer by night; Currently pursuing a major in Computer Science, and Mathematics and a Minor in Computational Mathematics, Science & Engineering (CMSE), and Entrepreneurship & Innovation at Michigan State University. I fell in love with computers at first sight. My main interests include Algorithms and Computer theory, Cloud technology, and Machine Learning/Artificial intelligence. I also dabble in other aspects of Business, Engineering, web and mobile development.

I'm involved in a variety of extracurriculars on campus, including AI club, Entrepreneurship club, and the Engineering Student Council.

I also love spontaneously traveling, listening to overplayed music and consuming too much coffee.      </p>


      <div className="flex space-x-4 mb-8 mt-5">

<a href="https://www.linkedin.com/in/rajmeet-chandok/" className="text-gray-400 hover:text-white">
  <FaLinkedin className="w-6 h-6" />
</a>
<a href="#" className="text-gray-400 hover:text-white">
  <FaInstagram className="w-6 h-6" />
</a>
<a href="#" className="text-gray-400 hover:text-white">
  <SiGithub className="w-6 h-6" />
</a>
<a href="#" className="text-gray-400 hover:text-white">
  <FiMail className="w-6 h-6" />
</a>
</div>

      
    </div>
  </div>
    </div>
</div>
<HomepageFooter />
</>

  )
}

export default About