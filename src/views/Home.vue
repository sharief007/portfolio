<template>
  <div :class="$store.state.darkTheme ? 'darkTheme':''">
  <v-container>
    <v-row class="full-height">
      <v-col cols="12" sm="6" class="d-flex" order="2">
        <v-container class="ma-auto">
          <v-row>
            <h1 class="text-subtitle-1" style="width: 100%">Hello I'm</h1>
            <h1 :class="`text-uppercase info--text ${$vuetify.breakpoint.mdAndUp ? 'text-h4':'text-h5'}`">Mohammad Sharief Baig</h1>
            <h2 class="text-h6">Java Developer</h2>
            <p class="mt-4 text-body-1">Sharief is a Java developer whose work mainly focuses on Enterprise Integration technologies. He is highly interested and has decent knowledge in Enterprise Integration Patterns, Full-stack web development & Microservices architecture. He is keen to continuous learning and development.</p>
          </v-row>
          <v-row>
            <v-btn icon x-large v-for="(item,index) in socialIcons" :key="index" class="mx-2" :href="item.link" target="_blank">
              <v-icon x-large :color="item.color" v-text="item.icon"></v-icon>
<!--              <v-avatar size="45">-->
<!--                <v-img :src="item.icon"></v-img>-->
<!--              </v-avatar>-->
            </v-btn>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex" order="1">
        <v-avatar class="ma-auto" size="300">
          <v-img src="../assets/profile.jpg"></v-img>
        </v-avatar>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data: ()=> ({
    socialIcons: [
      { icon: 'mdi-linkedin', color: 'blue', link: 'https://linkedin.com/in/sharief-'},
      { icon: 'mdi-github', color: 'black', link: 'https://github.com/sharief007'},
      { icon: 'mdi-codepen', color: 'primary', link: 'https://leetcode.com/sharief007/'}

    ]
  })
}
</script>

<style scoped>
.full-height {
  height: calc(100vh - 4rem);
}
.darkTheme {
  background-color: #363636;
  color: white;
}
</style>