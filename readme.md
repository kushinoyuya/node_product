### 画面遷移図
<img width="682" alt="スクリーンショット 2019-11-11 14 33 03" src="https://user-images.githubusercontent.com/51279702/68563275-58cf3e00-0490-11ea-9d2a-9ae3507199ea.png">


### 実行環境コマンド（desktop/node_product/sampleapp3）
- $ sudo npm install express
- $ sudo npm install -g express-generator
- $ express sample_app_3
- $ cd sample_app_3
- $ npm install
- $ npm start

### 不明点
- 画面スクリーンショット
<img width="1042" alt="スクリーンショット 2019-11-11 14 08 37" src="https://user-images.githubusercontent.com/51279702/68562439-fc1e5400-048c-11ea-9b59-9b66dd036eb1.png">
- 画面遷移でリンク(URL)は移動しているが画面反映はされていない。
- bin/www ファイル内のindex.jsを参照してみたが、特に気になる点はみられない。
- routesフォルダ（index.js）内を参照したが特に気になる点はみられない。
- 画面遷移でrouter(node_modules/express/lib/router/)内でエラーとなっているため、routesのhttpメソッド(POST)の記述ミスもしくは記述漏れの疑いがある。また環境設定の漏れの可能性もある(理由は環境構築箇所でも思うように動作していない)
- 何点か調査したが現状今の自分では調べきれなかった。

### 一部参考リンク
- [【Mac】nodebrewのインストールとコマンドなど使い方まとめ - TASK NOTES](https://www.task-notes.com/entry/20141130/1417319179)
- [Node.js - npm install expressでエラーが出てしまう｜teratail](https://teratail.com/questions/137750)
- [Node.js + Express入門 - Qiita](https://qiita.com/etet-etet/items/1c65b934dbe7fc33490b)
- [Node.js＋Express＋Passport を使ってみた - Qiita](https://qiita.com/tinymouse/items/fa910bf80a038c7f9ccb)
- [Node.js + Express + passport で 認証認可 の 仕組み を 作る - galife](https://garafu.blogspot.com/2017/02/express-passport-authn-authz.html)
- [Node.jsで会員登録システムを導入しよう · osamu38/node-express-curriculum Wiki · GitHub](https://github.com/osamu38/node-express-curriculum/wiki/Node.js%E3%81%A7%E4%BC%9A%E5%93%A1%E7%99%BB%E9%8C%B2%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%82%92%E5%B0%8E%E5%85%A5%E3%81%97%E3%82%88%E3%81%86)
- [Node.js + Express で 登録画面 を作る - galife](https://garafu.blogspot.com/2017/04/nodejs-express-regist.html)
- [express実践入門 · GitHub](https://gist.github.com/mitsuruog/fc48397a8e80f051a145)
