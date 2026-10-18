import React, { useState } from 'react';
import BlurText from './components/BlurText';
import { 
  Laptop, 
  Wrench, 
  PenTool, 
  GraduationCap, 
  UserCheck, 
  Globe, 
  Mail, 
  ArrowRight,
  Layers,
  Image as ImageIcon,
  X,
  Code,
  Share2,
  Sparkles,
  Award,
  FolderGit2,
  Database,
  MapPin,
  Film,
  Server,
  FileText,
  ExternalLink,
  CheckCircle2,
  Users
} from 'lucide-react';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  // Data Proyek Nyata
  const projectsList = [
    {
      title: "Sistem Informasi Inventaris Barang Habis Pakai",
      category: "Web Application & System Planning",
      description: "Sistem manajemen inventaris laboratorium TI PNP berbasis web untuk efisiensi pencatatan stok barang habis pakai, pelaporan real-time, dan memangkas waktu rekapitulasi hingga 50%.",
      tech: ["Laravel", "MySQL", "Tailwind CSS", "Project Charter / System Design"],
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      tag: "Academic Project",
      github: "https://github.com/zahraputri19",
      demo: "#"
    },
    {
      title: "Aplikasi Pemetaan Interaktif GIS (Geographic Information System)",
      category: "Web Mapping",
      description: "Pengembangan sistem peta digital interaktif berbasis web untuk pemetaan area Politeknik Negeri Padang Kampus Tanah Datar dan Sentra Tenun Lintau.",
      tech: ["CodeIgniter 4", "Leaflet.js", "Bootstrap", "Geospatial Data"],
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      tag: "Web GIS",
      github: "https://github.com/zahraputri19",
      demo: "#"
    },
    {
      title: "Portal Pengelola Film & Autentikasi User",
      category: "Fullstack Web & API Integration",
      description: "Aplikasi katalog film interaktif yang mengintegrasikan OMDB API dengan fitur autentikasi pengguna, lokalisasi bahasa, dan pengelolaan koleksi favorit.",
      tech: ["Laravel", "OMDB REST API", "Bootstrap", "MySQL"],
      icon: <Film className="w-6 h-6 text-pink-400" />,
      tag: "REST API Integration",
      github: "https://github.com/zahraputri19",
      demo: "#"
    },
    {
      title: "Pengembangan Endpoint Microservices & Cart Service",
      category: "Backend & Cloud Dev",
      description: "Perancangan dan pengujian arsitektur microservices untuk layanan produk dan keranjang belanja berbasis kontainerisasi.",
      tech: ["Docker", "Express.js", "PostgreSQL", "Insomnia / Postman"],
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      tag: "Microservices & Docker",
      github: "https://github.com/zahraputri19",
      demo: "#"
    }
  ];

  // Data Sertifikat & Pelatihan (Sudah Diperbarui ke PEKSIMIDA)
  const certificatesList = [
    {
      title: "Sertifikasi Asisten Teknisi Laboratorium TI",
      issuer: "Politeknik Negeri Padang",
      year: "2026",
      desc: "Kompetensi dalam pemeliharaan perangkat keras, pengelolaan jaringan laboratorium, dan penanganan gangguan teknis."
    },
    {
      title: "Pelatihan Pengembangan Web & API Integration",
      issuer: "Program Studi Sistem Informasi",
      year: "2026",
      desc: "Penyelesaian modul pengerjaan aplikasi web modern berbasis framework PHP dan integrasi RESTful API."
    },
    {
      title: "Kompetisi Pekan Seni Mahasiswa Daerah (PEKSIMIDA)",
      issuer: "BPSMI / Tingkat Provinsi",
      year: "2026",
      desc: "Partisipasi dan pencapaian karya seni/kreatif mahasiswa tingkat daerah berbasis penilaian juri profesional."
    }
  ];

  // Data Modal Album Foto/Desain
  const galleryData = {
    desain: {
      title: "Desain Media Interaktif / LKPD",
      category: "Graphic Design",
      images: [
        "/images/desain1.jpeg",
        "/images/desain1_2.jpeg",
        "/images/desain1_3.jpeg",
        "/images/desain1_4.jpeg"
      ]
    },
    foto1: {
      title: "Koleksi Fotografi 01",
      category: "Photography",
      images: [
        "/images/foto1.jpg",
        "/images/foto1_2.jpg",
        "/images/foto1_3.jpg",
        "/images/foto1_4.jpg"
      ]
    }
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      
      {/* Latar Belakang Lingkaran Cahaya Neon */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Header / Navigasi */}
      <header className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800/60 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-extrabold tracking-tight text-white hover:text-indigo-400 transition flex items-center gap-1">
            Zahra<span className="text-indigo-500">.</span>
          </a>
          
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-indigo-400 transition">Tentang</a>
            <a href="#background" className="hover:text-indigo-400 transition">Pengalaman</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Proyek</a>
            <a href="#certificates" className="hover:text-indigo-400 transition">Sertifikasi</a>
            <a href="#creative" className="hover:text-indigo-400 transition">Desain & Foto</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Kontak</a>
          </nav>

          <a href="mailto:zahraputriarmelia12@gmail.com" className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white transition shadow-lg shadow-indigo-500/20">
            Hubungi Saya
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">

        {/* Hero Section */}
        <section id="about" className="min-h-[88vh] flex items-center justify-center px-6 py-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
            
            <div className="md:col-span-7 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs font-medium shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
                Seeking Internship: Web Developer • System Analyst • IT Support
              </div>

              {/* Komponen Animasi BlurText */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Halo, Saya <br />
                <BlurText 
                  text="Zahra Putri Armelia" 
                  delay={120} 
                  animateBy="letters"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm"
                />
              </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Mahasiswa Sistem Informasi & Asisten Teknisi yang tertarik pada bidang Teknologi Informasi secara umum—mulai dari analisis & pengembangan sistem, IT support, hingga perancangan UI/UX dan media visual. Terbuka untuk kesempatan magang.
            </p>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
                {["Laravel & CodeIgniter 4", "Hardware & Network Troubleshooting", "Bootstrap & Tailwind", "Figma (UI/UX)", "GIS & Leaflet.js", "Graphic Design", "Leadership & Communication"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/90 border border-gray-800 text-gray-300 hover:border-indigo-500/60 hover:text-white transition cursor-default">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#projects" className="px-6 py-3 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition text-center shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2">
                  Lihat Proyek Dibuat <ArrowRight className="w-4 h-4" />
                </a>
                
                {/* Tombol Download CV */}
                <a 
                  href="/CV_Zahra.pdf" 
                  download 
                  className="px-6 py-3 rounded-xl text-sm font-semibold bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-800 hover:border-indigo-500/60 transition text-center flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-indigo-400" /> Download CV
                </a>
              </div>
            </div>

            {/* Profile Card / Frame Foto Keren */}
            <div className="md:col-span-5 flex justify-center relative">
              <div className="relative w-72 h-80 sm:w-80 sm:h-96">
                
                {/* Border Frame Glowing */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-1000"></div>
                
                <div className="relative w-full h-full bg-gray-900/90 border border-gray-800 rounded-3xl p-4 flex flex-col items-center justify-between shadow-2xl backdrop-blur-xl overflow-hidden">
                  
                  <div className="w-full h-3/4 rounded-2xl bg-gradient-to-b from-indigo-950 to-gray-950 border border-indigo-500/20 overflow-hidden flex items-center justify-center relative group">
                    <img 
                      src="/images/foto1.jpg" 
                      alt="Zahra Putri Armelia" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden flex-col items-center text-indigo-400 p-4 text-center">
                      <UserCheck className="w-16 h-16 mb-2 text-indigo-400" />
                      <span className="text-xs text-gray-400">Foto Profil Zahra</span>
                    </div>
                  </div>

                  <div className="text-center my-auto">
                    <h3 className="font-bold text-white text-base">Zahra Putri Armelia</h3>
                    <p className="text-xs text-indigo-400 font-medium mt-0.5">Sistem Informasi • Asisten Teknisi</p>
                  </div>
                </div>

                {/* Floating Badge Highlight 1 */}
                <div className="absolute -bottom-4 -left-6 bg-gray-900/90 border border-indigo-500/40 backdrop-blur-md p-3 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-950 flex items-center justify-center text-indigo-400 border border-indigo-800/50">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Mahasiswa</p>
                    <p className="text-[10px] text-gray-400">Sistem Informasi</p>
                  </div>
                </div>

                {/* Floating Badge Highlight 2 */}
                <div className="absolute -top-3 -right-4 bg-gray-900/90 border border-purple-500/40 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[11px] font-semibold text-gray-200">Ready for Internship</span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Section Latar Belakang & Organisasi */}
        <section id="background" className="py-20 bg-gray-900/40 border-y border-gray-800/60 relative">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Jejak Langkah</h2>
            <h3 className="text-3xl font-extrabold text-white mb-10">Pendidikan, Peran & Pengalaman</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card Pendidikan */}
              <div className="bg-gray-900/80 border border-gray-800 p-7 rounded-2xl hover:border-indigo-500/50 transition duration-300 relative group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-950 text-indigo-400 flex items-center justify-center mb-6 border border-indigo-800/40 group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Sistem Informasi</h4>
                  <p className="text-xs text-indigo-400 font-semibold mt-1">Politeknik Negeri Padang</p>
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    Berfokus pada analisis kebutuhan sistem, manajemen basis data terstruktur, arsitektur perangkat lunak, serta pengembangan aplikasi web interaktif.
                  </p>
                </div>
              </div>

              {/* Card Teknisi */}
              <div className="bg-gray-900/80 border border-gray-800 p-7 rounded-2xl hover:border-purple-500/50 transition duration-300 relative group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-950 text-purple-400 flex items-center justify-center mb-6 border border-purple-800/40 group-hover:bg-purple-600 group-hover:text-white transition duration-300">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Asisten Teknisi & IT Support</h4>
                  <p className="text-xs text-purple-400 font-semibold mt-1">Laboratorium Kampus PNP</p>
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    Bertanggung jawab dalam perawatan perangkat keras komputer, konfigurasi & instalasi jaringan lokal, serta penanganan cepat gangguan teknis (troubleshooting).
                  </p>
                </div>
              </div>

              {/* Card Pengalaman Organisasi FORMA */}
              <div className="bg-gray-900/80 border border-gray-800 p-7 rounded-2xl hover:border-pink-500/50 transition duration-300 relative group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-pink-950 text-pink-400 flex items-center justify-center mb-6 border border-pink-800/40 group-hover:bg-pink-600 group-hover:text-white transition duration-300">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Pengalaman Organisasi</h4>
                  <p className="text-xs text-pink-400 font-semibold mt-1">FORMA Organization</p>
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    Pengalaman dalam pengelolaan saluran komunikasi, perancangan konten media kreatif, penyebaran informasi publik, serta kolaborasi tim dalam divisi Informasi & Komunikasi.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section Proyek Nyata yang Pernah Dibuat */}
        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                <FolderGit2 className="w-3.5 h-3.5" /> Karya & Proyek
              </div>
              <h3 className="text-3xl font-extrabold text-white mt-1">Proyek yang Pernah Dibuat</h3>
              <p className="text-gray-400 text-sm mt-2">Daftar sistem informasi, aplikasi web, dan arsitektur backend yang telah dikembangkan.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectsList.map((project, idx) => (
                <div 
                  key={idx} 
                  className="bg-gray-900/80 border border-gray-800 rounded-2xl p-7 hover:border-indigo-500/60 hover:bg-gray-900/90 transition duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-950 flex items-center justify-center border border-gray-800 group-hover:border-indigo-500/50 transition duration-300">
                        {project.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-950/80 text-indigo-300 border border-indigo-800/50 px-3 py-1 rounded-full">
                        {project.tag}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition duration-300">
                      {project.title}
                    </h4>
                    <p className="text-xs text-indigo-400 font-medium mt-1 mb-3">
                      {project.category}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="pt-4 border-t border-gray-800/60 mb-4">
                      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Teknologi Digunakan:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, index) => (
                          <span key={index} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-gray-950 border border-gray-800 text-gray-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link Kode Sumber & Live Demo */}
                    <div className="flex items-center gap-4 pt-2 text-xs font-semibold">
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white flex items-center gap-1.5 transition">
                        <Code className="w-4 h-4 text-indigo-400" /> Kode Sumber
                      </a>
                      <a href={project.demo} className="text-gray-400 hover:text-indigo-400 flex items-center gap-1.5 transition">
                        <ExternalLink className="w-4 h-4 text-indigo-400" /> Live Preview
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Sertifikasi & Pelatihan */}
        <section id="certificates" className="py-20 bg-gray-900/30 border-t border-gray-800/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mb-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-1">Pengakuan & Lisensi</h2>
              <h3 className="text-3xl font-extrabold text-white">Sertifikasi & Pelatihan</h3>
              <p className="text-gray-400 text-sm mt-2">Pelatihan teknis dan sertifikasi pendukung kesiapan kerja/magang.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificatesList.map((cert, idx) => (
                <div key={idx} className="bg-gray-900/90 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/50 transition duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                      <span className="text-xs font-bold text-gray-400 bg-gray-950 px-2.5 py-1 rounded-md border border-gray-800">{cert.year}</span>
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">{cert.title}</h4>
                    <p className="text-xs text-indigo-400 font-medium mb-3">{cert.issuer}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Galeri Karya Visual */}
        <section id="creative" className="py-20 bg-gray-900/40 border-t border-gray-800/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mb-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400">Sisi Kreatif</h2>
              <p className="text-3xl font-extrabold text-white mt-1">Desain Grafis & Fotografi</p>
              <p className="text-gray-400 text-sm mt-2">Klik kartu untuk membuka galeri foto & lembar desain interaktif.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1: Desain LKPD */}
              <div 
                onClick={() => setActiveModal('desain')} 
                className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 aspect-video flex items-center justify-center cursor-pointer shadow-lg hover:border-purple-500/50 transition duration-300"
              >
                <img src="/images/desain1.jpeg" alt="Desain Media Interaktif" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                
                <div className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-md border border-gray-700 text-purple-300 px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 z-10">
                  <Layers className="w-3 h-3" /> +3 Gambar
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-5">
                  <div>
                    <p className="text-sm font-bold text-white">Desain Media Interaktif / LKPD</p>
                    <p className="text-xs text-purple-300">Graphic Design (Klik untuk buka album)</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Koleksi Fotografi 01 */}
              <div 
                onClick={() => setActiveModal('foto1')} 
                className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 aspect-video flex items-center justify-center cursor-pointer shadow-lg hover:border-purple-500/50 transition duration-300"
              >
                <img src="/images/foto1.jpg" alt="Koleksi Fotografi 01" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                
                <div className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-md border border-gray-700 text-purple-300 px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 z-10">
                  <ImageIcon className="w-3 h-3" /> +3 Foto
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-5">
                  <div>
                    <p className="text-sm font-bold text-white">Koleksi Fotografi 01</p>
                    <p className="text-xs text-purple-300">Photography (Klik untuk buka album)</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Koleksi Fotografi 02 */}
              <div className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 aspect-video flex items-center justify-center cursor-pointer shadow-lg hover:border-purple-500/50 transition duration-300">
                <img src="/images/foto2.jpg" alt="Koleksi Fotografi 02" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-5">
                  <div>
                    <p className="text-sm font-bold text-white">Koleksi Fotografi 02</p>
                    <p className="text-xs text-purple-300">Photography</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-16 bg-gray-950 border-t border-gray-800/80">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Mari Terhubung!</h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">Tertarik untuk berkolaborasi dalam pengembangan sistem, IT support, atau proyek desain visual?</p>

            <div className="flex justify-center items-center space-x-6 mb-10">
              <a href="https://www.linkedin.com/in/zahraputri-armelia-59a1b7324" target="_blank" rel="noreferrer" title="LinkedIn" className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-950/50 transition duration-300">
                <Globe className="w-5 h-5" />
              </a>
              
              <a href="https://github.com/zahraputri19" target="_blank" rel="noreferrer" title="GitHub" className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-950/50 transition duration-300">
                <Code className="w-5 h-5" />
              </a>
              
              <a href="https://www.instagram.com/zahraputriarmelia_" target="_blank" rel="noreferrer" title="Instagram" className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-pink-500 hover:bg-pink-950/50 transition duration-300">
                <Share2 className="w-5 h-5" />
              </a>

              <a href="mailto:zahraputriarmelia12@gmail.com" title="Email" className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-emerald-500 hover:bg-emerald-950/50 transition duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <p className="text-gray-500 text-xs">&copy; 2026 Zahra Putri Armelia. All rights reserved.</p>
          </div>
        </footer>

      </main>

      {/* Modal Popup Album React */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-1">{galleryData[activeModal].title}</h3>
            <p className="text-xs text-purple-400 mb-6 font-semibold uppercase tracking-wider">{galleryData[activeModal].category}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {galleryData[activeModal].images.map((imgSrc, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-950/80 p-2 flex items-center justify-center group hover:border-purple-500/40 transition duration-300">
                  <img 
                    src={imgSrc} 
                    alt={`Album ${idx + 1}`} 
                    className="w-full h-64 object-contain rounded-xl group-hover:scale-102 transition duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;