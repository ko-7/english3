<template>
  <v-app>
    <!-- ヘッダー -->
    <div>
      <v-app-bar color="white" dense app>
        <v-toolbar-title>GG online</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn small text>top</v-btn>
          <v-btn small text>about</v-btn>
          <v-btn small text>system</v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </div>

    <!-- 以下コンテンツ -->
    <v-container class="my-5 py-5">
    <v-list-item link to="/">
      <v-list-item-content>
        <v-list-item-title>home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link to="/top">
      <v-list-item-content>
        <v-list-item-title >top</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    </v-container>
    <router-view/>
    <Top />
  
  
    <!-- フッター -->
    <v-footer color="white" app class="my-0 py-0">
      
        <v-container class="my-0 py-0" style="border:solid 1px #DDDDDD;">
          <v-row class="my-0 py-0">
            <v-col cols="6" align="center" class="my-0">
              <v-text class="title">500 yen/month</v-text>
            </v-col>
            <v-col cols="6" align="center" class="my-0">
              <v-btn class="title px-5" block color="blue lighten-1" dark>E N T R Y</v-btn>
            </v-col>
          </v-row>
        </v-container>
      
    </v-footer>
  
  </v-app>
</template>

<script>
  import Top from '@/views/Top.vue'
  export default {
    components: {
      Top,
    },
  }
</script>