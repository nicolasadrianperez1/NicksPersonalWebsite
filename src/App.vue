<template>
  <div id="app">
    <!-- Blurred Navbar -->
    <nav class="navbar">
      <div class="navbar-content">
        <span class="navbar-name">Nicolas Perez</span>
        <ul class="navbar-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/experiences">Experiences</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- Main content area where the routed components will be rendered -->
    <main>
      <router-view></router-view>
    </main>
  </div>

  <footer class="footer">
      <nav class="footer-nav">
        <router-link to="/" class="footer-link">Home</router-link>
        <router-link to="/experiences" class="footer-link">Experiences</router-link>
        <router-link to="/projects" class="footer-link">Projects</router-link>
      </nav>
    </footer>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  position: fixed;
  width: 98%;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.2); /* Light transparent background for blur effect */
  padding: 20px 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Adds subtle shadow */
}

.navbar-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.navbar-name {
  font-family: 'Great Vibes', cursive; /* Example fancy font for your name */
  font-size: 1.8rem;
  color: rgb(56, 16, 233); /* Adjust color if needed */
  margin-right: auto;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  color: black;
}

.navbar-links a {
  text-decoration: none;
  color: black; /* Adjust color if needed */
  font-size: 1.2rem;
  transition: color 0.3s;
  justify-content: flex-start;
}

.navbar-links a:hover {
  color: #ffa500; /* Change color on hover (example) */
}

/* Main content styles */
main {
  
  
}
/* Footer styles */
.footer {
  background-color: black;
  padding: 20px;
  width: 100vw; /* Ensure footer spans the full width */
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 5px solid black; /* Optional border for separation */
  border-bottom: 5px solid black; /* Optional border for separation */
  position: relative;
}

.footer-nav {
  display: flex;
  gap: 30px;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>

  