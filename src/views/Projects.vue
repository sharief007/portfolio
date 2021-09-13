<template>
  <div :class="$store.state.darkTheme ? 'darkTheme':''">
  <v-container>
    <v-row>
      <v-col md="6" v-for="(item,index) in projects" :key="index">
        <v-card class="mx-auto" :dark="$store.state.darkTheme" elevation="3">
          <v-card-title>
            <h2 class="text-h4">{{item.title}}</h2>
            <v-spacer></v-spacer>
            <span class="text-body-1">{{ item.type }}</span>
          </v-card-title>
          <v-card-text>{{item.description}}</v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <span class="subheading">Technology stack</span>
            <v-chip-group>
              <v-chip v-for="(tech,index) in item.stack" :key="index">{{ tech }}</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn plain color="primary" :href="item.links.github" target="_blank">view code</v-btn>
            <v-btn plain color="primary" v-if="item.links.demo!==null" :href="item.links.demo" target="_blank">Demo</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: [
      { title: 'Portfolio',
        description: `Portfolio is a static web application made using material theme provided by VuetifyJS. The application you are accessing now is the portfolio project.`,
        type: 'Web',
        stack: ['vuejs','vuex','vue-router','vuetify'],
        links: {
          github: 'https://github.com/Sharief-007/portfolio',
          demo: null
        }
      },
      { title: 'HttpClient',
        description: `HttpClient is a desktop application built using JavaFX & new Java 11 http package. It provides all required functionalities to test rest Api's similar to postman tool.`,
        type: 'Desktop',
        stack: ['Java','JavaFX','SpringBoot','SceneBuilder'],
        links: {
          github: 'https://github.com/Sharief-007/HttpClient',
          demo: null
        }
      },
      { title: 'GroupChat',
        description: `GroupChat is a responsive web application built using websockets. It provides chat functionality,Users can share text msgs & embedded youtube/facebook videos.`,
        type: 'Web',
        stack: ['SpringBoot','HTML','Bootstrap','Javascript','Jquery'],
        links: {
          github: 'https://github.com/Sharief-007/GroupChat',
          demo: 'https://sharief.herokuapp.com'
        }
      },
      { title: 'XSLT Processor',
        description: `XSLT Processor is a desktop application built using JavaFX and Java16 (JPackage). It performs xslt v1 transformations and is installable on OS using JPackage tool.`,
        type: 'Desktop',
        stack: ['Java','JavaFX','SpringBoot','SceneBuilder'],
        links: {
          github: 'https://github.com/Sharief-007/XSLT-Processor',
          demo: null
        }
      },
      { title: 'SAP CLI',
        description: `SAP Cli is a command line application made using Nodejs. It provides functionality to consume odata services using built in http module. It is fast & asynchronous.`,
        type: 'Command Line',
        stack: ['Nodejs'],
        links: {
          github: 'https://github.com/Sharief-007/sapcli',
          demo: null
        }
      }
    ]
  }),
}
</script>

<style scoped>
.darkTheme {
  background-color: #363636;
  color: white;
}
</style>