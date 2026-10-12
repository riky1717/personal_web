import { NavLink, Outlet } from 'react-router';
import { RiRobot3Line } from 'react-icons/ri';
import { FaCircleDot, FaXTwitter } from 'react-icons/fa6';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';

const tabs = [
  { label: 'Main', path: '/' },
  { label: 'About Me', path: '/about-me' },
  { label: 'My Skills', path: '/skills' },
  { label: 'My Exp', path: '/experience' },
  { label: 'Contact Me', path: '/contact' },
];

export default function Layout() {
  return (
    <>
      <header className="fixed top-0 z-50 h-17 w-full flex justify-center items-center bg-black">
        <RiRobot3Line className="mr-2 text-5xl" />
        <div className="relative flex justify-between items-center gap-7 w-350 h-18">
          <div>
            <div className="text-2xl font-bold font-sans">
              M Riky Darmasyah
            </div>
            <div className="text-brand-200 font-semibold">
              Software Engineer | Full-Stack Dev.
            </div>
          </div>
          <div className="font-playfair text-4xl tracking-wider italic">
            MY PERSONAL WEB
          </div>
        </div>
        <div
          role="tablist"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-auto tabs tabs-box bg-white rounded-full"
        >
          <nav className="flex items-center gap-1 rounded-full bg-white px-1 py-1">
            {tabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                end={tab.path === '/'}
                className={({ isActive }) =>
                  `cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-brand-200 text-gray-900'
                      : 'bg-transparent text-gray-800 hover:bg-gray-100'
                  }`
                }
              >
                {tab.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <div className='min-h-screen'>
      <Outlet />
      </div>

      <footer className="relative flex items-center justify-center h-70 w-full mt-25 bg-black">
        <div className="flex items-center justify-around h-60 w-full m-10">
          <div>
            <div className="flex items-center gap-1.5">
              <FaCircleDot className="text-xl text-brand-200" />
              <h1 className="text-2xl font-semibold font-cinzel">
                M Riky Darmasyah
              </h1>
            </div>
            <p className="mt-3 text-lg font-montserrat">
              Crafting disciplined full-stack digital architectures with <br />
              editorial warmth, precise systems engineering, and humane <br />
              design empathy.
            </p>
            <div className="mt-3 flex gap-7 font-semibold">
              <div className="flex items-center gap-1">
                <FaGithub className="text-lg" />
                <p className="text-lg">GitHub</p>
              </div>
              <div className="flex items-center gap-1">
                <FaLinkedin className="text-lg" />
                <p className="text-lg">LinkedIn</p>
              </div>
              <div className="flex items-center gap-1">
                <FaXTwitter className="text-lg" />
                <p className="text-lg">X / Twitter</p>
              </div>
              <div className="flex items-center gap-1">
                <FaInstagram className="text-lg" />
                <p className="text-lg">Instagram</p>
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineMailOutline className="text-lg" />
                <p className="text-lg">Email</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-55 w-fit bg-amber-50 rounded-2xl">
            <div className="px-8 text-black">
              <h1 className="text-2xl font-bold font-montserrat">
                Send a Quick Ping
              </h1>
              <p className="mt-1 font-montserrat">
                Have a compelling technical challenge or product architecture{' '}
                <br />
                you would like to explore together?
              </p>
              <fieldset className="mt-2 fieldset">
                <legend className="fieldset-legend text-base text-black">
                  Type your Email in this box
                </legend>
                <div className="flex gap-3">
                  <input
                    type="text"
                    className="input bg-white text-black border border-black"
                    placeholder="Type here..."
                  />
                  <button className="btn btn-success">Send</button>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
