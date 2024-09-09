import React from 'react'
import logo from '../../assets/logo.jpg';
import logo2 from '../../assets/logo2.png';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
import cornerImage from '../../assets/image7.jpg';
import img8 from '../../assets/image8.jpg';
import img9 from '../../assets/image9.png';
import img10 from '../../assets/image10.png';
import img11 from '../../assets/img11.png';
import img12 from '../../assets/img12.png';
import img13 from '../../assets/img13.png';
import img14 from '../../assets/img14.png';
import img15 from '../../assets/img15.png';
import img16 from '../../assets/img16.png';

const LandingPage = () => {
    return (
        <div className="flex flex-col">
            {/* Navbar */}
            <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 pt-4">

                <img src={logo} alt="Logo" className="w-32" />

                <div className="flex-1"></div> {/* This will take up the remaining space between logo and the links */}

                <ul className="flex space-x-6">
                    <li>
                        <a href="#" className="hover:text-gray-400 text-gray-700">Login</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-400 text-gray-700">SignUp</a>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex row flex-col items-start sm:items-center justify-center mt-24 mx-auto ">
                <h1 className="text-5xl font-bold text-start sm:text-start md:text-start lg:text-center px-6 text-black mb-4   ">
                    Train like a
                    <br className="md:inline sm:inline lg:hidden" />
                    <span className="text-blue-500"> Grand Master,</span>
                    <br className="md:inline sm:inline lg:inline" />
                    Learn from
                    <br className="md:inline sm:inline lg:hidden" />
                    <span> the</span> <span className="text-blue-500">Best</span>
                </h1>



                {/* Image Row */}

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-center items-center px-14
               transform translate-x-[-5%] sm:translate-x-[-5%] ">
                    <div className="flex flex-col items-center sm:translate-x-[20%]">
                        <img src={image1} alt="Training Image 1"
                            className="h-40 w-full object-contain" />
                        <h1 className="text-xl font-bold text-blue-500 mb-4 text-center">Personalized Coaching</h1>
                        <p className="font-poppins text-black text-sm font-normal leading-5 text-center">
                            Your dedicated chess mentor to assist you<br></br>
                            on your path to becoming a stronger<br></br>
                            chess player
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center transform sm:translate-x-[20%] ">
                        <img src={image2} alt="Training Image 2"
                            className="h-40 w-full object-contain" />
                        <h1 className="text-xl font-bold text-blue-500 mb-4 text-center">Exclusive Bootcamps</h1>
                        <p className="font-poppins text-black text-sm font-normal leading-5 text-center">
                            Crafted in Collaboration with Top Chess<br></br> Coaches to Unleash Your<br></br> Full Potential
                        </p>
                    </div>

                    <div className="flex flex-col items-center transform sm:translate-x-[20%]">
                        <img src={image3} alt="Training Image 3"
                            className="h-40 w-full object-contain" />
                        <h1 className="text-xl font-bold text-blue-500 mb-4 text-center">Play Chess & Puzzles</h1>
                        <p className="font-poppins text-black text-sm font-normal leading-5 text-center">
                            Play with AI, online or with your friends<br></br> & solve Puzzles to showcase your <br></br>skills
                        </p>
                    </div>

                    <div className="flex flex-col items-center transform sm:translate-x-[20%]">
                        <img src={image4} alt="Training Image 4"
                            className="h-40 w-full object-contain" />
                        <h1 className="text-xl font-bold text-blue-500 mb-4 text-center">Exciting Tournaments</h1>
                        <p className="font-poppins text-black text-sm font-normal leading-5 text-center">
                            The ultimate arena to showcase your <br></br>strategies, and strive for the<br></br> top rank
                        </p>
                    </div>
                </div>

                {/* Additional Centered Images */}
                <div className="flex flex-col items-center mt-8 w-full">
                    <img src={image5} alt="Extra Image 1" className="md:w-[20%] w-[40%] h-[40]" />
                    <img src={image6} alt="Extra Image 2" className="" />
                </div>
                {/* Text Section */}
                


                {/* Text Section */}
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-12 text-sm sm:text-base lg:space-x-8 lg:text-left text-center">
  <div className="w-full sm:p-6 max-w-screen-xl mb-8 lg:mb-0 text-left px-4 lg:px-0  transform translate-x-[-2%] sm:translate-x-[-2%] ">
    <h2 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4">
      Guidance From Chess Experts
    </h2>
    <p className="font-poppins  text-black text-sm sm:text-base text-lg lg:text-2xl leading-6 lg:leading-8 sm:leading-loose sm:mb-6">
      Join our exclusive bootcamps hosted by renowned chess<br />
      experts. Dive deep into advanced strategies and tactics to<br />
      dominate the board.
    </p><br/>
    <button className="bg-blue-500 font-bold text-white py-2 px-6 w-full lg:w-auto shadow-lg hover:bg-blue-600 transition">
      Check Bootcamps
    </button>
  </div>
  {/* Image Section */}
  <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
    <img
      src={cornerImage}
      alt="Chess Experts"
      className="w-full object-cover"
    />
  </div>
</div>



                {/* Info Section with Separation Lines */}
                <div className="flex justify-around mt-12 text-center">
                    <div className="px-8">
                        <h3 className="text-xl font-bold text-gray-800">20+ Coaches</h3>
                        <p className="text-gray-500">Top rated</p>
                    </div>
                    <div className="border-l-2 border-gray-300 px-8">
                        <h3 className="text-xl font-bold text-gray-800">3+ bootcamps</h3>
                        <p className="text-gray-500">All levels</p>
                    </div>
                    <div className="border-l-2 border-gray-300 px-8">
                        <h3 className="text-xl font-bold text-gray-800">12+ Sessions</h3>
                        <p className="text-gray-500">Per bootcamp</p>
                    </div>
                </div>

                <div className="w-full mt-16">
                    <hr className="border-t border-gray-300 w-full" />
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between mt-12 lg:space-x-8">
                    {/* Image Section */}
                    <div className="lg:w-1/2">
                        <img
                            src={img8}
                            alt="Chess Experts"
                            className="object-cover"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full max-w-screen-xl mb-8 lg:mb-0 text-left px-4 lg:px-0  transform translate-x-[-2%] sm:translate-x-[-2%] ">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">Learn from a pro (in &lt; 3 steps)</h2>
                        <p className="font-poppins text-black  text-sm sm:text-base text-lg lg:text-2xl leading-6 lg:leading-8 mb-6">
                            Unlock your full chess potential with personalized coaching<br />
                            from world-class chess masters. Our tailored sessions will<br />
                            take your game to new heights
                        </p><br></br>
                        <button className="bg-blue-500 font-bold text-white py-2 px-6 w-full lg:w-auto shadow-lg hover:bg-blue-600 transition">
                            Start Learning
                        </button>
                    </div>
                </div>
                <div className="flex justify-around mt-12 text-center">
                    <div className="px-8">
                        <h3 className="text-xl font-bold text-gray-800">Top Coaches</h3>
                        <p className="text-gray-500">1500+ FIDE</p>
                    </div>
                    <div className="border-l-2 border-gray-300 px-8">
                        <h3 className="text-xl font-bold text-gray-800">Book Instantly</h3>
                        <p className="text-gray-500">24/7 availability</p>
                    </div>
                    <div className="border-l-2 border-gray-300 px-8">
                        <h3 className="text-xl font-bold text-gray-800">1v1 Coaching</h3>
                        <p className="text-gray-500">Personalized excellence</p>
                    </div>
                </div>
                <div className="w-full mt-16">
                    <hr className="border-t border-gray-300 w-full" />
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center text-sm text-center  transform translate-x-[-2%] sm:translate-x-[-2%] ">
                    {/* Text Content */}
                    <div className="w-full max-w-screen-xl mb-8 lg:mb-0 text-left px-4 lg:px-0">
                        <h2 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4">Play, Master, Conquer!</h2>
                        <p className="font-poppins  text-black text-sm sm:text-base text-lg lg:text-2xl leading-6 lg:leading-8 mb-6">
                            Compete with players from around the world in thrilling <br />
                            chess tournaments. Showcase your skills and climb the <br />
                            rankings.
                        </p><br></br>
                        <button className="bg-blue-500 font-bold text-white py-2 px-6 w-full lg:w-auto shadow-lg hover:bg-blue-600 transition">
                            Join The Battle
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <img
                            src={img9}
                            alt="Chess Experts"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
                {/* footer section */}



















                

                <div className="relative w-full mt-8 flex justify-center items-center  transform translate-x-[-1%] sm:translate-x-[-1%] ">
                    {/* Main Background Image */}
                    <img
                        src={img10}
                        alt="Background"
                        className="w-full h-[200px] md:flex hidden md:w-[1300px] md:h-[300px] object-cover"
                    />

                    {/* Text Container for Large Screens */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center hidden md:block">
                        <h2 className="text-lg md:text-3xl font-bold italic underline text-blue-600 mb-2 md:mb-4">
                            WHY PLAYERORBIT?
                        </h2>
                        <p className="text-sm md:text-xl font-bold italic">
                            Personalized Coaching for Rapid Improvement<br /><br />
                            Exclusive Bootcamps with Top Experts<br /><br />
                            Thrilling Chess Tournaments<br /><br />
                            Join a Growing Community of Chess and eSports<br />Enthusiasts
                        </p>
                    </div>

                    {/* Mobile and Small Screen View */}
                    <div className="block md:hidden w-full p-4 bg-blue-50 rounded-md text-left">
                        
                        <h2 className="text-xl font-bold text-blue-600 text-center underline mb-4">WHY PLAYERORBIT?</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="mr-2 text-xl">🔒</span>
                                <span className="text-sm">Zero ads, No spam messages and 100% protection of User's data</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-xl">📈</span>
                                <span className="text-sm">Personalized Coaching for Rapid Improvement</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-xl">👥</span>
                                <span className="text-sm">Exclusive Bootcamps with Top Experts</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-xl">🏆</span>
                                <span className="text-sm">Thrilling Chess Tournaments</span>
                            </li>
                        </ul>
                    </div>

                    {/* Left Overlay Image (Visible only on lg screens) */}
                    <div className="hidden lg:block left-40 absolute transform translate-x-[-30%]">
                        <img
                            src={img15}
                            alt="Overlay Left"
                            className="w-[200px] h-[300px] object-cover"
                        />
                    </div>

                    {/* Right Overlay Image (Visible only on lg screens) */}
                    <div className="hidden lg:block right-40 absolute transform translate-x-[30%]">
                        <img
                            src={img16}
                            alt="Overlay Right"
                            className="w-[200px] h-[300px] object-cover"
                        />
                    </div>
                </div>



            </div><br></br>
        </div>
    )
}

export default LandingPage;