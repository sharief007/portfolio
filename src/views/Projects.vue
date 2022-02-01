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
            <v-btn plain color="primary" v-for="(link,index) in item.links" :key="index" :href="link.value" target="_blank">{{link.key}}</v-btn>
            <!-- <v-btn plain color="primary" :href="item.links.github" target="_blank">view code</v-btn>
            <v-btn plain color="primary" v-if="item.links.demo!==null" :href="item.links.demo" target="_blank">Demo</v-btn> -->
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
        type: 'Static Web Application',
        stack: ['vue.js','vuex','vue-router','Vuetify'],
        links: [
            { value: 'https://github.com/sharief007/portfolio', key: 'view code' }
        ]
      },
      { title: 'HttpClient',
        description: `HttpClient is a desktop application built using JavaFX & new Java 11 http package. It provides all required functionalities to test rest Api's similar to postman tool.`,
        type: 'Desktop Application',
        stack: ['Java','JavaFX','SpringBoot','SceneBuilder'],
        links: [
            { value: 'https://github.com/sharief007/HttpClient', key: 'view code' }
        ]
      },
      { title: 'SAP RFC Client',
        description: `SAP RFC Client is a desktop application which can be used to make RFC calls to SAP Netweaver. SAP Data is serialized and deserialized into json for ease of use.`,
        type: 'Desktop Application',
        stack: ['Java','JavaFX','SAP JCO'],
        links: [
          { value: 'https://github.com/sharief007/GroupChat', key: 'view code' }
        ]
      },
      { title: 'GroupChat',
        description: `GroupChat is a responsive web application built using websockets. It provides chat functionality,Users can share text msgs & embedded youtube/facebook videos.`,
        type: 'Web Application',
        stack: ['SpringBoot','HTML','Bootstrap','Javascript','Jquery'],
        links: [
            { value: 'https://github.com/sharief007/GroupChat', key: 'view code' },
            { value: 'https://sharief.herokuapp.com', key: 'demo' }
        ]
      },
      { title: 'XSLT Processor',
        description: `XSLT Processor is a desktop application built using JavaFX and Java16 (JPackage). It performs xslt v1 transformations and is installable on OS using JPackage tool.`,
        type: 'Desktop Application',
        stack: ['Java','JavaFX','SpringBoot','SceneBuilder'],
        links: [
            { value: 'https://github.com/sharief007/XSLT-Processor', key: 'view code' }
        ]
      },
      { title: 'GoAPIs',
        description: `GoAPIs is a commandline application written in nodejs to consume popular Google APIs such as Google Drive API, People API, Gmail API using Google Nodejs SDK`,
        type: 'Command Line Application',
        stack: ['Nodejs','Google Nodejs SDK'],
        links: [
          { value: 'https://github.com/sharief007/googleapis-node-cli', key: 'view code' }
        ]
      },
      { title: 'SAP CLI',
        description: `SAP Cli is a command line application made using Nodejs. It provides functionality to consume odata services using built in http module. It is fast & asynchronous.`,
        type: 'Command Line Application',
        stack: ['Nodejs'],
        links: [
            { value: 'https://github.com/sharief007/sapcli', key: 'view code' },
            { value: 'https://www.odata.org/', key: `whats's odata?`}
        ]
      },
      { title: 'Pulsar Client',
        description: `Apache Pulsar is a cloud-native, opensource streaming platform. Pulsar Client is a java client appliaction to publish and consume messages through Pulsar.`,
        type: 'Desktop Application',
        stack: ['Java', 'JavaFX', 'SpringBoot', 'Scene Builder', 'Apache Pulsar'],
        links: [
            { value: 'https://pulsar.apache.org/', 'key': `what's apache pulsar?`},
            { value: 'http://github.com/sharief007/sapcli', key: 'view code' }
        ]
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