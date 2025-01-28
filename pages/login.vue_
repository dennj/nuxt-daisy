<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`

watchEffect(() => {
  if (user.value) {
    //navigateTo('/login')
  }
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200 text-base-content">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
      <!-- Page Title -->
      <h1 class="text-4xl font-bold mb-4 text-primary">Welcome to Pluton Capital</h1>
      <p class="text-lg text-gray-600 mb-6">Sign in with your Google account to continue.</p>

      <!-- Google Login Button -->
      <button  @click="auth.signInWithOAuth({ provider: 'google', options: { redirectTo } })" class="btn btn-primary btn-lg w-full">
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
