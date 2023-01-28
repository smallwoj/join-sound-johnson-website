<script setup lang="ts">
//
</script>

<template>
  <v-footer
    class="text-center d-flex flex-column"
    absolute
  >
    <div>
      <router-link to="/terms-of-service">
        <span>Terms of Service</span>
      </router-link>
      <span class="px-2">●</span>
      <router-link to="/privacy-policy">
        <span>Privacy Policy</span>
      </router-link>
    </div>
    <div>
      <span>{{ new Date().getFullYear() }}</span>
      <span class="px-2">●</span>
      <span>Joshua Smallwood</span>
    </div>
  </v-footer>
</template>
