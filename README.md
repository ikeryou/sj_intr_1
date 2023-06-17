# インタラ塾第1回

## 基本アニメーション
ありそうなWebサイトのファーストビュー部分を、３つのテーマ(トンマナ)でアニメーションをつけました。  
それぞれ解説していきます。  


## 1. "高級感、落ち着いた、荘厳な"

アニメーションのキーワード🫰  
- ゆっくりなめらか
  - なるべく緩急はつけない
- duration長め
  - 2秒くらいでもいいかも
- イージング緩やか  
  - Power1,Power2あたり
  - 基本~Out系
- 常に動いてる
  - 高級感
- フェードインアウト
  - よく使うが、でかい画像のopacity操作を負荷が高くなりがちなので注意

デモ  
https://ikeryou.jp/sjintr/1/0/

ソースコード  
https://github.com/ikeryou/sj_intr_1/blob/main/0/main.js

/*

背景がフェードインし終わっても、スケールを動かし続けて止まってる印象を与えない。  
背景がゆっくりスケーリングしながら、テキストも緩やかに表示。  
常に何かが動いてる間に要素を表示させて、常に動いてるテンポを大事にする。  
フェードイン以外にもぼかしとかは相性がよいが負荷高いの大きい要素に使用するときは要注意。  
テキストも背景んようにゆっくりスケーリングしたいが、DOMでやる場合ピクピクうごく場合があるのでやりづらい。  
どうしてもの場合はcanvas、webgl  



## 2. "クール、スタイリッシュ、スピード感"

アニメーションのキーワード🫰  
- 直線的
  - 右から左など揃えた方がよい
- イージング強め
  - Power3,Expo
  - inOut系
  - 最後だけきゅっと止まるようなのをカスタムしてもいいかも
- 速い
  - duration等は速め、スピード感を出す

デモ  
https://ikeryou.jp/sjintr/1/1/

ソースコード  
https://github.com/ikeryou/sj_intr_1/blob/main/1/main.js

/*

背景、テキスト共に直線的なアニメーションにした。  
その際にアニメーションの方向は揃える。  
イージングはExpoInOutできつめにして、durationは1秒くらい。  
FIXするまでの秒数をあんまり長くしない。  
勢い大事。  


## 3. "ポップ、かわいい、アクティブ"

アニメーションのキーワード🫰  
- duration短め
- アニメーションさせる要素多め
  - 単語ごとにモーション
  - opacity、scale、rotaion、translate、など多くのパラメータをアニメーションさせる
- バネ
  - Elastic.easeOut.config(1, 0.75)
- いきなりでてくる
  - フェード系はあまり使わないか抑える
  - ぱっと出てきても以外と違和感ない
- テンポ早め
  - にぎやかさを重視

デモ  
https://ikeryou.jp/sjintr/1/2/

ソースコード  
https://github.com/ikeryou/sj_intr_1/blob/main/2/main.js

/*

ポップ系は大きい背景のモーション悩む。今回はborderRadiusを使ったちょっと変わった感じに。  
webglを使って背景を分解してバラバラに出すやつとか相性よい。
タイトルは１文字ずつ分けて、y、scale、rotaionをアニメーションさせて、にぎやかな感じに。
テキストをさりげなく出してタイトルのモーションの邪魔をしないように。

