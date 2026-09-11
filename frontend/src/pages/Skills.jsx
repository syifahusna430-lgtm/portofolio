import React from 'react';

const Skills = () => {
  // --- SVG ICONS ---
  // Menggunakan 'currentColor' agar warna mengikuti parent (text-primary)
  const WindowIcon = ({ size = 24, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 9V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const ServerIcon = ({ size = 24, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 17L9 12L4 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 19H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const DatabaseIcon = ({ size = 24, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 5.5C4 3.84315 7.58172 2.5 12 2.5C16.4183 2.5 20 3.84315 20 5.5V18.5C20 20.1569 16.4183 21.5 12 21.5C7.58172 21.5 4 20.1569 4 18.5V5.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 5.5C4 7.15685 7.58172 8.5 12 8.5C16.4183 8.5 20 7.15685 20 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

const skillCategories = [
    {
      title: "Frontend Development",
      icon: <WindowIcon size={24} />,
      skills: ["HTML", "CSS","React.js", "Boostrap","JavaScript"]
    },
    {
      title: "Backend Development",
      icon:  <ServerIcon size={24} />,
      skills: ["PHP", "Node.js", "Express.js", "Python","REST API", "JWT", "Bcrypt"]
    },
    {
      title: "Database & Tools",
      icon:  <DatabaseIcon size={24} />,
      skills: ["PostgreSQL", "MySQL", "Vs Code", "Git/GitHub", "Figma", "Insomnia", "Postman", "XAMPP"]
    }
  ];

  return (
    <section id="skills" className="py-5 bg-white">
      <div className="container py-5 text-center">
        <h2 className="fw-bold mb-3" style={{ fontFamily: "Times New Roman, Serif" }}>My Skills</h2>
        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>
          Keahlian teknis yang saya kuasai dan terus kembangkan setiap harinya.
        </p>
        <div className="bg-primary mx-auto rounded mb-5" style={{ width: '60px', height: '4px' }}></div>

        <div className="row g-4 mt-2 text-start">
          {skillCategories.map((category, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-light">
                <div className="d-flex align-items-center gap-3 mb-4">
                  {/* Kotak Icon: text-primary akan membuat SVG berwarna biru karena currentColor */}
                  <div 
                    className="bg-white text-primary rounded-3 shadow-sm d-flex align-items-center justify-content-center" 
                    style={{ width: '50px', height: '50px' }}
                  >
                    {category.icon}
                  </div>
                  <h5 className="fw-bold mb-0">{category.title}</h5>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="badge bg-secondary-subtle text-secondary-emphasis rounded-pill px-3 py-2 fw-medium border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


