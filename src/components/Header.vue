<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  nav a {
    text-decoration: none;
    font-weight: bold;
    color: #000;
  }
  </style>
  