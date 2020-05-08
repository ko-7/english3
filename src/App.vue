<template>
  <v-app>
    <!-- ヘッダー -->
    <div>
      <v-app-bar color="white" dense>
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
      <v-container fluid>      
        <v-footer color="white" app>
          <v-layout justify-center>
            <v-card class="mx-auto px-5" outlined tile>
              <v-layout justify-center>
                <v-list class="mx-5 my-2 px-5">
                  500 yen/month
                </v-list>
                <div class="my-3 mx-1">
                  <v-btn class="px-5" small color="blue lighten-1" dark>E N T R Y</v-btn>
                </div>
              </v-layout>
            </v-card>
          </v-layout>
        </v-footer>
      </v-container>   
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