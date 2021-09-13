<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app :dark="$store.state.darkTheme">
      <v-divider></v-divider>
      <v-list nav dense shaped>
        <v-list-item-group>
          <v-list-item v-for="(item,index) in navigationList" :key="index" :to="item.to" color="info">
            <v-list-item-icon><v-icon v-text="item.icon"></v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app :color="$store.state.darkTheme ? '':'info'" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
      <v-toolbar-title>My Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch prepend-icon="mdi-theme-light-dark" class="mt-5" :value="$store.state.darkTheme" @click="changeTheme()"></v-switch>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    navigationList: [
      { icon: 'mdi-home', text: 'Home', to: '/'},
      { icon: 'mdi-briefcase-clock', text: 'About', to: '/about'},
      { icon: 'mdi-text-search', text: 'Skills', to: '/skills'},
      { icon: 'mdi-tools', text: 'Projects', to: '/projects'}
    ]
  }),
  methods: {
    changeTheme() {
      this.$store.dispatch('toggleTheme')
    }
  },
  created() {
    this.$store.dispatch('getTheme')
  }
}
</script>