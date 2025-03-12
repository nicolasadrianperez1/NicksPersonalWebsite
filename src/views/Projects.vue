<template>
  <div class="home-container" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div id="typing-container">
      <h1>Projects Page</h1>
      <!-- <p> This is my dog </p> -->
    </div>
  </div>

</template>
  
  <script>
  import asher from '../assets/asher-pic.jpg';
  import profilePic from '../assets/profile-pic.jpeg';

  export default {
    name: 'Experiences',
    data () {
      return {
        profileImage : profilePic,
        backgroundImage : asher
      }
    }
    
  };
  </script>
  
  <style scoped>
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
  top: 20%; /* Push it halfway down the container */  
  left: 50%; /* Center it horizontally */  
  transform: translate(-50%, -50%); /* Center it vertically */
  margin-top: 200px;
}
h1 {
  font-weight: bold;
  color: black;
  font-size: 4rem;
  font-family: 'Georgia', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
  </style>