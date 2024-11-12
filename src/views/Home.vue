<template>
  <div class="home-container" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div id="typing-container">
      <span id="typed-text"></span>
      <p id="photo-intro-comment"> Learn more about my interests and qualifications!</p>
      <p id="photo-comment">For some reason I am really proud of this picture I took</p>
    </div>
  </div>
  
  <div class="bio-container">
    <h2 id="about-me-title">About Me</h2>
    <div class="bio-content">
      <div class="bio-text">
        <div class="education-box">
          <i class="fas fa-graduation-cap"></i> <!-- Education icon -->
          <h3>Education</h3>
          <p>
            B.S. in Data Science & Enviormental Economics <br>
            UC Berkeley, Class of 2025
          </p>
        </div>
        <p>
          Hi! My name is Nicolas Perez, and I am a 21 year old senior studying Data Science and Enviormental Economics at UC Berkeley. Some of my favorite free time activities include watching the LA Lakers!, going on runs, exploring new restaurants with friends, and listening to music. From a young age, I have known that my proffesional goals and priorities include making a real positive impact. Whether that be impacting people who use a particular product or impacting a team developing a product, my ambition guides me daily in wanting to make my future meaningful. I am super eager to continue my journey within the field of software engineering and data science.
        </p>
      </div>
      <div class="bio-image">
        <img :src="profileImage" alt="Profile Picture" />
      </div>
    </div>
    
    <h2 id="skills-title">Skills</h2>
    <router-link :to="{ name: 'Experiences' }" class="explore-link">
      Explore my skills further!
    </router-link>
    
    <div class="resume-container">
      <a href="/resume.pdf" target="_blank" class="resume-link">
        <i class="fas fa-file-alt"></i> <!-- Icon for the resume -->
        <span>Click to View Resume</span>
      </a>
    </div>
    
    <div class="skills-section">
      <div class="skills-block">
        <h3>Frontend Development</h3>
        <ul>
          <li><i class="fas fa-code"></i> HTML - Experienced</li>
          <li>CSS - Experienced</li>
          <li>JavaScript - Experienced</li>
          <li>React.js - Experienced</li>
          <li>Vue.js - Experienced</li>
        </ul>
      </div>
      
      <div class="skills-block">
        <h3>Backend Development</h3>
        <ul>
          <li>R - Experienced</li>
          <li>Python - Experienced</li>
          <li>Java - Experienced</li>
          <li>SQL - Experienced</li>
          <li>Git - Experienced</li>
        </ul>
      </div>
      
      <div class="skills-block">
        <h3>Other Skills</h3>
        <ul>
          <li>Data Visualization - Experienced</li>
          <li>NLP - Experienced</li>
          <li>Data Mining - Experienced</li>
          <li>Excel - Experienced</li>
          <li>Project Management- Experienced</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="contact-me-container">
    <h2 id="contact-me-title">Contact Me</h2>
    <div class="contact-links">
      <a href="mailto:nickprz03@gmail.com" class="contact-link">
        <i class="fas fa-envelope"></i> nickprz03@gmail.com
      </a>
      <a href="https://www.linkedin.com/in/nicolas-perez-10531b184/" target="_blank" class="contact-link">
        <i class="fab fa-linkedin"></i> LinkedIn
      </a>
    </div>
  </div>
</template>


<script>

import goldenGate from '../assets/my-golden-gate.jpg';
import profilePic from '../assets/profile-pic.jpeg';
import sanFran from '../assets/san-fran.jpg';

export default {
  name: 'Home',
  data() {
    return {
      backgroundImage: goldenGate, // Store the imported image
      profileImage : profilePic
      // sanFran
    };
  },
  mounted() {
    // Typing effect code
    let textToType = "Welcome to Nick's Page!";
    let index = 0;
    let typedTextElement = document.getElementById('typed-text');

    function typeWriter() {
      if (index < textToType.length) {
        typedTextElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust typing speed here if needed
      } else {
        setTimeout(resetText, 2000); // Adjust delay before restarting typing
      }
    }

    function resetText() {
      typedTextElement.innerHTML = "";
      index = 0;
      typeWriter();
    }

    typeWriter(); // Start the typing effect

    // Scroll animation for skill blocks
    const skillsBlocks = document.querySelectorAll('.skills-block');

  function handleScroll() {
    skillsBlocks.forEach(block => {
      const blockTop = block.getBoundingClientRect().top;
      const blockBottom = block.getBoundingClientRect().bottom;
      if (blockTop < window.innerHeight - 100 && blockBottom > 0) {
        block.classList.add('show'); // Add the show class if in view
      } else {
        block.classList.remove('show'); // Remove the show class if out of view
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
}
};
</script>

<style scoped>

/* Container for the background image */

body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* To avoid padding affecting width calculations */
  overflow-x: hidden; /* This will avoid any horizontal scrolling */
  width: 100%;  
  height: 100%;
}
.navbar {
  position: absolute;
  width: 100%;
  backdrop-filter: blur(5px); /* Makes navbar transparent over image */
  top: 0;
  left: 0;
  z-index: 2;                /* Ensure navbar stays above image and text */
  display: flex;
  justify-content: space-between;
}

/* home screen typing */

.home-container {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0;
  padding: 0;
  border-bottom: 5px solid black; /* Add this to create a border */
}
#typing-container {
  text-align: center;  
  font-size: 3rem;  
  z-index: 1; /* Ensure text stays above background image */  
  position: absolute; /* Make it absolute so it can be placed anywhere in the container */  
  top: 50%; /* Push it halfway down the container */  
  left: 50%; /* Center it horizontally */  
  transform: translate(-50%, -50%); /* Center it vertically */
  margin-top: 200px;
}

#typed-text {
  font-weight: bold;
  color: black;
  font-size: 4rem;
  font-family: 'Georgia', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
#photo-comment {
  font-size: 1.5rem;
  color: black;
  font-style: italic;
  margin-top: 400px; /* Add space between the title and the comment */
  font-family: 'Helvetica', sans-serif;
}

#photo-intro-comment {
  font-size: 1.85rem;
  color: black;
  font-style: italic;
  margin-top: 1cap; /* Add space between the title and the comment */
  font-family: 'Helvetica', sans-serif;
}


