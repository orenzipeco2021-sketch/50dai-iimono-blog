# 50代からのいいもの探し

暮らし・趣味・健康をテーマにした日本語ブログの初期構成です。React / TypeScript / Vite を使用します。

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
