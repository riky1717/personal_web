import { PiSealCheckLight } from 'react-icons/pi';

export default function LandingPage() {
  return (
    <>
      <div className="flex justify-center">
        <div className="relative flex justify-around items-center h-100 w-full mr-20 ml-20 mt-30 bg-brand-100 rounded-4xl shadow-xl/25">
          <div className="relative flex items-center h-80 w-180">
            <div className="ml-5">
              <p className="text-3xl font-medium font-montserrat">
                Hello, I am
              </p>
              <h1 className="text-7xl text-yellow-400 font-fraunces">
                M RIKY DARMASYAH
              </h1>
              <br />
              <p className="text-3xl font-montserrat">
                I am a <b className="text-brand-200">Full-Stack Developer</b>{' '}
                focused on building modern, functional, and user-friendly
                digital experiences.
              </p>
            </div>
          </div>
          <div className="h-70 w-80 bg-[url('pp.jpg')] bg-contain bg-center border-3 border-white rounded-2xl"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex items-center h-20 w-full ml-20 mr-20">
          <h1 className="text-black text-lg font-montserrat font-semibold">
            I have contributed with:
          </h1>
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-30 w-full ml-20 mr-20 grid grid-cols-5 grid-rows-2 gap-5">
          <div className="row-span-2 bg-[url(assets/netflix-logo-icon.svg)] bg-contain bg-center bg-no-repeat"></div>
          <div className="row-span-2 bg-[url(assets/google-g-2015.svg)] bg-contain bg-center bg-no-repeat"></div>
          <div className="row-span-2 bg-[url(assets/meta-3.svg)] bg-contain bg-center bg-no-repeat"></div>
          <div className="row-span-2 bg-[url(assets/logo-amazon.svg)] bg-contain bg-center bg-no-repeat"></div>
          <div className="row-span-2 bg-[url(assets/ubisoft-logo.svg)] bg-contain bg-center bg-no-repeat"></div>
          <div className="flex justify-center items-center text-black font-semibold font-fraunces">
            Netflix
          </div>
          <div className="flex justify-center items-center text-black font-semibold font-fraunces">
            Google
          </div>
          <div className="flex justify-center items-center text-black font-semibold font-fraunces">
            Meta
          </div>
          <div className="flex justify-center items-center text-black font-semibold font-fraunces">
            Amazon
          </div>
          <div className="flex justify-center items-center text-black font-semibold font-fraunces">
            Ubisoft
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex items-center justify-center gap-10 h-15 w-300 mr-20 ml-20 mt-10 bg-[#EDF4FD] rounded-xl">
          <div className="flex items-center gap-1">
            <PiSealCheckLight className="text-black" />
            <p className="text-black font-montserrat">
              Trusted by fast-growing startups & creative engineering teams:
            </p>
          </div>
          <div className="flex justify-between gap-3">
            <div className="flex justify-center items-center w-fit h-7 bg-white rounded-full">
              <p className="p-3 text-sm font-semibold text-black">React 18</p>
            </div>
            <div className="flex justify-center items-center w-fit h-7 bg-white rounded-full">
              <p className="p-3 text-sm font-semibold text-black">TypeScript</p>
            </div>
            <div className="flex justify-center items-center w-fit h-7 bg-white rounded-full">
              <p className="p-3 text-sm font-semibold text-black">Next.js 14</p>
            </div>
            <div className="flex justify-center items-center w-fit h-7 bg-white rounded-full">
              <p className="p-3 text-sm font-semibold text-black">Node.js</p>
            </div>
            <div className="flex justify-center items-center w-fit h-7 bg-white rounded-full">
              <p className="p-3 text-sm font-semibold text-black">PostgreSQL</p>
            </div>
            <div className="flex justify-center items-center w-fit h-7 bg-white rounded-full">
              <p className="p-3 text-sm font-semibold text-black">
                Docker & AWS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
