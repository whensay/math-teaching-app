<template>
  <div>
    <AppNavbar />
    <div class="container">
      <h2 class="title">Register</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" class="form-control" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" class="form-control" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" class="form-control" />
        </div>
        <button type="submit" class="btn btn-success btn-block">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import AppNavbar from './AppNavbar.vue';
import { register } from '../services/authService';

export default {
  name: 'RegisterPage',
  components: {
    AppNavbar
  },
  data() {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  methods: {
    async register() {
      try {
        await register({ username: this.username, password: this.password, email: this.email });
        this.$router.push('/login');
      } catch (error) {
        alert('Registration failed: ' + error.message);
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
