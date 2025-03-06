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
    width: 100vw;
    background-size: cover;
    background-position: center;
    margin-left: 100px;
    padding-top: 100px;
    justify-content: center;
    position: relative; 
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
  color: rgb(56, 16, 233);
}
  </style>