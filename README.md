# 50代からのいいもの探し

美容・暮らし・ファッション・旅行・グルメ・ペットをテーマにした日本語ブログの初期構成です。React / TypeScript / Vite を使用します。

## 開発

Node.js 22.12 以上（この環境では 24.19.0）、npm を使用します。

```sh
npm ci
npm run dev -- --port 5173
```

カテゴリ選択、記事検索、記事詳細（`?article=記事ID`）に対応しています。初期記事はサンプルで、商品レビューではありません。外部サービスや認証情報は不要です。

## 検証・ビルド

```sh
npm test
npm run build
npm run preview -- --port 4173
```

`dist/` を静的サイトとして配信できます。記事は `src/posts.ts`、画面は `src/main.tsx`、スタイルは `src/style.css` にあります。管理画面、記事の永続化、画像アップロードは未実装です。

## デザインと楽天ROOM

PCでは記事を3列、スマートフォンでは1列で表示します。6つのカテゴリ入口・検索・記事詳細・楽天ROOM紹介欄に対応しています。イラストはサイト内のSVGで、外部の画像やフォントサービスに依存しません。

楽天ROOMのリンク先は `https://room.rakuten.co.jp/room_c836dc669f/items` です。変更する場合は `src/site.ts` の `roomUrl` を編集してください。未設定時は「個人のROOMは準備中」と表示して楽天ROOM公式サイトへリンクします。商品紹介のリンク先を公開前に確認してください。初期記事はサンプルであり、実際の購入レビューや商品推奨ではありません。

動作確認: `npm test` で検索、全6カテゴリの切り替え、記事詳細、ROOMリンク、検索結果なしからの復帰を検証します。ブラウザでは幅1440 / 1024 / 768 / 390 / 320pxで横はみ出しがないことと同じ操作を確認済みです。

## GitHub Pagesへの公開

GitHubリポジトリの Settings → Pages → Build and deployment → Source で
`GitHub Actions` を選択します。`.github/workflows/deploy-pages.yml` が
`main` へのpush時にテスト・ビルド・配信を実行します。
初回設定後は Actions → Deploy blog to GitHub Pages → Run workflow でも実行できます。

公開先: https://orenzipeco2021-sketch.github.io/50dai-iimono-blog/

公開ビルドでは `npm run build -- --base=/50dai-iimono-blog/` を使い、
GitHub PagesのサブディレクトリからCSS・JavaScriptを読み込みます。
通常の開発サーバーやデザインには変更を加えていません。
