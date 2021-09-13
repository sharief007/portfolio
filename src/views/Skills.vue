<template>
  <div :class="$store.state.darkTheme ? 'darkTheme':''">
  <v-container :class="$store.state.darkTheme ? 'darkTheme':''">
    <v-toolbar dense short flat style="width: 100%" :dark="$store.state.darkTheme">
      <v-icon color="success" left>mdi-check-circle-outline</v-icon>
      <span :class="$vuetify.breakpoint.smAndDown ? '':'text-h6'">{{ $vuetify.breakpoint.smAndDown ? 'Default':'My default pick' }}</span>
      <v-spacer></v-spacer>
      <span class="text-h6 mx-2" v-if="!$vuetify.breakpoint.smAndDown">Proficiency: </span>
      <v-badge color="success" inline left :dot="$vuetify.breakpoint.smAndDown">Advanced</v-badge>
      <v-badge color="warning" inline left :dot="$vuetify.breakpoint.smAndDown">Intermediate</v-badge>
      <v-badge color="info" inline left :dot="$vuetify.breakpoint.smAndDown">Beginner</v-badge>
    </v-toolbar>
    <div class="mt-4"></div>
    <v-row v-for="(row,index) in sections" :key="index">
        <v-col cols="12">
          <strong class="text-h6">{{ row.text }}</strong>
        </v-col>
        <v-col v-for="(item) in row.list" :key="item.logo" cols="6" md="2">
          <v-card :dark="$store.state.darkTheme">
            <v-toolbar dense short absolute flat class="transparent" style="width: 100%">
              <v-icon color="success" v-if="item.default">mdi-check-circle-outline</v-icon>
              <v-spacer></v-spacer>
              <v-badge dot :color="item.level"></v-badge>
            </v-toolbar>
            <v-card-text class="d-flex">
              <v-avatar size="100" class="ma-auto">
                <v-img :src="item.logo"></v-img>
              </v-avatar>
            </v-card-text>
            <v-card-actions class="d-flex pa-0">
              <span class="text-h6 ma-auto">{{ item.name }}</span>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data: ()=> ({
    sections: [
      { text: 'Programming Languages',
        list: [
          { name: 'Java', logo: 'https://image.flaticon.com/icons/png/512/226/226777.png', level: 'success', default: true},
          { name: 'Nodejs', logo: 'https://img.icons8.com/color/2x/nodejs.png', level: 'warning', default: false},
          { name: 'Go Lang', logo: 'https://img.icons8.com/color/2x/golang.png', level: 'info', default: false}
        ]
      },
      { text: 'Backend Technologies',
        list: [
          { name: 'J2EE', level: 'warning', default: false, logo: 'https://image.flaticon.com/icons/png/512/226/226777.png'},
          { name: 'Apache Tomcat', level: 'warning', default: false, logo: 'http://tomcat.apache.org/res/images/tomcat.png'},
          { name: 'Spring', level: 'success', default: false, logo: 'https://img.icons8.com/color/2x/spring-logo.png'},
          { name: 'Spring Boot', level: 'success', default: true, logo: 'https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H.png'},
          { name: 'Spring Cloud', level: 'warning', default: true, logo: 'https://pbs.twimg.com/profile_images/1235936519032049665/dBCF5aOn_400x400.png'},
          { name: 'Spring Data', level: 'warning', default: true, logo: 'https://pbs.twimg.com/profile_images/1235945452304031744/w55Uc_O9_400x400.png'},
          { name: 'Spring Security', level: 'warning', default: true, logo: 'https://ordina-jworks.github.io/img/spring-security-logo.png'},
          { name: 'KeyCloak', level: 'info', default: false, logo: 'https://design.jboss.org/keycloak/logo/images/keycloak_upsteam_tile_200x150.png'},
          { name: 'Expressjs', level: 'warning', default: false, logo: 'https://avatars.githubusercontent.com/u/5658226?s=200&v=4'},
          { name: 'Gorilla Mux', level: 'warning', default: false, logo: 'https://camo.githubusercontent.com/a62a5e2040257dd8787001ffa5d95964d7bc77024aa2ba3d94e64ec1e151228e/68747470733a2f2f636c6f75642d63646e2e7175657374696f6e61626c652e73657276696365732f676f72696c6c612d69636f6e2d36342e706e67'},
          { name: 'Docker', level: 'warning', default: false, logo: 'https://img.icons8.com/color/2x/docker.png'}
        ]
      },
      { text: 'Frontend Technologies',
        list: [
          { name: 'JavaFX', level: 'success', default: true, logo: 'https://image.flaticon.com/icons/png/512/226/226777.png'},
          { name: 'HTML', level: 'warning', default: false, logo: 'https://img.icons8.com/color/2x/html-5.png'},
          { name: 'CSS', level: 'warning', default: false, logo: 'https://img.icons8.com/color/2x/css3.png'},
          { name: 'Javascript', level: 'success', default: false, logo: 'https://img.icons8.com/color/2x/javascript.png'},
          { name: 'Bootstrap', level: 'info', default: false, logo: 'https://img.icons8.com/color/2x/bootstrap.png'},
          { name: 'JQuery', level: 'info', default: false, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCxHhTjEfD__8Nzb3sLea4koPwL8bWIACbFyuoFWr2r7qJuyzG6sSf24cg2RIUIJSZFw&usqp=CAU'},
          { name: 'VueJS', level: 'warning', default: true, logo: 'https://img.icons8.com/color/2x/vue-js.png'},
          { name: 'Vuetify', level: 'warning', default: true, logo: 'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg'}
        ]
      },
      { text: 'Middlewares',
        list: [
          { name: 'RabbitMQ', level: 'success', default: true, logo: 'https://cdn.freebiesupply.com/logos/large/2x/rabbitmq-logo-png-transparent.png'},
          { name: 'Google PubSub', level: 'info', default: false, logo: 'https://uploads-ssl.webflow.com/5ebd54899f7ac255cd8e0950/5fc5067732c4f5a49d4bdf34_1200px-Cloud-Pub-Sub-Logo.jpg'}
        ]
      },
      { text: 'Web Protocols',
        list: [
          { name: 'Http', level: 'success', default: false, logo: 'https://www.kindpng.com/picc/m/379-3793754_world-wide-web-icon-website-logo-vector-free.png'},
          { name: 'Websocket', level: 'success', default: false, logo: 'https://mk0resourcesinf5fwsf.kinstacdn.com/wp-content/uploads/2020/10/websocket-logo12042014.gif'},
          { name: 'AMQP', level: 'warning', default: false, logo: 'https://www.influxdata.com/wp-content/uploads/AMQP-logo.jpg'},
          { name: 'STOMP', level: 'success', default: false, logo: 'https://stomp.github.io/images/project-logo.png'}
        ]
      },
      { text: 'Integration Technologies',
        list: [
          { name: 'Spring Integration', level: 'warning', default: true, logo: 'https://springorama.files.wordpress.com/2018/04/spring-integration.png?w=650'},
          { name: 'SAP PI/PO', level: 'warning', default: false, logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122012/logo_sap.png?itok=_GxGvaiv'},
          { name: 'SAP CPI PI', level: 'info', default: false, logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122012/logo_sap.png?itok=_GxGvaiv'}
        ]
      },
      { text: 'Build & Version control',
        list: [
          { name: 'Apache Maven', level: 'warning', default: true, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDly3aBidr0p3ve5jYINf42dSFnsPthVUrpqi_vivMZjPYX5PSiuCFRP7WDn5V6yTA9Hk&usqp=CAU'},
          { name: 'NPM', level: 'warning', default: false, logo: 'https://avatars.githubusercontent.com/u/6078720?s=200&v=4'},
          { name: 'Git', level: 'warning', default: false, logo: 'https://img.icons8.com/color/2x/git.png'},
          { name: 'GitHub', level: 'warning', default: false, logo: 'https://img.icons8.com/fluency/2x/github.png'}
        ]
      },
      { text: 'Tools & Software',
        list: [
          { name: 'Intellij Idea Ultimate', level: 'success', default: true, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1200px-IntelliJ_IDEA_Icon.svg.png'},
          { name: 'VS Code', level: 'success', default: true, logo: 'https://logowik.com/content/uploads/images/visual-studio-code7642.jpg'},
          { name: 'Eclipse', level: 'warning', default: false, logo: 'https://www.eclipse.org/downloads/assets/public/images/logo-eclipse.png'},
          { name: 'Postman', level: 'warning', default: false, logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/z8zb2smxpm2idu5anl2h'},
          { name: 'Scene Builder', level: 'warning', default: false, logo: 'https://i2.wp.com/gluonhq.com/wp-content/uploads/2015/02/SceneBuilderLogo.png?fit=781%2C781&ssl=1'}
        ]
      }
    ],
  })
}
</script>

<style scoped>
.darkTheme {
  background-color: #363636;
  color: white;
}
</style>