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

  <!-- コンテンツとフッターのラッパー（サイズ調整用） -->
  <v-content>
    <v-container>
      <v-row class="my-5" justify="center">
        <v-col>

    <!-- 開発用タブ -->
          <!-- <v-list-item link to="/">
            <v-list-item-content>
             <v-list-item-title>Top</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/home">
            <v-list-item-content>
              <v-list-item-title >Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <router-view/> -->

    <!-- 以下コンテンツ -->
          <Top />
  
    <!-- フッター（登録ページへのリンク） -->
        <v-container class="my-0 py-0" style="border:solid 1px #DDDDDD;">
          <v-row class="my-0 py-0" justify="center">
            <v-col cols="6" align="center" class="my-0">
              <v-text class="title">500 yen/month</v-text>
            </v-col>
            <v-col cols="6" align="center" class="my-0">
              <v-btn class="title px-5" block color="blue lighten-1" dark>E N T R Y</v-btn>
            </v-col>
          </v-row>
        </v-container>
      
        </v-col>
      </v-row>
    </v-container>
  </v-content>

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