<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

// Supabase client from the plugin
const { $supabase } = useNuxtApp();

// Handle Google Login
async function handleGoogleLogin() {
  try {
    const { data, error } = await $supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) throw error;

    // Redirect after successful login
    console.log('Login successful:', data);
    router.push('/');
  } catch (error) {
    console.error('Error logging in:', error.message);
    alert('Login failed: ' + error.message);
  }
}
</script>

<template>
  <div class="container mx-auto py-12 text-center">
    <h1 class="text-4xl font-bold mb-6">Login</h1>
    <p class="mb-6 text-gray-700">Sign in with your Google account to continue.</p>
    <button @click="handleGoogleLogin" class="btn btn-primary">
      Login with Google
    </button>
  </div>
</template>
