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
      <div class="slider-controls">
        <button @click="moveToNextCard('technical')" class="arrow left">&#10094;</button>
        <div class="card-container">
          <img
            v-for="(exp, i) in orderedTechnicalExperiences"
            :key="exp.name"
            class="card"
            :class="`card-${i + 1}`"
            :src="exp.image"
            alt="Experience Image"
          />
        </div>
        <button @click="moveToNextCard('technical')" class="arrow right">&#10095;</button>
      </div>
    </div>

    <!-- Other Experiences Slider -->
    <div class="slider-container">
      <h2>Other Experiences</h2>
      <div class="slider-controls">
        <button @click="moveToNextCard('other')" class="arrow left">&#10094;</button>
        <div class="card-container">
          <img
            v-for="(exp, i) in orderedOtherExperiences"
            :key="exp.name"
            class="card"
            :class="`card-${i + 1}`"
            :src="exp.image"
            alt="Experience Image"
          />
        </div>
        <button @click="moveToNextCard('other')" class="arrow right">&#10095;</button>
      </div>
    </div>
  </div>
</template>

<script>
import glade from '../assets/glade-pic.jpeg';
import hoamsy from '../assets/hoamsy-logo.png';
import berkeleyEECS from '../assets/berkeley-eecs-logo.png';
import earnup from '../assets/earnup-logo.jpeg';
import cyc from '../assets/cyc-logo.jpeg';
import brb from '../assets/brb-logo.png';
import amazon from '../assets/amazon-logo.png';
import csm from '../assets/csm picture.png';
import gpn from '../assets/gpn-picture.png';

export default {
  data() {
    return {
      backgroundImage: glade,
      technicalIndex: 0,
      otherIndex: 0,
      technicalExperiences: [
        { name: 'Hoamsy', image: hoamsy },
        { name: 'Berkeley EECS', image: berkeleyEECS },
        { name: 'EarnUp', image: earnup },
      ],
      otherExperiences: [
        { name: 'Consult Your Community', image: cyc },
        { name: 'Computer Science Mentors', image: csm },
        { name: 'BRB', image: brb },
        { name: 'Amazon', image: amazon },
        { name: 'Green Power Network', image: gpn },
      ],
    };
  },
  computed: {
    orderedTechnicalExperiences() {
      return this.rotateArray(this.technicalExperiences, this.technicalIndex);
    },
    orderedOtherExperiences() {
      return this.rotateArray(this.otherExperiences, this.otherIndex);
    },
  },
  methods: {
    moveToNextCard(type) {
      if (type === 'technical') {
        this.technicalIndex = (this.technicalIndex + 1) % this.technicalExperiences.length;
      } else {
        this.otherIndex = (this.otherIndex + 1) % this.otherExperiences.length;
      }
    },
    rotateArray(array, index) {
      return [...array.slice(index), ...array.slice(0, index)];
    },
  },
};
</script>

<style scoped>
.home-container {
  height: 80vh;
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
}

h1 {
  font-weight: bold;
  color: black;
  font-size: 4rem;
  font-family: 'Georgia', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

h2 {
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.slider-container {
  text-align: center;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.card-container {
  position: relative;
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: transform 0.5s ease-in-out;
}

.card-1 {
  transform: translate(0, 0) scale(1);
  z-index: 10;
}

.card-2 {
  transform: translate(20px, -20px) scale(0.95);
  z-index: 7;
}

.card-3 {
  transform: translate(40px, -40px) scale(0.9);
  z-index: 4;
}

.arrow {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
}

.arrow:hover {
  color: black;
}
</style>