/* bio section */

.bio-container {
  padding: 0;
  height: auto;
  width: 100%;
  background-color: rgb(74, 89, 107);
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  /* border-bottom: 5px dotted black; */
  padding-bottom: 50px;
}
.bio-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 90%;
  text-align: center;
  padding-bottom: 10px;
  gap: 150px;
}

.bio-text {
  flex: 1;
  padding-right: 20px;
  font-size: 20px;
  font-family: 'Georgia', 'serif';
  padding-bottom: 1px;
  color: white;
}

.bio-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
}
.bio-image img {
  max-width: 80%;
  border-radius: 60px; /* Round the corners of the image */
}
.education-box {
  background-color: none;
  border: 1px solid black;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 70px;
  justify-content: flex-start;
}
.education-box i {
  font-size: 2rem;
  display: block;
  margin: 10px 0;
}
h3 {
  font-style: bold;
  font-size: 20px;
}
#about-me-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-family: 'Georgia',serif;
}

/* skills section */

.skills-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px; /* Space between skill cards */
  width: 100%; /* Make sure it takes up the full width */
  padding: 20px;
  box-sizing: border-box; /* Ensure padding doesn’t break the layout */
  justify-content: right; /* Center the skill boxes */  
  align-items: right;
}
.skills-block {
  background-color: rgba(127, 140, 150, 0.686);
  padding: 20px;  
  border-radius: 15px;  
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */  
  transition: transform 0.3s ease; /* Animation for hover effect */  
  width: 300px;  text-align: center;  
  margin: 20px;
  opacity: 0;
  /* transform: translateY(20px);  
  transition: opacity 0.6s ease-out, transform 0.6s ease-out; */
}
.skills-block {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.skills-block.show {
  opacity: 1;
  transform: translateY(0);
}
.skills-block:hover {
  transform: scale(1.05); /* Slightly enlarge the card on hover */
}
.skills-block h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
  position: relative;
}
.skills-block h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: #ffa500; /* Accent color */
}

.skills-block ul {
  list-style: none;
  padding: 0;
}

.skills-block li {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: white;
}
#skills-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0px;
  font-family: 'Times New Roman', Times, serif;
}

/* contact section */ 

.contact-me-container {
  height: auto;
  width: 100%;
  background-color: rgba(127, 140, 150, 0.686);
  display: flex;
  flex-direction: column;
  align-items: auto;
}
#contact-me-title {
  text-align: left;
  font-size: 2.5rem;
  margin-bottom: 30px;
  padding-left: 30px;
  font-family: 'Georgia',serif;
}
.contact-links {
  background-color: white;
  padding: 20px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Adjust space between icons */
  margin: 50px auto;
  max-width: 800px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.contact-link {
  display: flex;
  align-items: center;
  font-size: 25px;
  text-decoration: none;
  color: black;
}
.contact-link i {
  margin-right: 10px;
  font-size: 24px;
}

/* resume section */

.resume-container {
  text-align: center;
  margin-top: 20px;
}

.resume-link {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  margin-top: 15px;
  transition: color 0.3s ease;
}

.resume-link:hover {
  color: #ffa500; /* Accent color on hover */
}

.resume-link i {
  margin-right: 10px;
  font-size: 1.5rem;
}

/* Different screen sizes */

@media (max-width: 768px) {
  /* Adjust the home-container height for smaller screens */
  .home-container {
    height: auto; /* Allow the container to adjust height */
    min-height: 100vh; /* Ensure minimum height is 100% of the viewport */
  }

  /* Adjust text size and spacing */
  #typing-container {
    font-size: 2rem;
  }

  #typed-text {
    font-size: 3rem;
  }

  #photo-intro-comment, #photo-comment {
    font-size: 1.2rem; /* Adjust text size for smaller screens */
    margin-top: 0.5rem;
  }
}

/* Additional media query for very small screens */
@media (max-width: 480px) {
  #typed-text {
    font-size: 2.5rem;
  }

  #photo-intro-comment, #photo-comment {
    font-size: 1rem;
  }
}

</style>
  