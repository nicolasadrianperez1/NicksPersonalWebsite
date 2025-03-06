<template>
  <div>
    <!-- Background container with title and subtitle -->
    <div class="home-container" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div id="typing-container">
        <h1>Experiences Page</h1>
        <p>website needs update</p>
      </div>
    </div>

    <!-- Technical Experiences Slider -->
    <div class="slider-container">
      <h2>Technical Experiences</h2>
      <Carousel :loop="true" :perPage="2" wrap-around>
        <Slide v-for="(exp, index) in technicalExperiences" :key="index">
          <div @click="navigateToDetail(exp.link)" class="card">
            <img :src="exp.image" alt="Experience Image" />
            <p>{{ exp.name }}</p>
          </div>
        </Slide>
      </Carousel>
    </div>

    <!-- Other Experiences Slider -->
    <div class="slider-container">
      <h2>Other Experiences</h2>
      <Carousel :loop="true" :perPage="2" wrap-around>
        <Slide v-for="(exp, index) in otherExperiences" :key="index">
          <div @click="navigateToDetail(exp.link)" class="card">
            <img :src="exp.image" alt="Experience Image" />
            <p>{{ exp.name }}</p>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

import elephants from '../assets/elephant.jpeg';
import hoamsy from '../assets/hoamsy-logo.png';
import berkeleyEECS from '../assets/berkeley-eecs-logo.png';
import earnup from '../assets/earnup-logo.jpeg';
import cyc from '../assets/cyc-logo.jpeg';
import brb from '../assets/brb-logo.png';
import amazon from '../assets/amazon-logo.png';

export default {
  name: 'Experiences',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      backgroundImage: elephants,
      technicalExperiences: [
        { name: 'Hoamsy', image: hoamsy, link: '/experiences/hoamsy' },
        { name: 'Berkeley EECS', image: berkeleyEECS, link: '/experiences/berkeley-eecs' },
        { name: 'EarnUp', image: earnup, link: '/experiences/earnup' },
      ],
      otherExperiences: [
        { name: 'Consult Your Community', image: cyc, link: '/experiences/cyc' },
        { name: 'BRB', image: brb, link: '/experiences/brb' },
        { name: 'Amazon', image: amazon, link: '/experiences/amazon' },
      ],
    };
  },
  methods: {
    navigateToDetail(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style scoped>
/* Background container with page title */
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
  border-bottom: 5px solid black;
}

#typing-container {
  text-align: center;
  font-size: 3rem;
  z-index: 1;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 200px;
  color: rgb(56, 16, 233);
}

/* Slider containers */
.slider-container {
  margin: 20px 0;
  padding: 20px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

/* Card styling */
.card {
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.card p {
  margin-top: 10px;
  font-weight: bold;
}

.card:hover {
  transform: scale(1.05);
}
</style>



  