<template>
  <v-container>
      <!-- Top部分 -->
      <!-- <div> -->
        <v-card tile flat class="my-5 py-5" id="Top">
          <!-- v-responsive動画のアスペクト比を固定する -->
          <v-responsive :aspect-ratio="16/9">
            <iframe class="mb-5" width="100%" height="100%" src="https://www.youtube.com/embed/7GkOtwds3P0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </v-responsive>
        </v-card>
      <!-- </div> -->

      <v-card tile flat class="my-5 py-5">
        <h2 align="center" class="mb-5">GG online</h2>
        <p align="center">【簡単なサービス説明】</p>
      </v-card>

      <v-card tile flat class="my-5 py-5" id="About">
        <h2 align="center" class="mb-5 mr-3"><v-icon large color="red">grade</v-icon>魅力</h2>
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
          <li>・こちらのオンラインサロンは事前入会制となります。</li>
          <li>・非公開グループへの参加までは入会申し込み日から10日程度いただいております。</li>
          <li>・決済については毎月1日にクレジットカード決済が発生します。(2018年1月以降の記事はすべて閲覧できます)</li>
        </ul>
        </div>
        <v-container>
          <v-row justify="center">
            <v-col cols="3" align="center"><v-btn text>【利用規約】</v-btn></v-col>
            <v-col cols="3" align="center"><v-btn text>【プライバシーポリシー】</v-btn></v-col>
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

  <!-- 以下コードは謎！ templateタグの中に要素無いとのエラー出る。 -->
  <!-- <v-content>
    <v-container>
      <v-row class="my-5" justify="center">
        <v-col xs="12" lg="6">
          <h2>a</h2>
        </v-col>
      </v-row>
    </v-container>
  </v-content> -->

</template>