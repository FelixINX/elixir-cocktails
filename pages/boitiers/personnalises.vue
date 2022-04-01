<template>
  <div class="d-flex justify-between">
    <v-container class="mt-12 px-8">
      <h1 class="text-h3 slide-in-top">Confectionnez votre boîtier</h1>
      <div class="mt-4 slide-in-top-delay">
        <h2 class="text-subtitle-2">
          Étape 1 : Sélectionnez les alcools que vous avez à la maison
        </h2>
        <v-chip-group v-model="step1" multiple color="secondary">
          <v-chip filter label outlined>Gin</v-chip>
          <v-chip filter label outlined>Vodka</v-chip>
          <v-chip filter label outlined>Tequila</v-chip>
          <v-chip filter label outlined>Rhum</v-chip>
          <v-chip filter label outlined>Whisky</v-chip>
          <v-chip filter label outlined>Liqueur</v-chip>
        </v-chip-group>
      </div>
      <div class="mt-4 slide-in-top" v-show="step1.length">
        <h2 class="text-subtitle-2">Étape 2 : Indiquez-nous vos goûts</h2>
        <v-chip-group v-model="step2" multiple color="secondary">
          <v-chip filter label outlined>Sucré</v-chip>
          <v-chip filter label outlined>Fort</v-chip>
          <v-chip filter label outlined>Salé</v-chip>
          <v-chip filter label outlined>Fruité</v-chip>
          <v-chip filter label outlined>Amer</v-chip>
          <v-chip filter label outlined>Liqueur</v-chip>
        </v-chip-group>
      </div>
      <div class="mt-4 slide-in-top" v-show="step2.length">
        <h2 class="text-subtitle-2">Étape 3 : Quel est votre niveau?</h2>
        <v-chip-group v-model="step3" color="secondary">
          <v-chip value="low" filter label outlined
            >Je n'ai jamais fait de cocktail</v-chip
          >
          <v-chip value="med" filter label outlined
            >Je m'y connais un peu</v-chip
          >
          <v-chip value="hig" filter label outlined
            >Je suis un alchimiste du cocktail</v-chip
          >
        </v-chip-group>
      </div>
      <div class="mt-4 slide-in-top" v-show="step3">
        <div class="d-flex flex-no-wrap align-center">
          <v-avatar size="100" class="mr-8">
            <v-img src="https://source.unsplash.com/EsVRjPacg98"></v-img>
          </v-avatar>
          <div>
            <h2 class="text-subtitle-2">Ajoutez le kit de départ pour 50$</h2>
            <h2 class="text-body-2">
              Tout ce qu'il vous faut pour devenir un alchimiste
            </h2>
            <v-btn
              depressed
              :color="kit ? 'white' : 'secondary'"
              @click="kit = !kit"
              class="px-4 mt-2"
            >
              <v-icon left v-text="kit ? 'mdi-check' : 'mdi-plus'"></v-icon>
              {{ kit ? 'Ajouté' : 'Ajouter au panier' }}
            </v-btn>
          </div>
        </div>
      </div>
      <v-card class="mt-16 slide-in-top-delay" v-show="step3">
        <v-card-title
          >Maintenant, laissez nos mixologues préparer votre boîte
          personnalisée</v-card-title
        >
        <v-card-subtitle
          >Commandez maintenant pour recevoir votre boîte lundi
          prochain</v-card-subtitle
        >
        <v-card-actions>
          <v-btn depressed color="primary" class="px-4" @click="dialog = true"> 
            <v-icon left>mdi-cart-outline</v-icon>
            Passer à la ciasse
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-img
      width="25%"
      height="calc(100vh - 100px)"
      src="https://source.unsplash.com/YNMjGIPgD_c"
    ></v-img>
    <v-dialog v-model="dialog" width="312" class="font-weight-medium text-center">
      <v-card rounded="lg" color="#f1e7e8">
        <v-card-title class="justify-center pt-6 pb-0">
          <v-icon color="secondary">mdi-truck-fast-outline</v-icon>
        </v-card-title>
        <v-card-title
          class="text-center"
          style="word-break: break-word; color: #1e1a1d"
          >Et c'est parti!</v-card-title
        >
        <v-card-text style="color: #534343"
          >Votre livraison devrait arriver lundi prochain. D'ici quelques minutes, vous recevrez un code de répérage à votre addresse courriel.</v-card-text
        >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Boîtiers - Élixir Cocktails',
  },
  data: () => ({
    step1: [],
    step2: [],
    step3: null,
    kit: false,
    dialog: false,
  }),
};
</script>

<style lang="scss">
.ec-box {
  width: 100%;
  &-choice {
    max-width: 25vw;
  }

  &-addon {
    background-color: transparent !important;
  }

  /*
  .v-chip {
    &:not(.v-chip--active) {
      background: transparent;
      color: #534343;
      border: 1px solid #857373;
    }
    .v-chip--active {
      background: #dfeb75 !important;
      color: #1a1e00 !important;
    }
  }*/
}

/* ----------------------------------------------
 * Generated by Animista on 2022-3-31 21:43:40
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

.slide-in-top {
  animation: fade-in-top 0.65s ease-out;

  &-delay {
    animation: fade-in-top 0.65s ease-out 0.45s both;
  }
}

/**
 * ----------------------------------------
 * animation fade-in-top
 * ----------------------------------------
 */
@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
