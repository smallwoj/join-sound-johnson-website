<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <AppHeader />
        <router-view />
        <AppFooter />
      </v-container>
    </v-main>
  </v-app>
</template>
