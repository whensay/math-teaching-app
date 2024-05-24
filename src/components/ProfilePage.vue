<template>
    <div>
      <AppNavbar />
      <div class="container">
        <h2 class="title">Profile</h2>
        <form @submit.prevent="updateProfile">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" v-model="profile.username" id="username" class="form-control" disabled />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" v-model="profile.email" id="email" class="form-control" />
          </div>
          <div class="form-group">
            <label>Attempts: {{ profile.attempts }}</label>
          </div>
          <div class="form-group">
            <label>Correct: {{ profile.correct }}</label>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Update Profile</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import AppNavbar from './AppNavbar.vue';
  import { getProfile, updateProfile } from '../services/authService';
  
  export default {
    name: 'ProfilePage',
    components: {
      AppNavbar
    },
    data() {
      return {
        profile: {
          username: '',
          email: '',
          attempts: 0,
          correct: 0
        }
      }
    },
    async created() {
      try {
        this.profile = await getProfile();
      } catch (error) {
        alert('Failed to load profile: ' + error.message);
      }
    },
    methods: {
      async updateProfile() {
        try {
          await updateProfile({ email: this.profile.email });
          alert('Profile updated successfully');
        } catch (error) {
          alert('Failed to update profile: ' + error.message);
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
  