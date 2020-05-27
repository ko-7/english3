<template>
  <v-container>
      <!-- サービス説明動画 -->
      <v-card tile flat class="my-5 py-5" id="Top">
        <!-- v-responsive動画のアスペクト比を固定する -->
        <v-responsive :aspect-ratio="16/9">
          <iframe class="mb-5" width="100%" height="100%" src="https://www.youtube.com/embed/7GkOtwds3P0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-responsive>
      </v-card>

      <v-card tile flat class="my-5 py-5">
        <h2 align="center" class="mb-5">GG online</h2>
        <p align="center">【簡単なサービス説明】</p>
      </v-card>

      <v-card tile flat class="my-5 py-5" id="About">
        <h2 align="center" class="mb-5 mr-3"><v-icon large color="red">grade</v-icon>Point!</h2>
        <p align="center">【簡単な魅力説明】</p>
      </v-card>

      <v-card tile flat dark class="my-5 py-5" id="Signup">
        <div class="mb-5">
        <h3 align="center" class="mb-5">サービスご利用の流れ</h3>
        <ul style="list-style:none;">
          <li>1.画面下の「ENTRY」を押し、クレジットカード情報等を登録して入会</li>
          <li>2.GGonlineのfacebookページで好きなコミュニティを探す</li>
          <li>3.zoomでみんなと話しながら英語・日本語を学ぶ！</li>
          <li class="my-3">※事前に「facebookの会員登録」と「zoomのインストール」をしておく必要があります。</li>
          <!-- <li>facebookの会員登録は<a>こちら</a>から</li> -->
          <!-- <li>zoomのインストールは<a>こちら</a>から</li> -->
        </ul>
        </div>
        <div class="my-5 py-5">
        <h3 class="my-5" align="center">入会条件・注意事項</h3>
        <ul style="list-style:none;">
          <li>・こちらのオンラインコミュニティは事前登録が必要となります。</li>
          <li>・非公開グループへの参加は混雑状況により、入会申し込み日から最大で10日程度かかるおそれがあります。</li>
          <li>・決済については毎月1日にクレジットカード決済が発生します。(2018年1月以降の記事はすべて閲覧できます)</li>
        </ul>
        </div>
        <v-container>
          <v-row justify="center">
            <v-col cols="12" sm="3" align="center"><ETerms /></v-col>
            <v-col cols="12" sm="3" align="center"><v-btn text>【プライバシーポリシー】</v-btn></v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="auto" align="center">  
              <p><v-icon>email</v-icon> 【ggonline@gmail.com】</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-card tile flat class="my-5 py-5">
        <h2 align="center" class="mb-5">関連サービス</h2>
        <p align="center">【関連サービスの紹介】</p>
      </v-card>

  </v-container>
</template>

<script>
import ETerms from '@/components/English/ETerms.vue'
export default {
  components: {
      ETerms,
    },
}
</script>