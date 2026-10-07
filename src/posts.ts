export const categories = [
  "すべて",
  "美容",
  "暮らし",
  "ファッション",
  "旅行",
  "グルメ",
  "ペット",
] as const;
export type Category = (typeof categories)[number];
export type Topic = Exclude<Category, "すべて">;
export const categoryInfo: {
  name: Topic;
  english: string;
  description: string;
  art: string;
}[] = [
  {
    name: "美容",
    english: "BEAUTY",
    description: "自分をいたわる時間",
    art: "beauty",
  },
  {
    name: "暮らし",
    english: "LIVING",
    description: "毎日を心地よく",
    art: "home",
  },
  {
    name: "ファッション",
    english: "FASHION",
    description: "今の私に似合うもの",
    art: "fashion",
  },
  {
    name: "旅行",
    english: "TRAVEL",
    description: "心が動く、小さな旅",
    art: "travel",
  },
  {
    name: "グルメ",
    english: "GOURMET",
    description: "おいしいひととき",
    art: "gourmet",
  },
  {
    name: "ペット",
    english: "PETS",
    description: "大切な家族と一緒に",
    art: "pet",
  },
];
export const posts: {
  id: string;
  category: Topic;
  title: string;
  excerpt: string;
  art: string;
  minutes: number;
  body: string[];
}[] = [
  {
    id: "gentle-beauty",
    category: "美容",
    title: "がんばりすぎない、私のためのスキンケア時間。",
    excerpt:
      "香りや使い心地を大切に。毎日のケアを、ほっと心がゆるむひとときに。",
    art: "beauty",
    minutes: 3,
    body: [
      "自分のために、少しだけ手を止める。忙しい一日の終わりに、肌をいたわる時間をつくってみませんか。",
      "新しい化粧品を選ぶときは、成分表示や使用方法を確認しましょう。肌に合うかどうかには個人差があるため、少量から試し、異常を感じたら使用を中止してください。",
      "たくさんのアイテムをそろえるより、無理なく続けられることを大切に。使い心地や扱いやすさも、自分に合うものを選ぶ手がかりです。",
    ],
  },
  {
    id: "comfortable-home",
    category: "暮らし",
    title: "毎日使うものから、暮らしを心地よく。",
    excerpt:
      "手になじむ器、やさしいタオル。小さな選び直しで、いつもの日々が少し豊かに。",
    art: "home",
    minutes: 3,
    body: [
      "毎日使うものこそ、自分の好みに合うものを選びたい。まずは、朝の一杯を飲むカップから見直してみませんか。",
      "重さ、持ちやすさ、洗いやすさ。見た目だけでなく、実際に使う場面を思い浮かべると、選ぶ基準がはっきりします。",
      "急いで買い替える必要はありません。今あるものを大切にしながら、必要になったときにひとつずつ選んでいきましょう。",
    ],
  },
  {
    id: "everyday-style",
    category: "ファッション",
    title: "軽やかに出かけたい日の、いつもの一着。",
    excerpt:
      "着心地のよさも、きちんと感も。今の自分に似合う服を、ゆっくり選ぶ楽しみ。",
    art: "fashion",
    minutes: 4,
    body: [
      "好きな服を着ると、出かける気持ちも少し軽くなります。流行だけで決めず、着ていて心地よいと感じる一着を探してみましょう。",
      "試着のときは、座る、腕を上げるなど、日常の動きも確認すると選びやすくなります。手持ちの服に合わせやすい色や、自宅でのお手入れ方法もポイントです。",
      "小さなアクセサリーやストールを添えるだけでも、新しい表情が生まれます。自分らしい組み合わせを楽しんでください。",
    ],
  },
  {
    id: "slow-travel",
    category: "旅行",
    title: "予定を詰めこまない、心ほどける小さな旅。",
    excerpt: "街歩きと、気になる喫茶店。余白を楽しむ旅の支度を始めませんか。",
    art: "travel",
    minutes: 4,
    body: [
      "次のお休みは、少しだけいつもの場所を離れて。遠くへ行かなくても、初めて歩く街には新しい発見があります。",
      "行きたい場所をひとつ決めたら、あとは余裕を持った予定に。交通手段、施設の営業時間、休憩できる場所は出発前に確認しましょう。",
      "歩きやすい靴と、軽いバッグで身軽に。季節や天候に合わせて持ち物を選び、体調に合わせたペースで楽しみましょう。",
    ],
  },
  {
    id: "tea-time",
    category: "グルメ",
    title: "お茶をいれて、ひと息。おやつ時間の小さな幸せ。",
    excerpt:
      "お気に入りのカップに、ひと口のおいしさ。いつもの午後をごほうび時間に。",
    art: "gourmet",
    minutes: 3,
    body: [
      "お気に入りのお茶をいれて、ゆっくり味わう。ほんの短い時間でも、日々の気分転換になります。",
      "お取り寄せのお菓子を選ぶときは、食べきれる量や賞味期限、配送方法を確認しましょう。アレルギーがある方は原材料も忘れずにチェックしてください。",
      "気になっていたお菓子を少しずつ。特別な日でなくても、自分や家族と楽しむ時間を大切にしたいですね。",
    ],
  },
  {
    id: "pet-life",
    category: "ペット",
    title: "一緒に過ごす毎日を、もっと心地よく。",
    excerpt: "くつろぐ場所も、お散歩の時間も。大切な家族のために選びたいもの。",
    art: "pet",
    minutes: 3,
    body: [
      "そばで眠る姿に、ほっとするひととき。ペットと暮らす毎日の道具は、見た目だけでなく安全性や使いやすさを大切に選びたいものです。",
      "ベッドや首輪などは、体格に合うサイズと素材を確認しましょう。汚れたときのお手入れが簡単かどうかも、長く使うためのポイントです。",
      "新しいものを取り入れるときは、ペットの様子を見ながら少しずつ。体調や食事について気になることは、獣医師に相談してください。",
    ],
  },
];
export function filterPosts(category: Category, query: string) {
  const term = query.trim().toLocaleLowerCase("ja");
  return posts.filter(
    (p) =>
      (category === "すべて" || p.category === category) &&
      `${p.title} ${p.excerpt} ${p.category}`
        .toLocaleLowerCase("ja")
        .includes(term),
  );
}
