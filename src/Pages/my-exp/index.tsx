import React from 'react';

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
}

// Sub-komponen untuk Kotak Proyek/Pengalaman
const ProjectCard: React.FC<ProjectCardProps> = ({ title, tech, description }) => {
  return (
    <div className="border-2 border-black p-6 bg-[#b8b8b8] text-black flex flex-col justify-between hover:bg-[#c4c4c4] transition-colors duration-200">
      <div>
        {/* Baris Judul & Ikon Panah */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold tracking-wider uppercase font-mono">{title}</h3>
          <span className="text-2xl font-light transform rotate-45">↑</span>
        </div>
        
        {/* Teknologi yang digunakan */}
        <p className="text-xs font-mono uppercase tracking-wider text-gray-800 mb-6">
          TECH: {tech}
        </p>
        
        {/* Deskripsi Teks (Full Uppercase) */}
        <p className="text-[11px] leading-relaxed font-mono tracking-wide uppercase text-justify text-gray-900">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function ExperienceProjects() {
  // Data sesuai dengan yang tertera di foto mockup Anda
  const projectsData = [
    {
      title: "TASKFLOW",
      tech: "NODE.JS, EXPRESS",
      description: "TASKFLOW IS A PRODUCTIVITY WEB APP DESIGNED TO HELP USERS MANAGE TASKS AND PROJECTS EFFORTLESSLY. IT ALLOWS USERS TO ORGANIZE TASKS THROUGH AN INTUITIVE DRAG-AND-DROP INTERFACE AND TRACK PROGRESS USING VISUAL TOOLS LIKE KANBAN BOARDS. REAL-TIME UPDATES KEEP TEAMS SYNCHRONIZED, ENSURING SMOOTH COLLABORATION. WITH SECURE USER AUTHENTICATION AND DATA MANAGEMENT, TASKFLOW PROVIDES A SEAMLESS EXPERIENCE ACROSS DESKTOP AND MOBILE, MAKING IT A POWERFUL TOOL FOR PERSONAL AND TEAM PRODUCTIVITY. TASKFLOW ALSO PRIORITIZES SECURITY WITH USER AUTHENTICATION AND DATA ENCRYPTION FOR SAFE EXPERIENCE ON BOTH DESKTOP AND MOBILE PLATFORMS."
    },
    {
      title: "DEVHUB",
      tech: "FIREBASE, TYPESCRIPT, GITLAB",
      description: "DEVHUB IS A COMMUNITY PLATFORM FOR DEVELOPERS TO SHARE KNOWLEDGE, WRITE BLOGS, AND COLLABORATE ON PROJECTS. IT FEATURES A BUILT-IN MARKDOWN EDITOR, ALLOWING USERS TO CREATE AND FORMAT CONTENT WITH EASE, AND A ROBUST USER PROFILE SYSTEM WHERE DEVELOPERS CAN SHOWCASE THEIR SKILLS AND PROJECTS. THE PLATFORM ALSO INCLUDES A PROJECT SHOWCASE SECTION, ENABLING USERS TO SHARE THEIR WORK AND GATHER FEEDBACK FROM PEERS. THE BACK-END MANAGES USER AUTHENTICATION, DATA STORAGE, AND CONTENT MANAGEMENT, WHILE THE FRONT-END ENSURED FAST RENDERING AND AN OPTIMIZED USER EXPERIENCE."
    },
    {
      title: "FITTRACK",
      tech: "FIREBASE, TYPESCRIPT, GITLAB",
      description: "FITTRACK IS A FITNESS TRACKING APP THAT EMPOWERS USERS TO SET PERSONALIZED FITNESS GOALS, MONITOR THEIR PROGRESS, AND ANALYZE WORKOUT DATA. IT PROVIDES CUSTOMIZABLE WORKOUT PLANS, PROGRESS TRACKING WITH INTERACTIVE CHARTS, AND DAILY LOGGING TO KEEP USERS MOTIVATED. THE APP'S BACK-END OFFERS A ROBUST API FOR MANAGING USER DATA, WHILE THE FRONT-END ENSURES A SMOOTH AND CONSISTENT EXPERIENCE ON BOTH IOS AND ANDROID DEVICES. WITH REAL-TIME DATA SYNCHRONIZATION USING CLOUD STORAGE, USERS CAN ACCESS THEIR PROGRESS FROM ANY DEVICE, ALLOWING THEM TO MAINTAIN THEIR ROUTINES EVEN ON THE GO."
    },
    {
      title: "SHOPEASE",
      tech: "FIREBASE, TYPESCRIPT, GITLAB",
      description: "SHOPEASE IS AN E-COMMERCE APPLICATION THAT PROVIDED A SMOOTH AND INTUITIVE SHOPPING EXPERIENCE. IT ALLOWS USERS TO BROWSE PRODUCTS, SEARCH FOR ITEMS, VIEW DETAILED PRODUCT PAGES, AND SECURELY COMPLETE THEIR PURCHASES. THE APP FEATURES A SHOPPING CART AND SECURE CHECKOUT PROCESS, WITH REAL-TIME INVENTORY UPDATES TO ENSURE ACCURACY. DESIGNED FOR SCALABILITY, SHOPEASE ENSURES A FAST AND RELIABLE SHOPPING EXPERIENCE FOR USERS."
    }
  ];

  return (
    <section className="bg-[#b8b8b8] min-h-screen py-12 px-4 sm:px-8 flex justify-center items-center font-mono">
      {/* Bingkai Luar Utama (Outer Border Hitam Tebal) */}
      <div className="border-4 border-black w-full max-w-6xl p-6 md:p-10 space-y-8 bg-[#b8b8b8]">
        
        {/* Kotak Header Title "PROJECTS" */}
        <div className="border-2 border-black py-8 px-4 text-center bg-[#b8b8b8]">
          <h2 className="text-4xl md:text-6xl font-black tracking-widest text-black uppercase font-mono">
            PROJECTS
          </h2>
        </div>

        {/* Grid 2 Kolom untuk List Kartu Proyek */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              tech={project.tech}
              description={project.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
