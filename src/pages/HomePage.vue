<script setup lang="ts">
//
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex text-center fill-height">
      <p>
        Join Sound Johnson is a Discord bot that allows you to set a video or audio file that
        plays when you connect to a voice channel.
      </p>
      <p>
        It plays every time you first connect to a
        voice channel in a server. To hear the sound again, all you need to do is disconnect and
        reconnect to the voice channel. To combat spam, you can only play your sound every 30
        seconds.
      </p>
      <p>
        You can have a global join sound or local join sounds
        for every server that you are in. Local sounds take priority over the global sound.
      </p>
      <div class="d-flex justify-center">
        <v-btn
          color="primary"
          class="ma-2"
          href="https://discord.com/oauth2/authorize?client_id=953092836608319549&permissions=2184202240&scope=applications.commands%20bot"
          target="_blank"
        >
          <v-icon
            light
            class="mr-2"
          >
            mdi-account-plus
          </v-icon>
          Invite
        </v-btn>
        <v-btn
          color="primary"
          class="ma-2"
          href="https://top.gg/bot/953092836608319549"
          target="_blank"
        >
          <v-icon
            light
            class="mr-2"
          >
            mdi-message-draw
          </v-icon>
          top.gg
        </v-btn>
        <v-btn
          color="primary"
          class="ma-2"
          href="https://discord.gg/KZA8TFMwPN"
          target="_blank"
        >
          <v-icon
            light
            class="mr-2"
          >
            mdi-account-question
          </v-icon>
          Support Server
        </v-btn>
      </div>
    </v-responsive>
  </v-container>
</template>
