<template>
  <v-app class="ec-app">
    <v-app-bar app color="#fffbf4" elevation="0" height="100">
      <v-toolbar-title>Élixir Cocktails</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="primary">Qui sommes-nous</v-btn>
      <v-btn class="ml-2" text color="primary">Contactez-nous</v-btn>
      <v-btn class="ml-2" color="secondaryCon" depressed
        >Réserver un atelier</v-btn
      >
      <v-btn class="ml-2" color="primary" depressed>Commander un boîtier</v-btn>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
