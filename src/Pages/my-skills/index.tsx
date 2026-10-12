export default function SkillsSection() {
  return (
    <section className="relative bg-[#1a2327] text-white py-16 px-6 font-sans overflow-hidden min-h-screen flex flex-col justify-center items-center">
      
      {/* Gambar/Teks Latar Belakang Code (Opsional) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none font-mono text-xs p-6 select-none overflow-hidden leading-relaxed">
        {`const main = () => {\n  if (source === 'home') {\n    initOrderTime();\n  }\n}`}
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        
        {/* Ikon Kode Atas </ > */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-1 h-8 border-l border-dashed border-cyan-400 mb-2"></div>
          <div className="text-4xl text-cyan-400 font-light tracking-widest">&lt;/&gt;</div>
        </div>

        {/* Judul Utama */}
        <h2 className="text-3xl font-normal text-cyan-400 tracking-wide mb-2">Skills</h2>
        <div className="w-24 h-[2px] bg-cyan-400 mx-auto mb-4"></div>
        <p className="text-gray-400 text-sm italic mb-12">I am striving to never stop learning and improving</p>

        {/* Kotak Kategori Utama (Web & App) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
          
          {/* Web Development Card */}
          <div className="bg-[#4ca5b9] text-gray-900 p-6 rounded-sm shadow-md flex flex-col items-center justify-center min-h-[140px]">
            <span className="text-2xl mb-1">💻</span>
            <h3 className="text-lg font-medium text-gray-900">Web Developement</h3>
            <p className="text-xs text-gray-700 tracking-wider mt-1 uppercase font-semibold">HTML - CSS - JS - REACT</p>
          </div>

          {/* App Development Card */}
          <div className="bg-[#78c4af] text-gray-900 p-6 rounded-sm shadow-md flex flex-col items-center justify-center min-h-[140px]">
            <span className="text-2xl mb-1">📱</span>
            <h3 className="text-lg font-medium text-gray-900">App Developement</h3>
            <p className="text-xs text-gray-700 tracking-wider mt-1 uppercase font-semibold">iOS - Android</p>
          </div>

        </div>

        {/* Deretan Lingkaran Logo Teknologi */}
        <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto items-center justify-center">
          
          {/* HTML */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#c35134] flex items-center justify-center text-white text-2xl font-bold shadow-lg transition-transform hover:scale-105">
              <span>5</span>
            </div>
            <span className="text-xs font-semibold tracking-wider text-gray-400 mt-3 uppercase">HTML</span>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#205fa2] flex items-center justify-center text-white text-2xl font-bold shadow-lg transition-transform hover:scale-105">
              <span>3</span>
            </div>
            <span className="text-xs font-semibold tracking-wider text-gray-400 mt-3 uppercase">CSS</span>
          </div>

          {/* JS */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#af883b] flex items-center justify-center text-white text-lg font-bold shadow-lg transition-transform hover:scale-105">
              <span>JS</span>
            </div>
            <span className="text-xs font-semibold tracking-wider text-gray-400 mt-3 uppercase">JS</span>
          </div>

          {/* REACT */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#2b6489] flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-105">
              {/* Representasi Ikon Atom React Simpel */}
              <span className="animate-spin-slow text-cyan-300 text-xl">⚛️</span>
            </div>
            <span className="text-xs font-semibold tracking-wider text-gray-400 mt-3 uppercase">REACT</span>
          </div>

        </div>

      </div>
    </section>
  );
};
