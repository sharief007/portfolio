<template>
  <div :class="$store.state.darkTheme ? 'darkTheme':''">
  <v-container :class="`full-height ${$store.state.darkTheme ? 'darkTheme':''}`">
    <v-timeline :dense="$vuetify.breakpoint.smAndDown" :dark="$store.state.darkTheme">
      <v-timeline-item v-for="(item, i) in years" :key="i" :color="item.color">
        <template v-slot:opposite>
        <span :class="`headline font-weight-bold ${item.color}--text`" v-text="item.year"></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-bold ${item.color}--text`">{{ item.title }}</h2>
          <span class="subtitle-1" v-text="item.year" v-if="$vuetify.breakpoint.smAndDown"></span>
          <div>{{item.text}}</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {

  },
  data: () => ({
    years: [
      {
        color: 'green',
        year: '2021 - present',
        title: 'Deloitte USI, Hyderabad',
        text: 'He started his professional career as an Associate Analyst at Deloitte USI (US offices of India).'
      },
      {
        color: 'pink',
        year: '2021 - 2023',
        title: 'Jain University, Karnataka',
        text: `He is pursuing his master's degree MCA (Master of Computer Applications) at Jain online University.`
      },
      {
        color: 'cyan',
        year: '2017 - 2020',
        title: 'PB Siddhartha College of Arts & Science',
        text: 'He completed his graduation in the stream of electronics & computer science from PB Siddhartha College, Andhra Pradesh.'
      }
    ],
  }),
}
</script>

<style scoped>
.darkTheme {
  background-color: #363636;
  color: white;
}
.full-height {
  height: calc(100vh - 4rem);
}
</style>