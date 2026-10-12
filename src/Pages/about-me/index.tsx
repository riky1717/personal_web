export default function AboutAndHeroSection() {
  return (
    <div className="bg-[#1a2327] text-white font-sans min-h-screen">
      
      {/* ========================================================================= */}
      {/* HERO SECTION / DEVELOPER SECTION                                          */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-8 items-center border-b border-gray-800">
        
        {/* Kolom Kiri: Profil Card */}
        <div className="md:col-span-3 flex justify-center">
          <div className="relative bg-[#1e292d] p-6 text-center max-w-[240px] border border-cyan-400/40"
               style={{ borderRadius: '40px 0px 40px 0px' }}>
            
            {/* Foto Profil Bulat */}
            <div className="w-20 h-20 mx-auto bg-gray-600 rounded-full mb-4 overflow-hidden border border-gray-500">
             
            </div>
            
            <h3 className="text-xl font-bold tracking-wide">Riky</h3>
            <p className="text-xs text-gray-400 mb-6">Full-Stack Developer</p>
            
            {/* Info Detail */}
            <div className="text-left text-[11px] text-gray-300 space-y-2 mb-6 border-t border-b border-gray-800 py-4">
              <p className="truncate">📧 rikydarmasyah32@hotmail.com</p>
              <p>📍 indonesia</p>
              <p>💼 Full-time / Freelancer</p>
              <p className="text-cyan-400 truncate">🔗 ://rikydarmasyah32.com</p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1 justify-center mb-6">
              {['HTML', 'CSS', 'JS', 'REACT'].map((tech) => (
                <span key={tech} className="bg-cyan-500/10 text-cyan-400 text-[10px] px-2 py-0.5 rounded-full font-mono">
                  {tech}
                </span>
              ))}
            </div>

            {/* Tombol Unduh */}
            <button className="w-full bg-transparent hover:bg-cyan-400 hover:text-gray-900 text-white border border-white text-xs font-semibold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center gap-2">
              Download CV <span>📥</span>
            </button>
          </div>
        </div>

        {/* Kolom Tengah: Teks Pengenalan Utama */}
        <div className="md:col-span-6 space-y-6">
          <div className="font-mono text-xs text-gray-500">&lt;h1&gt;</div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-wide text-gray-400">
            Hey<br />
            I'm <span className="text-cyan-400 font-normal">Riky</span>,<br />
            Full-Stack Developer <span className="text-gray-600 font-mono text-lg">...</span>
          </h1>
          <div className="font-mono text-xs text-gray-500">&lt;/h1&gt;</div>

          <div className="font-mono text-xs text-gray-500 mt-6">&lt;p&gt;</div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            I help business grow by crafting amazing web experiences. If you're looking for a developer that likes to get stuff done,
          </p>
          <div className="font-mono text-xs text-gray-500">&lt;/p&gt;</div>

          <div className="pt-4">
            <a href="#contact" className="text-cyan-400 text-lg font-medium hover:underline flex items-center gap-2">
              Let's Talk <span className="text-sm">💬</span>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Stats Panel */}
        <div className="md:col-span-3 bg-[#131a1d] p-6 rounded-2xl border border-gray-800 flex flex-col justify-around gap-6 max-w-[180px] mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-light text-cyan-400">4</span>
            <p className="text-[11px] leading-tight text-gray-400 uppercase tracking-wider">Programming<br />Language</p>
          </div>
          <div className="flex items-center gap-4 border-t border-b border-gray-800/60 py-4">
            <span className="text-3xl font-light text-cyan-400">6</span>
            <p className="text-[11px] leading-tight text-gray-400 uppercase tracking-wider">Development<br />Tools</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-light text-cyan-400">8</span>
            <p className="text-[11px] leading-tight text-gray-400 uppercase tracking-wider">Years of<br />Experience</p>
          </div>
        </div>

      </section>


      {/* ========================================================================= */}
      {/* ABOUT ME SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="relative max-w-6xl mx-auto px-6 py-24">
        
        {/* Garis Penghubung Alur (Dotted Line) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-4 h-4 rounded-full border border-cyan-400 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
          </div>
          <div className="w-[1px] h-16 border-l border-dashed border-cyan-400/60 my-2"></div>
        </div>

        {/* Header Judul Kotak */}
        <div className="mb-12 mt-4">
          <h2 className="inline-block text-2xl font-light tracking-wide px-6 py-2 border border-cyan-400 text-white rounded-br-2xl rounded-tl-2xl">
            About Me
          </h2>
        </div>

        {/* Konten Utama About Me */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Sisi Kiri: Blok Teks Narasi Bergaya Code editor */}
          <div className="md:col-span-7 bg-[#1e292d]/60 p-6 rounded-2xl border border-gray-800/80 font-mono text-xs leading-relaxed space-y-4 shadow-xl">
            <div className="text-gray-600">&lt;p&gt;</div>
            
            <div>
              <h4 className="text-cyan-400 text-lg font-sans font-bold tracking-wide mb-2">Hello!</h4>
              <p className="text-gray-300 font-sans text-sm">
                My name Riky and I specialize in web development that utilizes <span className="text-cyan-400">HTML</span>, <span className="text-cyan-400">CSS</span>, <span className="text-cyan-400">JS</span>, and <span className="text-cyan-400">REACT</span> etc.
              </p>
            </div>

            <p className="text-gray-300 font-sans text-sm">
              I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
            </p>

            <p className="text-gray-300 font-sans text-sm">
              When I'm not coding, I am <span className="text-cyan-400">writing blogs</span>, reading, or picking up some new hands-on art project like <span className="text-cyan-400">photography</span>.
            </p>

            <p className="text-gray-300 font-sans text-sm">
              I like to have my perspective and belief systems challenged so that I see the world through new eyes.
            </p>

            <div className="text-gray-600">&lt;/p&gt;</div>
          </div>

          {/* Sisi Kanan: Foto Kerja / Laptop */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-sm overflow-hidden rounded-2xl shadow-lg border border-gray-800">
              <img 
                src="pp.jpg" 
                alt="Workspace laptop setup" 
                className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
