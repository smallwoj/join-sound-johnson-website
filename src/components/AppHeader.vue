<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import iconURL from '@/assets/join-sound-johnson.svg?url';
</script>

<template>
  <v-row>
    <v-spacer />
    <v-col cols="1">
      <router-link to="/">
        <v-img :src="iconURL" />
      </router-link>
    </v-col>
    <v-col
      cols="auto"
      align-self="center"
    >
      <div class="d-flex flex-column">
        <h1>Join Sound Johnson</h1>
      </div>
    </v-col>
    <v-spacer />
  </v-row>
</template>
