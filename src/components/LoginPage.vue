<template>
  <div>
    <AppNavbar />
    <div class="container">
      <h2 class="title">Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" class="form-control" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import AppNavbar from './AppNavbar.vue';
import { login } from '../services/authService';

export default {
  name: 'LoginPage',
  components: {
    AppNavbar
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await login({ username: this.username, password: this.password });
        this.$router.push('/profile');
      } catch (error) {
        alert('Login failed: ' + error.message);
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2.title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.btn-block {
  width: 100%;
  margin-top: 20px;
}
</style>
