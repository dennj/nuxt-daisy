<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

// Supabase client from the Nuxt plugin
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
  <div class="min-h-screen flex items-center justify-center bg-base-200 text-base-content">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
      <!-- Page Title -->
      <h1 class="text-4xl font-bold mb-4 text-primary">Welcome to Pluton Capital</h1>
      <p class="text-lg text-gray-600 mb-6">Sign in with your Google account to continue.</p>

      <!-- Google Login Button -->
      <button @click="handleGoogleLogin" class="btn btn-primary btn-lg w-full">
        Login with Google
      </button>

      <!-- Footer Text -->
      <p class="mt-6 text-sm text-gray-500">
        By signing in, you agree to our
        <a href="/terms" class="text-primary hover:underline">Terms of Service</a> and
        <a href="/privacy" class="text-primary hover:underline">Privacy Policy</a>.
      </p>
    </div>
  </div>
</template>
