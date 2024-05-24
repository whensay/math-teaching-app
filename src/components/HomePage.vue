<template>
  <div>
    <AppNavbar />
    <div class="container">
      <h1 class="title">Welcome to Math Teaching App</h1>
      <div class="nav-links">
        <router-link to="/login" class="btn btn-primary">Login</router-link>
        <router-link to="/register" class="btn btn-success">Register</router-link>
        <router-link to="/math-teaching" class="btn btn-info">Math Teaching</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from './AppNavbar.vue';

export default {
  name: 'HomePage',
  components: {
    AppNavbar
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

.nav-links {
  display: flex;
  justify-content: space-around;
}

.btn {
  width: 120px;
  margin: 10px 0;
}
</style>
