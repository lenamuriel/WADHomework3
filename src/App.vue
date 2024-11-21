<template>
  <Header></Header>
  <router-view/>
  <Footer></Footer>
</template>


<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #e0e0e0;
}

main {
  max-width: 800px;
  margin: 20px auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header, footer {
  background-color: #b0b0b0;
  color: white;
}

nav {
  display: flex;
  justify-content: center;
  padding: 10px;
}

nav a {
  color: black;
  margin-right: 1em;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-exact-active {
  text-decoration: underline;
}

.post {
  border: 1px solid #ccc;
  padding: 1em;
  margin: 1em 0;
  background-color: #f9f9f9;
}

form div {
  margin-bottom: 1em;
}

form label {
  display: block;
}

form input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}

button {
  background-color: #007BFF;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.error {
  color: red;
}
</style>
