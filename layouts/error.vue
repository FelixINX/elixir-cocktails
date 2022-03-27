<template>
  <div>
    <v-dialog v-model="done" width="312" class="font-weight-medium">
      <v-card rounded="lg" color="#f1e7e8">
        <v-card-title class="justify-center pt-6 pb-0">
          <v-icon color="secondary">mdi-shovel</v-icon>
        </v-card-title>
        <v-card-title
          class="text-center"
          style="word-break: break-word; color: #1e1a1d"
          >Site web en construction</v-card-title
        >
        <v-card-text style="color: #534343"
          >Revenez bientôt nous voir pour visiter notre site web
          complet</v-card-text
        >
        <v-card-actions class="pb-6 justify-end">
          <v-btn
            text
            color="primary"
            href="https://instagram.com/elixir.cocktail"
            >Suis-nous sur Insta!</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['error'],
  data: () => ({
    done: true,
  }),
};
</script>
