<template>
  <v-app>
    <!-- ヘッダー -->
    <div>
      <v-app-bar color="white" dense app>
        <v-toolbar-title>GG ONLINE</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <!-- 日本語・英語の切り替えボタン -->
          <v-btn small text v-if="language" @click.stop="language = !language" link to="/EHome" class="mx-0 px-1">English</v-btn>
          <v-btn small text v-if="!language" @click.stop="language = !language" link to="/" class="mx-0 px-3">日本語</v-btn>
          <!-- ページ内リンク用のボタン -->
          <!-- <v-btn small text v-scroll-to="'#Top'" class="mx-0 px-1">top</v-btn>
          <v-btn small text v-scroll-to="'#About'" class="mx-0 px-1">about</v-btn>
          <v-btn small text v-scroll-to="'#Signup'" class="mx-0 px-1">signup</v-btn> -->
        </v-toolbar-items>
      </v-app-bar>
    </div>

    <!-- コンテンツとフッターのラッパー（サイズ調整用） -->
    <v-content class="mx-0 my-5 px-0 py-4">
      <v-container class="ma-0 pa-0">
        <v-row class="ma-0 pa-0" justify="center">
          <v-col cols="12" sm="10" md="10" lg="8" xl="6" class="mb-5 mx-0 pa-0">

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
            <router-view />

  
            <!-- フッター（登録ページへのリンク） -->
            <v-footer class="ma-0 pa-0" color="white" app>
              <v-container class="ma-0 pa-0">
                <v-row class="ma-0 pa-0" justify="center">
                  <v-col cols="12" sm="10" md="10" lg="8" xl="6" class="ma-0 pa-0">
                      <!-- ※↑フッターのサイズ調整  なぜかフッターは新たにcontainarでラップしてサイズ調整しないといけない-->
                    <v-container class="ma-0 pa-0" style="border:solid 2px #DDDDDD;">
                      <v-row class="ma-0 pa-0" justify="center">
                        <v-col cols="6" align="center" class="ma-0 px-0 py-2">
                          <v-text  v-if="language" class="title">月額500円</v-text>
                          <v-text v-if="!language" class="title">500 yen/month</v-text>
                        </v-col>
                        <v-col cols="6" align="center" class="ma-0 px-0 py-2 px-3">
                          <v-btn v-if="language" class="title px-0 mx-0" block color="blue lighten-1" dark>入会する</v-btn>
                          <v-btn v-if="!language" class="title px-0 mx-0" block color="blue lighten-1" dark>E N T R Y</v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-col>
                </v-row>
              </v-container>
            </v-footer>
      
          </v-col>
        </v-row>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      language: null,
    }),
  }
</script>