<template>
  <v-container class="mt-12 px-8">
    <div class="d-flex justify-space-around ec-box fade-in-top">
      <div class="text-center ec-box-choice">
        <p class="text-h4 font-weight-bold mb-0">Boîtes mensuelles</p>
        <p class="text-subtitle-1 mt-2">
          À chaque mois, recevez une boîte surprise conçu par notre équipe
        </p>
        <v-list color="primaryCon" dense class="text-left">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Parfait pour 2 personnes </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-currency-usd</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> À partir de 60$ </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-btn depressed color="primary"
          >Commandez votre boîtier <v-icon right>mdi-arrow-right</v-icon></v-btn
        >
      </div>
      <div class="text-center ec-box-choice fade-in-top-delay">
        <p class="text-h4 font-weight-bold mb-0">Boîtes personnalisés</p>
        <p class="text-subtitle-1 mt-2">
          Nos mixologues préparont une boîte spécialement pour vous, selon vos
          goûts
        </p>
        <v-list color="primaryCon" dense class="text-left">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Au choix, pour 2 ou 4 personnes
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-currency-usd</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> À partir de 100$ </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-btn depressed color="primary" nuxt to="/boitiers/personnalises"
          >Personnalisez votre boîtier
          <v-icon right>mdi-arrow-right</v-icon></v-btn
        >
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'Boîtiers - Élixir Cocktails',
  },
  data: () => ({}),
};
</script>

<style lang="scss">
.ec-box {
  width: 100%;
  &-choice {
    max-width: 25vw;
  }
}

.fade-in-top {
  animation: fade-in-top 1s ease-out;
}
.fade-in-top-delay {
  animation: fade-in-top 1s ease-out 0.5s both;
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
