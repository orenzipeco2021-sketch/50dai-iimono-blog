export const categories = ['すべて', '暮らし', '趣味', '健康'] as const;
export type Category = typeof categories[number];
export const posts = [
  { id: 'comfortable-home', category: '暮らし', title: '毎日使うものから、暮らしを心地よく。', excerpt: '手になじむ器、やさしいタオル。小さな選び直しで、いつもの日々が少し豊かに。', icon: '☕', color: 'sand', minutes: 3, body: ['毎日使うものこそ、自分の好みに合うものを選びたい。まずは、朝の一杯を飲むカップから見直してみませんか。', '重さ、持ちやすさ、洗いやすさ。見た目だけでなく、実際に使う場面を思い浮かべると、選ぶ基準がはっきりします。', '急いで買い替える必要はありません。今あるものを大切にしながら、必要になったときにひとつずつ選んでいきましょう。'] },
  { id: 'small-garden', category: '趣味', title: '窓辺の小さな緑と、ゆっくり過ごす週末。', excerpt: '大きな庭がなくても始められる、植物のある暮らし。お気に入りの一鉢を探して。', icon: '🌿', color: 'sage', minutes: 4, body: ['窓辺に緑があるだけで、部屋の雰囲気が変わります。最初は育てる場所の日当たりを確かめて、その環境に合った植物を選びましょう。', '水やりの頻度は植物や季節によって違います。購入時に育て方を確認し、土の状態を見ながらお世話するのがおすすめです。', '成長の様子を写真に残すのも、小さな楽しみ。無理のないペースで、植物との時間を楽しんでください。'] },
  { id: 'walking-time', category: '健康', title: '歩く時間を、楽しみの時間に変える。', excerpt: 'いつもの道で見つける季節の変化。無理なく続ける散歩のための、小さな工夫。', icon: '👟', color: 'peach', minutes: 3, body: ['遠くまで歩くことより、気持ちよく続けられることを大切に。近所の公園や静かな道など、お気に入りの散歩コースを探してみましょう。', '靴は実際に試着して、足に合うかを確認しましょう。天候に合わせた服装や水分補給も忘れずに。', '体調に合わせて距離や時間を調整してください。痛みや不調がある場合は無理をせず、医療専門家に相談しましょう。'] },
];
export function filterPosts(category: Category, query: string) {
  const term = query.trim().toLocaleLowerCase('ja');
  return posts.filter(p => (category === 'すべて' || p.category === category) && `${p.title} ${p.excerpt}`.toLocaleLowerCase('ja').includes(term));
}
