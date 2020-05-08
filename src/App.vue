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
    <Top />
  
  
    <!-- フッター -->
    <v-footer color="white" app class="my-0 py-0">
      <v-card style="border:solid 1px #DDDDDD;" flat class="mx-auto px-5 my-0 py-0" align="center">
        <v-container class="mx-5 px-5 my-0 py-0">
          <v-row class="mx-5 my-0 py-0">
            <v-col align="center" class="mx-5 my-0 py-3">
              <v-text class="title">500 yen/month</v-text>
            </v-col>
            <v-col align="center" class="mx-5 px-5 my-0 py-3">
              <v-btn class="title px-5" block color="blue lighten-1" dark>E N T R Y</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
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