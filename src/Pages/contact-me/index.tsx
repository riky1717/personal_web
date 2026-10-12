export default function Contactme() {
    return (
        <>
       <div className="navbar bg-base-50 shadow-sm">
  <div className="flex-1 mt-50">
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg" />
        </div>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>login</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
          <section
      id="contact"
      className="mt-20 w-full h-fit px-10 py-36 border border-white/8 bg-[#171A24] top-[7778.64px]"
    >
        <div className="w-full max-w-[1120px] mx-auto">
      <div className="grid grid-cols-12 gap-x-16 gap-y-16 w-full h-fit">
        {/* RIGHT */}
        <div className="col-start-6 row-start-1 col-span-7 row-span-1 flex flex-col items-start w-full h-fit px-12 py-12 bg-[#1D2130] border border-white/8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
          {/* FORM */}
          <div className="flex flex-col items-start w-full h-fit gap-6">
            {/* CONTAINER */}
            <div className="flex items-center w-full h-fit gap-6">
              {/* CONTAINER */}
              <div className="flex flex-col items-start w-[252px] h-fit gap-2">
                {/* LABEL */}
                <div className="flex flex-col items-start w-full h-fit">
                  <span className="font-jetbrains font-normal text-xs text-[#A5A7B0] leading-4 tracking-[1.2px]">
                    YOUR NAME *
                  </span>
                </div>

                {/* INPUT */}
                <div className="flex flex-col items-start w-full h-fit px-4 py-[15px] bg-[#171A24] border border-white/8">
                  {/* CONTAINER */}
                  <div className="flex flex-col items-start w-full h-fit">
                    {/* M. RIKY DARMASYAH */}
                    <input
                      type="text"
                      placeholder="Riky Darmasyah"
                      className="w-full h-fit bg-transparent outline-none font-space font-normal text-sm text-[#A5A7B0] leading-[normal] tracking-[-0.16px] placeholder:text-[#A5A7B0]"
                    />
                  </div>
                </div>
              </div>

              {/* CONTAINER */}
              <div className="flex flex-col items-start w-[252px] h-fit gap-2">
                {/* LABEL */}
                <div className="flex flex-col items-start w-full h-fit">
                  {/* EMAIL */}
                  <span className="font-jetbrains font-normal text-xs text-[#A5A7B0] leading-4 tracking-[1.2px]">
                    YOUR EMAIL *
                  </span>
                </div>

                {/* INPUT */}
                <div className="flex items-center w-full h-fit px-4 py-[15px] bg-[#171A24] border border-white/8">
                  {/* CONTAINER */}
                  <div className="flex flex-col items-start w-full h-fit">
                    {/* EMAIL */}
                    <input
                      type="email"
                      placeholder="rikydms1717@gmail.com"
                      className="w-full h-fit bg-transparent outline-none font-space font-normal text-sm text-[#A5A7B0] leading-[normal] tracking-[-0.16px] placeholder:text-[#A5A7B0]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CONTAINER */}
            <div className="flex flex-col items-start w-full h-fit gap-2 pb-[7px]">
              {/* LABEL */}
              <div className="flex flex-col items-start w-full h-fit">
                {/* PROJECT */}
                <span className="w-full h-fit font-jetbrains font-normal text-xs text-[#A5A7B0] leading-4 tracking-[1.2px]">
                  PROJECT BRIEF OR MESSAGE *
                </span>
              </div>

              {/* TEXT AREA */}
              <div className="flex items-center w-full h-fit pl-4 pr-4 pt-[14px] pb-[94px] bg-[#171A24] border border-white/8">
                {/* CONTAINER */}
                <div className="flex flex-col items-start w-full h-fit">
                  {/* AREA */}
                  <textarea
                    placeholder="Outline scope, goals, architecture requirements, and timeline..."
                    className="w-full h-fit resize-none bg-transparent outline-none font-space font-normal text-sm text-[#A5A7B0] leading-[normal] tracking-[-0.16px] placeholder:text-[#A5A7B0]"
                  />
                </div>
              </div>
            </div>

            {/* BUTTON + DIRECT RESPONSE */}
            {/* CONTAINER */}
            <div className="flex items-center justify-between w-full h-fit pt-2">
              {/* BUTTON */}
              <button
                type="button"
                className="flex items-center justify-center w-fit h-fit gap-3 px-8 py-4 bg-[#E85D2A] shadow-[0_10px_15px_-3px_#E85D2A33,0_4px_6px_-4px_#E85D2A33]"
              >
                {/* CONTAINER */}
                <div className="flex items-center w-fit h-fit">
                  {/* SEND MESSAGE */}
                  <span className="w-fit h-fit font-jetbrains font-semibold text-xs text-white leading-4 tracking-[1.2px]">
                    SEND MESSAGE
                  </span>
                </div>

                {/* CONTAINER */}
                <div className="flex items-center w-fit h-fit">
                  {/* TEXT */}
                  <span className="w-fit h-fit font-nimbus font-bold text-xs text-white leading-4 tracking-[1.2px]">
                    →
                  </span>
                </div>
              </button>

              {/* DIRECT RESPONSE */}
              <div className="flex flex-col items-start w-fit h-fit">
                <span className="w-fit h-fit font-jetbrains font-normal text-xs text-[#A5A7B0] leading-[16.5px] tracking-[-0.16px]">
                  Direct response within 24h.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* LEFT */}
        <div className="col-start-1 row-start-1 row-span-1 col-span-5 flex flex-col items-start w-full h-fit gap-8">
          {/* CONTAINER */}
          <div className="flex flex-col items-start w-full h-fit gap-4">
            {/* CONTAINER */}
            <div className="flex flex-col items-start w-full h-fit">
              <span className="font-jetbrains font-medium text-xs text-[#E85D2A] leading-4 tracking-3">
                06 // GET IN TOUCH / CONTACT
              </span>
            </div>
        

          {/* HEADING */}
          <h2 className="w-full font-bodoni font-normal text-[60px] text-[#F5F3EE] leading-[60px] tracking-[-1.5px] [font-variation-settings:'opsz'_60]">
            LET&apos;S BUILD SOMETHING USEFUL.
          </h2>

          {/* DESCRIPTION */}
          <div className="flex flex-col items-start w-full h-fit">
            <p className="w-full h-fit font-space font-light text-base text-[#A5A7B0] leading-6 tracking-[-0.16px]">
              Have an idea, project, or opportunity? Let&apos;s turn it into something real.
            </p>
          </div>
            

          {/* DIRECT COORDINATES */}
          <div className="flex flex-col items-start w-full h-fit gap-3 pt-6 border-t border-white/8">

            {/* HORIZONTAL BORDER 1 */}
            <div className="flex items-center justify-between w-full h-fit py-2 border-t border-white/8">
            {/* CONTAINER */}
            <div className="w-fit h-full">
              {/* EMAIL */}
              <span className="w-fit h-fit font-jetbrains font-normal text-xs text-[#A5A7B0] leading-4 tracking-[-0.16px]">EMAIL</span>
               </div>

              {/* LINK */}
              <div className="flex flex-col items-start w-fit h-full">
              <span className="w-fit h-fit font-jetbrains font-normal text-xs text-[#F5F3EE] leading-4 tracking-[-0.16px]">
                contact@rikydms1717
              </span>
            </div>
             </div>

            {/* HORIZONTAL BORDER 2 */}
            <div className="flex items-center justify-between w-full h-fit py-2 border-t border-white/8">
            {/* CONTAINER */}
            <div className="flex flex-col items-start w-fit h-full">
              {/* GITHUB */}
              <span className="w-fit h-fit font-jetbrains font-normal text-xs text-[#A5A7B0] leading-4 tracking-[-0.16px]">
                GITHUB
              </span>
              </div>

              {/* LINK */}
              <div className="flex flex-col items-start w-fit h-full">
              <span className="w-fit h-fit font-jetbrains font-normal text-xs text-[#F5F3EE] leading-4 tracking-[-0.16px]">
                github.com/[your-username]
              </span>
            </div>
            </div>

             
            {/* HORIZONTAL BORDER 3 */}
            <div className="flex items-center justify-between w-full h-fit py-2 border-t border-white/8">
            {/* CONTAINER */}
            <div className="flex flex-col items-start w-fit h-full">
              {/* LINKEDIN */}
              <span className="w-fit h-fit font-jetbrains font-normal text-xs text-[#A5A7B0] leading-4 tracking-[-0.16px]">
                LINKEDIN
              </span>
               </div>

               {/* LINK */}
               <div className="flex flex-col items-start  w-fit h-full">
              <span className="w-fit h-fit font-jetbrains font-normal text-xs text-[#F5F3EE] leading-4 tracking-[-0.16px]">
                linkedin.com/in/[your-profile]
              </span>
            </div>
            </div>

            {/* HORIZONTAL BORDER 4 */}
            <div className="flex items-center justify-between w-full h-fit py-2 border-t border-white/8">
            {/* CONTAINER */}
            <div className="flex flex-col items-start w-fit h-full">
              <span className="w-fit h-fit font-jetbrains font-normal text-xs text-[#A5A7B0] leading-4 tracking-[-0.16px]">
                LOCATION / TIMEZONE
              </span>
              </div>

              {/* CONTAINER */}
              <div className="flex flex-col items-start w-fit h-full">
              <span className="w-fit h-fit font-jetbrains font-normal text-xs text-[#F5F3EE] leading-4 tracking-[-0.16px]">
                Indonesia — Remote Worldwide
              </span>
              </div>
            </div>
            </div>  
          </div>
        </div>
      </div>
      </div>
    </section>
        </>
    );
};
    