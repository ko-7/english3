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
          <v-row justify-center>
            <v-card class="mx-auto px-5" outlined tile>
              <v-row justify-center>
                <v-list class="mx-5 my-2 px-5">
                  500 yen/month
                </v-list>
                <div class="my-3 mx-1">
                  <v-btn class="px-5" small color="blue lighten-1" dark>E N T R Y</v-btn>
                </div>
              </v-row>
            </v-card>
          </v-row>
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