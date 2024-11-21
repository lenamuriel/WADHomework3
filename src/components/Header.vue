<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Sign Up</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  header {
    position: sticky;
    top: 0;
    z-index: 1000;
}
  nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    background-color: #333;
  }
  
  nav a {
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    background-color: #333;
  }
  </style>
  