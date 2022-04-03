<template>
  <v-container class="py-12 px-8 ec-box-con">
    <div class="ec-box">
      <div class="text-center ec-box-choice fade-in-top">
        <v-img
          width="200px"
          src="/svg/boitiers-mensuels.svg"
          class="mx-auto mb-6"
        ></v-img>
        <p class="text-h4 font-weight-bold mb-0">Boîtiers mensuels</p>
        <p class="text-subtitle-1 mt-2">
          Chaque mois, recevez une boîte surprise conçue par notre équipe,
          parfaite pour découvrir de nouvelles saveurs tous les mois
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
              <v-list-item-title> À partir de 70$ </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-btn depressed color="primary"
          >Commandez votre boîtier <v-icon right>mdi-arrow-right</v-icon></v-btn
        >
      </div>
      <div class="text-center ec-box-choice fade-in-top">
        <v-img
          width="200px"
          src="/svg/boitiers-personnalises.svg"
          class="mx-auto mb-6"
        ></v-img>
        <p class="text-h4 font-weight-bold mb-0">Boîtiers personnalisés</p>
        <p class="text-subtitle-1 mt-2">
          Laissez nos mixologues préparer une boîte spécialement pour vous,
          selon vos goûts
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
      <div
        class="
          ec-box-starter
          d-flex
          flex-no-wrap
          align-center
          fade-in-top-delay
        "
      >
        <v-avatar size="100" class="mr-8">
          <v-img src="https://source.unsplash.com/EsVRjPacg98"></v-img>
        </v-avatar>
        <div class="mx-4">
          <h2 class="text-subtitle-2">Ajoutez le kit de départ pour 50$</h2>
          <h2 class="text-body-2">
            Tout ce qu'il vous faut pour devenir un alchimiste
          </h2>
        </div>
        <v-btn depressed color="accent" class="px-4">
          Acheter
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
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
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  justify-items: center;
  align-content: center;
  row-gap: 2rem;
  column-gap: 1rem;
  @media (min-width: 1264px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    &-choice {
      max-width: 25vw;
    }
  }

  &-con {
    height: calc(100vh - 100px);
  }

  &-choice {
    max-width: 50rem;
  }

  &-starter {
    grid-column: 1 / -1;
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
