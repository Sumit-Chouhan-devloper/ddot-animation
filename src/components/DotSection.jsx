import React, { useState, useEffect } from "react";
import circles from "../assets/images/Group 82.svg";
import circlesSm from "../assets/images/how-it-works-sm.png"
import arrow from "../assets/images/svg/arrow.svg";

const DotSection = () => {
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  const handleButtonClick = () => {
    // Toggle the animation state
    setIsAnimationStarted(!isAnimationStarted);
 
  };
  

  return (
    <>
      <div className="bg-slate-600 py-20">
        <div className="container mx-auto min-h-screen flex justify-center items-center">
          <div
            className="relative dot-section"
          >
            <p
              className={`dot-text absolute lg:top-[22%] text-white text-[14px] lg:text-[16px] left-[43%] lg:left-[unset] top-[4%] lg:right-[15%] ${
                isAnimationStarted ? "animate-text" : ""
              } text-1`}
            >
              1. Generate Key
            </p>

            <p
              className={`dot-text absolute lg:top-[20%] lg:left-[30%] top-[60%] left-[16%] text-[14px] lg:text-[16px] rotate-[-65deg] lg:rotate-[20deg] flex text-white items-center gap-2 ${
                isAnimationStarted ? "animate-text" : ""
              } text-2`}
            >
              <img className="lg:rotate-[-20deg] rotate-[-22deg]" src={arrow} alt="arrow" />
              2. Send Key
            </p>
            <p
              className={`dot-text absolute bottom-[-4%] left-0 lg:top-0 lg:left-[-10%] w-[100px] text-[14px] lg:text-[16px] text-center text-white ${
                isAnimationStarted ? "animate-text" : ""
              } text-3`}
            >
              3. Encrypted Inputs
            </p>

            <p
              className={`dot-text absolute lg:top-[48%] text-[14px] lg:text-[16px] flex text-white left-[34%] bottom-[6%] lg:bottom-[unset] lg:left-[-7%] lg:rotate-[90deg] items-center gap-2 ${
                isAnimationStarted ? "animate-text" : ""
              } text-4`}
            >
              4. Send Encrypted Inputs{" "}
              <img className="rotate-[155deg]" src={arrow} alt="arrow" />
            </p>
            <p
              className={`dot-text text-[14px] lg:text-[16px] absolute bottom-[-4%] lg:bottom-0 lg:left-[-14%] left-[76%] w-[120px] text-center text-white ${
                isAnimationStarted ? "animate-text" : ""
              } text-5`}
            >
              5. Process Encrypted Inputs
            </p>
            <p
              className={`dot-text absolute top-[60%] text-[14px] lg:text-[16px] lg:top-[74%] flex text-white left-[60%] lg:left-[24%] rotate-[-110deg] lg:rotate-[-20deg] items-center gap-2 ${
                isAnimationStarted ? "animate-text" : ""
              } text-6`}
            >
              6. Send Encrypted Output
              <img className="rotate-[150deg]" src={arrow} alt="arrow" />
            </p>
            <p
              className={`dot-text text-[14px] lg:text-[16px] absolute bottom-[57%] lg:bottom-[22%] text-white right-[40%] lg:right-[15%] ${
                isAnimationStarted ? "animate-text" : ""
              } text-7`}
            >
              7. Decrypt Output
            </p>
            <p
              className={`dot-text text-[14px] lg:text-[16px] absolute top-[63%] left-[47%] lg:top-[62%] flex text-white lg:left-[20%] rotate-[-110deg] lg:rotate-[-20deg] items-center gap-2 ${
                isAnimationStarted ? "animate-text" : ""
              } text-8`}
            >
              <img className="rotate-[-26deg]" src={arrow} alt="arrow" />
              8. Send Decrypted Output
            </p>
            <div
              className={`dot-text bg-red-400 absolute top-0 h-[400px] ${
                isAnimationStarted ? "animate-text" : ""
              } text-9`}
            >
              
            </div>

            <button
              className="bg-white text-black font-semibold px-3 py-2 rounded-full absolute left-[34%] max-w-[180px] bottom-[-8%] lg:bottom-0 right-0"
              onClick={handleButtonClick}
            >
              Start the Simulation
            </button>
            <img className="hidden lg:block" src={circles} alt="circles" />
            <img className="lg:hidden" src={circlesSm} alt="circles" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DotSection;



            // <p
            //   className={`dot-text absolute top-[22%] text-white right-[15%] ${
            //     isAnimationStarted ? "animate-text" : ""
            //   } text-1`}
            // >
            //   1. Generate Key
            // </p>

            // <p
            //   className={`dot-text absolute top-[20%] flex text-white left-[30%] rotate-[20deg] items-center gap-2 ${
            //     isAnimationStarted ? "animate-text" : ""
            //   } text-2`}
            // >
            //   <img className="rotate-[-20deg]" src={arrow} alt="arrow" />
            //   2. Send Key
            // </p>
            // <p
            //   className={`dot-text absolute top-0 left-[-10%] w-[100px] text-center text-white ${
            //     isAnimationStarted ? "animate-text" : ""
            //   } text-3`}
            // >
            //   3. Encrypted Inputs
            // </p>

            // <p
            //   className={`dot-text absolute top-[48%] flex text-white left-[-7%] rotate-[90deg] items-center gap-2 ${
            //     isAnimationStarted ? "animate-text" : ""
            //   } text-4`}
            // >
            //   4. Send Encrypted Inputs{" "}
            //   <img className="rotate-[155deg]" src={arrow} alt="arrow" />
            // </p>
            // <p
            //   className={`dot-text absolute bottom-0 left-[-14%] w-[120px] text-center text-white ${
            //     isAnimationStarted ? "animate-text" : ""
            //   } text-5`}
            // >
            //   5. Process Encrypted Inputs
            // </p>
            // <p
            //   className={`dot-text absolute top-[74%] flex text-white left-[24%] rotate-[-20deg] items-center gap-2 ${
            //     isAnimationStarted ? "animate-text" : ""
            //   } text-6`}
            // >
            //   6. Send Encrypted Output
            //   <img className="rotate-[150deg]" src={arrow} alt="arrow" />
            // </p>
            // <p
            //   className={`dot-text absolute bottom-[22%] text-white right-[15%] ${
            //     isAnimationStarted ? "animate-text" : ""
            //   } text-7`}
            // >
            //   7. Decrypt Output
            // </p>
            // <p
            //   className={`dot-text absolute top-[62%] flex text-white left-[20%] rotate-[-20deg] items-center gap-2 ${
            //     isAnimationStarted ? "animate-text" : ""
            //   } text-8`}
            // >
            //   <img className="rotate-[-26deg]" src={arrow} alt="arrow" />
            //   8. Send Decrypted Output
            // </p>