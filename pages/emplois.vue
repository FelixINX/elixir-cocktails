<template>
  <div>
    <v-container class="mt-12 px-8 z-20 d-flex flex-column">
      <div class="text-center">
        <h1 class="text-h3 primaryConOn--text text-center font-weight-black">
          Viens travailler avec nous!
        </h1>

        <p class="text-h6 mt-2 font-weight-medium">
          Élixir Cocktails est à la recherche d'un.e mixologue et d'un.e
          préposé.e pour commencer nos opérations! Rejoins une entreprise en
          pleine croissance et aie la chance de devenir la saveur de notre
          entreprise.
        </p>

        <div class="text-left font-weight-medium">
          <h2 class="text-subtitle-1 font-weight-bold">Nos avantages</h2>
          <p>
            Nous offrons à tous nos employés un environnement de travail de
            qualité et plusieurs avantages sociaux :
          </p>
          <ul>
            <li>
              Des semaines de travail de 32 heures pour faciliter la
              conciliation travail-vie personnelle
            </li>
            <li>Un régime d'assurances bonifié</li>
            <li>Un régime de retraite où nous contribuons 4% de ton salaire</li>
            <li>
              Un budget de formation annuel pour développer tes compétences
            </li>
            <li>
              La chance de rejoindre la tradition Élixir : chaque premier
              mercredi du mois, joins-toi à notre équipe pour une sortie ludique
            </li>
          </ul>
        </div>

        <div class="d-flex justify-center">
          <v-img
            src="https://i.imgur.com/o2kYfUA.png"
            max-width="min(90vw, 500px)"
          />
        </div>
      </div>
      <v-card color="primary" class="mb-4 z-20" dark elevation="0">
        <v-card-title> Applique dès maintenant! </v-card-title>
      </v-card>
      <v-expansion-panels
        v-model="expansion"
        readonly
        accordion
        class="font-weight-medium"
      >
        <v-expansion-panel>
          <v-expansion-panel-header hide-actions>
            Pour faire connaissance
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field label="Ton nom" filled v-model="name"></v-text-field>
            <v-text-field
              label="Ton adresse courriel"
              filled
              type="email"
              v-model="email"
            ></v-text-field>
            <v-text-field
              label="Ton numéro de téléphone"
              filled
              v-model="phone"
            ></v-text-field>
            <v-radio-group v-model="position" label="Position">
              <v-radio
                key="mixologue"
                label="Mixologue"
                value="mixologue"
              ></v-radio>
              <v-radio
                key="prep"
                label="Préposé.e aux opérations"
                value="préposé.e aux opérations"
              ></v-radio>
            </v-radio-group>
            <v-btn
              :disabled="!name || !email || !position || !phone"
              color="primary"
              depressed
              @click="expansion = 1"
            >
              Continuer
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header hide-actions>
            Les questions sérieuses
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p class="text-h6">
              Enchanté de faire ta connaissance {{ name }}! Alors tu veux
              devenir {{ position }} chez Élixir Cocktails?
            </p>
            <v-radio-group
              v-model="experience"
              label="As-tu déjà travaillé dans un bar ou comme mixologue?"
            >
              <v-radio key="Oui" label="Oui" value="Oui"></v-radio>
              <v-radio key="Non" label="Non" value="Non"></v-radio>
            </v-radio-group>
            <v-file-input
              v-model="cv"
              filled
              label="Dépose ton CV ici"
              truncate-length="15"
            ></v-file-input>
            <p>C'est tout :)</p>
            <v-btn
              :disabled="!experience"
              color="primary"
              depressed
              @click="expansion = 2"
            >
              Continuer
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header hide-actions>
            Les vrais questions
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p class="text-h6">
              Maintenant {{ name }}, passons aux vrais questions...
            </p>
            <v-radio-group v-model="would1" label="Préfères-tu...?">
              <v-radio
                label="Porter le même costume tous les jours"
                value="a"
              ></v-radio>
              <v-radio
                label="Changer de costume à chaque jour"
                value="b"
              ></v-radio>
            </v-radio-group>
            <v-radio-group v-model="would2">
              <v-radio
                label="Présenter fièrement ton cocktail signature à chaque jour"
                value="a"
              ></v-radio>
              <v-radio
                label="Créer un nouveau cocktail à chaque semaine"
                value="b"
              ></v-radio>
            </v-radio-group>
            <v-radio-group v-model="would3">
              <v-radio
                label="Parler aux clients au téléphone pour le reste de ta vie"
                value="a"
              ></v-radio>
              <v-radio
                label="Communiquer aux clients via courriel pour le reste de ta vie"
                value="b"
              ></v-radio>
            </v-radio-group>

            <p class="text-subtitle-2">
              Si tu étais un cocktail, lequel serais-tu?
            </p>
            <v-item-group v-model="drink">
              <v-row class="mx-n3">
                <v-col
                  cols="6"
                  sm="4"
                  md="3"
                  lg="2"
                  v-for="(drink, index) in drinks"
                  :key="index"
                >
                  <v-item v-slot="{ active, toggle }">
                    <v-card
                      outlined
                      :color="active ? 'secondary' : 'secondaryCon'"
                      :dark="active ? true : false"
                      rounded="16"
                      height="200"
                      @click="toggle"
                    >
                      <v-img
                        crossOrigin="anonymus"
                        :src="drink.image"
                        height="146"
                      ></v-img>
                      <v-card-text class="text-truncate">{{
                        drink.name
                      }}</v-card-text>
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>

            <p class="text-subtitle-2 mt-4">
              Si tu pouvais jouer dans une série télé, ce serait laquelle?
            </p>
            <v-item-group v-model="tv">
              <v-row class="mx-n3">
                <v-col
                  cols="6"
                  sm="4"
                  md="3"
                  lg="2"
                  v-for="(drink, index) in series"
                  :key="index"
                >
                  <v-item v-slot="{ active, toggle }">
                    <v-card
                      outlined
                      :color="active ? 'secondary' : 'secondaryCon'"
                      :dark="active ? true : false"
                      rounded="16"
                      height="222"
                      @click="toggle"
                    >
                      <v-img
                        crossOrigin="anonymus"
                        :src="drink.image"
                        height="146"
                      ></v-img>
                      <v-card-text>{{ drink.name }}</v-card-text>
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>
            <v-btn class="mt-4" color="primary" depressed @click="done = true">
              Envoyer
              <v-icon right>mdi-email-fast-outline</v-icon>
            </v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    <v-dialog v-model="done" width="312" class="font-weight-medium">
      <v-card rounded="lg" color="#f1e7e8">
        <v-card-title class="justify-center pt-6 pb-0">
          <v-icon color="secondary">mdi-file-check-outline</v-icon>
        </v-card-title>
        <v-card-title
          class="text-center"
          style="word-break: break-word; color: #1e1a1d"
          >Ta candidature a bien été envoyé!</v-card-title
        >
        <v-card-text style="color: #534343"
          >On va te contacter d'ici quelques jours, regarde bien tes courriels.
          À bientôt!</v-card-text
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
    <div class="blob">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        class="blob-1"
      >
        <path
          fill="#d6e662"
          d="M33.6,-21.5C45.5,1.2,58.5,21.2,53,34.5C47.6,47.7,23.8,54.2,1.8,53.2C-20.3,52.1,-40.6,43.6,-54,25.7C-67.5,7.9,-74.2,-19.4,-64,-41.1C-53.9,-62.7,-26.9,-78.8,-8,-74.1C10.9,-69.5,21.7,-44.2,33.6,-21.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="blob-2"
        viewBox="0 0 526 466"
      >
        <path
          d="M0,0l525.75,0c-8.285,118.312 -95.659,92.69 -148.385,126.601c-53.479,33.911 -24.856,115.297 -92.647,168.048c-67.036,53.504 -115.243,39.186 -154.41,53.504c-39.168,14.318 -46.7,67.822 -72.31,94.95c-21.843,22.608 -57.998,22.608 -57.998,22.608l0,-465.711l-0,0Z"
          style="fill: #f89fa5; fill-rule: nonzero"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Emplois chez Élixir Cocktails',
  },
  data: () => ({
    drinks: [
      {
        name: 'Martini',
        image: 'https://i.imgur.com/kZB2KbU.jpg',
      },
      {
        name: 'Mojito',
        image: 'https://source.unsplash.com/pb7oJwtNVU4',
      },
      {
        name: 'Margarita',
        image: 'https://source.unsplash.com/Wq6bki-7gkE',
      },
      {
        name: 'Cosmopolitan',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/c0/Cosmopolitan_%285076906532%29.jpg',
      },
      {
        name: 'Long Island Iced Tea',
        image:
          'https://cdn.pixabay.com/photo/2020/07/05/23/06/long-island-iced-tea-5374802_1280.jpg',
      },
      {
        name: 'Blue Lagoon',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Blue_cocktail_with_lime_%28Unsplash%29.jpg/1024px-Blue_cocktail_with_lime_%28Unsplash%29.jpg',
      },
      {
        name: 'Sex on the beach',
        image:
          'https://c.pxhere.com/photos/5c/5b/Bokeh_CC0_CC0_Photos_Cocktail_Color_Drink_Free_Images_Free_Photos-1617463.jpg!d',
      },
      {
        name: 'Mai Tai',
        image:
          'https://live.staticflickr.com/5497/11064878766_664cc5a5f9_c.jpg',
      },
      {
        name: 'Daïquiri',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/f/fd/Classic_Daiquiri_in_Cocktail_Glass.jpg',
      },
      {
        name: 'Screwdriver',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/4/45/Screwdriver%2C_Birmingham-Shuttlesworth_International_Airport%2C_Birmingham_AL.jpg',
      },
      {
        name: 'Bloody Ceaser',
        image:
          'https://cdn.pixabay.com/photo/2015/03/20/22/50/cocktail-683043_1280.jpg',
      },
      {
        name: 'Manhattan',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/a/a1/A_Manhattan.jpg',
      },
    ],
    series: [
      {
        name: 'District 31',
        image:
          'https://m1.quebecormedia.com/emp/emp/districtcdba366f-fe6e-4148-af99-e921328ed393_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=1920&h=1080&width=1200&height=1200',
      },
      {
        name: 'Les frères Scott',
        image:
          'https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/series/les-freres-scott-le-retour-de-peyton-brooke-et-haley-qui-va-faire-plaisir-aux-fans-3932667/94971010-1-fre-FR/Les-Freres-Scott-le-retour-de-Peyton-Brooke-et-Haley-qui-va-faire-plaisir-aux-fans.jpg',
      },
      {
        name: 'Bridgerton',
        image:
          'https://eastside-online.org/wp-content/uploads/2021/03/bridgertons.jpg',
      },
      {
        name: 'Une galaxie près de chez vous',
        image:
          'https://mobile-img.lpcdn.ca/lpca/924x/r3996/b2f84c59-d366-11e9-a65c-0eda3a42da3c.jpg',
      },
      {
        name: 'Squid game',
        image: 'https://cdn.mos.cms.futurecdn.net/CtmZwtVLvBapBYRKf47cH5.jpg',
      },
      {
        name: 'Too hot to handle',
        image:
          'https://www.usmagazine.com/wp-content/uploads/2022/01/Back-to-Retreat-Everything-Know-About-Too-Hot-to-Handle-Season-3-002.jpg?w=1600&quality=86&strip=all',
      },
    ],
    expansion: 0,
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    cv: null,
    would1: '',
    would2: '',
    would3: '',
    drink: '',
    tv: '',
    done: false,
  }),
};
</script>

<style>
.z-20 * {
  z-index: 2;
}

.blob {
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
}

.blob svg {
  position: absolute;
}

.blob-1 {
  bottom: -20rem;
  right: -20rem;
  width: 50rem;
}

.blob-2 {
  top: 0rem;
  left: 0rem;
  width: 25rem;
  max-width: 50vw;
  opacity: 100%;
}
</style>
