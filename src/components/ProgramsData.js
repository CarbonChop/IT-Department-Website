import React from 'react';
import ProgramAccordion from './ProgramAccordion';
import './ProgramsData.css';

function ProgramsData() {
    const programs = [
        // Associate Programs
        {
            title: "Computer Information Technology",
            overview: "The Associate in Computer Information Technology prepares students for diverse IT careers, focusing on system administration, network management, and database management. Students will gain practical experience in troubleshooting hardware and software, configuring networks, and working with various operating systems.",
            curriculum: "Courses include programming, networking fundamentals, database systems, and web development. Students will also learn system administration, operating systems, and cybersecurity basics.",
            admission: "High school diploma or equivalent with a minimum GPA of 2.5. Basic computer literacy is recommended.",
            careerProspects: "Graduates can become IT support specialists, network administrators, database analysts, and system administrators."
        },
        {
            title: "Cyber Security",
            overview: "The Cyber Security Associate program teaches students how to protect systems, networks, and data from cyber threats. Students learn ethical hacking, network security, and digital forensics, gaining hands-on experience with security tools and practices.",
            curriculum: "Core courses include network security, ethical hacking, digital forensics, cybersecurity principles, and cyber law. Hands-on labs and real-world simulations are integral parts of the curriculum.",
            admission: "High school diploma or equivalent with a minimum GPA of 2.5. Basic understanding of computers and networks is recommended.",
            careerProspects: "Graduates can become security analysts, penetration testers, incident response specialists, and network security administrators."
        },
        {
            title: "Data Analytics",
            overview: "The Data Analytics Associate program provides foundational skills in analyzing large datasets, using statistical analysis, data visualization, and programming tools like Python, R, and SQL. Students will be trained to extract meaningful insights from data to support business decisions.",
            curriculum: "Courses include data visualization, data cleaning, statistical analysis, and database management using SQL. Students will also learn how to use analytics tools like Excel and Python for data manipulation.",
            admission: "High school diploma or equivalent with a minimum GPA of 2.5. A background in mathematics or statistics is recommended but not required.",
            careerProspects: "Graduates can become data analysts, business intelligence analysts, data visualization specialists, and marketing analysts."
        },
        {
            title: "Networking Technologies",
            overview: "The Networking Technologies Associate program prepares students to design, implement, and manage networks. The program covers the setup of local and wide-area networks, security practices, and wireless technologies.",
            curriculum: "Courses include networking fundamentals, routing and switching, network security, wireless networking, and cloud computing. Students also learn about network troubleshooting and configuration.",
            admission: "High school diploma or equivalent with a minimum GPA of 2.5. Basic computer skills are recommended.",
            careerProspects: "Graduates can pursue roles as network administrators, systems engineers, IT support specialists, and network security technicians."
        },
        {
            title: "Project Management",
            overview: "The Associate in Project Management program provides students with the skills necessary to manage IT projects, including planning, resource allocation, budgeting, and risk management. The program focuses on IT project management principles, including Agile and Scrum methodologies.",
            curriculum: "Courses include project planning and scheduling, risk management, IT project management, and Agile methodologies. Students will also learn about cost management and quality control in projects.",
            admission: "High school diploma or equivalent with a minimum GPA of 2.5. Some prior knowledge of business management is helpful but not required.",
            careerProspects: "Graduates can become IT project managers, project coordinators, and program managers."
        },
      
        // Bachelor Programs
        {
            title: "Data Analytics",
            overview: "The Bachelor's degree in Data Analytics expands on foundational skills to prepare students for advanced roles in data science and analytics. Students will gain expertise in machine learning, big data analytics, and predictive modeling.",
            curriculum: "Courses include machine learning, big data technologies, predictive analytics, and data mining. Students also work with advanced analytics tools like Python, R, and Hadoop.",
            admission: "Completion of an Associate’s degree in a related field or equivalent work experience. Minimum GPA of 3.0 required.",
            careerProspects: "Graduates can pursue careers as data scientists, machine learning engineers, data analysts, and business intelligence specialists."
        },
        {
            title: "Cyber Security",
            overview: "The Bachelor's degree in Cyber Security builds on the Associate program, providing advanced skills in securing IT systems, networks, and applications. Students will study topics such as penetration testing, cyber forensics, and security governance.",
            curriculum: "Courses include advanced network security, penetration testing, incident response, cyber forensics, and risk management. The program includes hands-on labs and real-world case studies.",
            admission: "Completion of an Associate’s degree in Cyber Security or a related field. Minimum GPA of 3.0 required.",
            careerProspects: "Graduates can work as cyber security architects, penetration testers, information security officers, and cyber security consultants."
        },
        {
            title: "Immersive Technologies",
            overview: "The Bachelor's in Immersive Technologies focuses on emerging fields such as virtual reality (VR), augmented reality (AR), and mixed reality (MR). Students will learn to develop immersive applications, simulations, and games.",
            curriculum: "Courses include 3D modeling, VR/AR development, interactive design, game development, and user experience (UX) design. Students will also work with VR/AR hardware and software tools.",
            admission: "Completion of an Associate’s degree in a related field, such as Game Development or Computer Science. A portfolio showcasing technical and creative skills is recommended.",
            careerProspects: "Graduates can pursue careers as VR/AR developers, game developers, immersive media designers, and interactive media artists."
        },
        {
            title: "Networking Systems Analyst",
            overview: "The Bachelor's in Networking Systems Analyst prepares students to design, implement, and manage large-scale networks and IT systems. The program covers systems integration, cloud computing, and advanced network security.",
            curriculum: "Courses include network analysis, cloud computing, systems integration, network security, and virtualization. Students will also learn how to troubleshoot and optimize large-scale IT infrastructures.",
            admission: "Completion of an Associate’s degree in Networking Technologies or a related field. Minimum GPA of 3.0 required.",
            careerProspects: "Graduates can work as systems analysts, network architects, cloud engineers, and IT infrastructure managers."
        },
        {
            title: "Project Management",
            overview: "The Bachelor's degree in Project Management focuses on leadership skills, strategic planning, and advanced project management methodologies. Students learn to manage complex IT projects with a focus on Agile and Lean practices.",
            curriculum: "Courses include advanced project management, leadership, cost management, strategic planning, and Agile project management. Students also engage in team-based projects and internships.",
            admission: "Completion of an Associate’s degree in Project Management or a related field. Minimum GPA of 3.0 required.",
            careerProspects: "Graduates can become IT project managers, program managers, operations managers, and project directors."
        },
        {
            title: "Web Development",
            overview: "The Bachelor's degree in Web Development teaches students how to build dynamic, interactive websites and web applications. The program covers both front-end and back-end development using popular programming languages and frameworks.",
            curriculum: "Courses include front-end development (HTML, CSS, JavaScript), back-end programming (Node.js, PHP), database management, and mobile app development.",
            admission: "Completion of an Associate’s degree in Web Development or a related field. A strong background in web technologies is required.",
            careerProspects: "Graduates can work as web developers, full-stack developers, back-end developers, and front-end designers."
        }
    ];
    return (
        <section className="programs">
          <h2>Associate Programs</h2>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <ProgramAccordion key={index} program={program} />
            ))}
          </div>
      
          <h2>Bachelor Programs</h2>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <ProgramAccordion key={index} program={program} />
            ))}
          </div>
        </section>
      );
}

export default ProgramsData;
