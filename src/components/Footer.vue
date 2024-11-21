<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ new Date().getFullYear() }} All Rights Reserved.</p>
      <p>Authors: Imre Saks, Till Bösch, Lena Balcke</p>
      <nav>
        <ul class="footer-links">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}
.footer-links li {
  display: inline;
  color: #fff;
}
</style>