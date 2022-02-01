<template>
  <div :class="$store.state.darkTheme ? 'darkTheme':''" style="height: calc(100vh - 3.5rem)">
    <v-container>
      <v-row>
        <v-col md="6" v-for="(item, index) in certifications" :key="index">
          <v-list elevation="2" class="pa-0" three-line :dark="$store.state.darkTheme">
            <v-list-item ripple link :href="item.credentials" target="_blank">
              <v-list-item-avatar size="75">
                <v-img :src="item.logo"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
<!--                <v-list-item-title>{{item.title}}</v-list-item-title>-->
                <v-lit-item-subtitle>{{item.title}}</v-lit-item-subtitle>
                <v-list-item-subtitle> Issued {{ item.issued }} - {{item.expiry}} </v-list-item-subtitle>
                <v-list-item-subtitle>{{item.issuer}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Certs",
  data: ()=> ({
    certifications: [
      {
        title: 'SAP Certified Development Associate - Integration Suite',
        issuer: 'SAP',
        issued: 'December 2021',
        expiry: 'No expiration date',
        logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122012/logo_sap.png',
        // logo: 'https://logos-download.com/wp-content/uploads/2016/08/SAP_logo.png',
        credentials: 'https://www.credly.com/badges/e440c211-002f-47ae-9832-c427e82b3681'
      },
      {
        title: 'Accelerate Enterprise Integration with SAP Integration Suite',
        issuer: 'OpenSAP',
        issued: 'August 2021',
        expiry: 'No expiration date',
        logo: 'https://s3.xopic.de/opensap-certificate/openbadges/7lL3RpXDQeJpODSOHR5mJA/4yZEh3TmngcgUuBCsDdkx3.png',
        // logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122012/logo_sap.png',
        credentials: 'https://open.sap.com/verify/xirek-dozos-razop-dedog-pyvip'
      },
      {
        title: 'M220J: MongoDB for Java Developers',
        issuer: 'MongoDB University',
        issued: 'November 2020',
        expiry: 'No expiration date',
        // logo: 'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem-768x480.jpg',
        logo: 'https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/0ED35984-8146-41EA-999110E2099C206A/thul-876298A8-C3E1-487D-8AD6920174E16D78.png',
        credentials: 'https://university.mongodb.com/course_completion/77f44a29-da0a-4b8f-a287-25111d0a84e4?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing'
      },
      {
        title: 'Docker Essentials: A Developer Introduction',
        issuer: 'IBM',
        issued: 'July 2020',
        expiry: 'No expiration date',
        logo: 'https://images.credly.com/size/680x680/images/08216781-93cb-4ba1-8110-8eb3401fa8ce/Docker_Essentials_-_ISDN.png',
        credentials: 'https://www.credly.com/badges/6deebac3-69dd-40a9-8164-a3112fa0b9b8?source=linked_in_profile'
      },
      {
        title: 'Introduction to MongoDB',
        issuer: 'MongoDB Inc. offered through Coursera',
        issued: 'July 2020',
        expiry: 'No expiration date',
        logo: 'https://about.coursera.org/static/blueCoursera-646f855eae3d677239ea9db93d6c9e17.svg',
        credentials: 'https://www.coursera.org/account/accomplishments/certificate/5LVVAANET8SR'
      },
      {
        title: 'Building Scalable Java Microservices with Spring Boot and Spring Cloud',
        issuer: 'Google Cloud offered through Coursera',
        issued: 'May 2020',
        expiry: 'No expiration date',
        logo: 'https://about.coursera.org/static/blueCoursera-646f855eae3d677239ea9db93d6c9e17.svg',
        credentials: 'https://www.coursera.org/account/accomplishments/certificate/PAYW8RRAGE8K'
      },
      {
        title: 'Oracle Cloud Infrastructure Developer 2020 Certified Associate',
        issuer: 'Oracle',
        issued: 'July 2020',
        expiry: 'February 2022',
        logo: 'https://images.credly.com/size/680x680/images/de9f4975-5ac3-4d39-914e-f733121683e1/Oracle_Org.png',
        credentials: 'https://www.credly.com/badges/4dde26f8-3451-4048-9e2d-4b58b355acad'
      },
      {
        title: 'Oracle Cloud Infrastructure Foundations 2020 Certified Associate',
        issuer: 'Oracle',
        issued: 'June 2020',
        expiry: 'January 2022',
        logo: 'https://images.credly.com/size/680x680/images/de9f4975-5ac3-4d39-914e-f733121683e1/Oracle_Org.png',
        credentials: 'https://www.credly.com/badges/f78eaefa-f8d8-4dc7-8f66-f8cd681839fa'
      }
    ]
  })
}
</script>

<style scoped>
.darkTheme {
  background-color: #363636;
  color: white;
}
</style>