import React from 'react';
import DisplayFaculty from '../components/DisplayFaculty';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './FacultyPage.css';

function FacultyPage() {
    const facultyData = [
        {
          name: "Dr. Jane Doe",
          photo: "/images/jane doe.jpg",
          position: "Professor of AI",
          department: "Computer Science",
          campus: "Central Campus",
          credentials: "Ph.D. in Artificial Intelligence from Arizona State University",
          email: "jane.doe@broward.edu"
        },
        {
          name: "Dr. John Smith",
          photo: "/images/john smith.jpg",
          position: "Professor of Networking",
          department: "Information Technology",
          campus: "South Campus",
          credentials: "Ph.D. in Networking from University of Miami",
          email: "john.smith@broward.edu"
        },
        {
          name: "Dr. Sarah Lee",
          photo: "/images/sarah lee.jpg",
          position: "Professor of Data Analytics/AI",
          department: "Data Science",
          campus: "South Campus",
          credentials: "Ph.D. in Data Analytics from Florida State University",
          email: "sarah.lee@broward.edu"
        },
        {
          name: "Dr. Robert Johnson",
          photo: "/images/robert johnson.jpg",
          position: "Professor of Project Management",
          department: "Information Technology",
          campus: "Central Campus",
          credentials: "Ph.D. in Project Management from University of Florida",
          email: "robert.johnson@broward.edu"
        },
        {
          name: "Dr. Robin Gant",
          photo: "/images/robin gant.jpg",
          position: "Professor of Cyber Security",
          department: "Computer Science",
          campus: "North Campus",
          credentials: "Ph.D. in Cyber Security from Nova Southeastern University",
          email: "robin.gant@broward.edu"
        },
        {
          name: "Dr. Wendy Huang",
          photo: "/images/wendy huang.jpg",
          position: "Professor of Software/Web Development",
          department: "Computer Science",
          campus: "Central Campus",
          credentials: "Ph.D. in Software Development from Georgia Institute of Technology",
          email: "wendy.huang@broward.edu"
        }
      ];

    return (
        <>
            <Navbar />
                <DisplayFaculty facultyData={facultyData}/>
            <Footer />
        </>
    );
}

export default FacultyPage;