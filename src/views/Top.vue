<template>
  <v-container>
      <!-- Top部分 -->
          <!-- <h2 style="border-bottom:solid 1px #333;">サービス紹介と規約</h2> -->
      <div id="Top">
        <v-card>
          <v-responsive :aspect-ratio="16/9">
            <iframe class="mb-5" width="100%" height="100%" src="https://www.youtube.com/embed/7GkOtwds3P0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </v-responsive>
        </v-card>
      </div>
  
      <h2 class="my-5" align="center">入会条件・注意事項</h2>
      <ul>
        <li>こちらのオンラインサロンは事前入会制となります。</li>
        <li>非公開グループへの参加までは入会申し込み日から10日程度いただいております。</li>
        <li>決済については毎月1日にクレジットカード決済が発生します。(2018年1月以降の記事はすべて閲覧できます)</li>
      </ul>
      
      <p align="center">
      サービスの魅力紹介
      </p>
  </v-container>

  <!-- 以下コードは謎！ templateタグの中に要素無いとのエラー出る。 -->
  <!-- <v-content>
    <v-container>
      <v-row class="my-5" justify="center">
        <v-col xs="12" lg="6">
          <p>a</p>
        </v-col>
      </v-row>
    </v-container>
  </v-content> -->

</template>