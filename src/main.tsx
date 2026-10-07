import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { categories, filterPosts, posts, type Category } from './posts';
import './style.css';
export function App() {
  const [category, setCategory] = useState<Category>('すべて');
  const [query, setQuery] = useState('');
  const visible = filterPosts(category, query);
  const selected = posts.find(p => p.id === new URLSearchParams(window.location.search).get('article'));
  return <><header><a className="brand" href="./">50代からの<span>いいもの探し<span className="dot">.</span></span></a><nav aria-label="メインナビゲーション"><a href="./#articles">記事を読む</a><a href="./#about">このブログについて</a></nav></header><main>
    {selected ? <article className="detail"><a href="./#articles">← 記事一覧へ</a><p className="eyebrow">{selected.category} · 約{selected.minutes}分</p><h1>{selected.title}</h1><div className={`illustration ${selected.color}`} aria-hidden="true">{selected.icon}</div><p className="sample">この記事はサイト構成確認用のサンプルです。</p>{selected.body.map(t => <p key={t}>{t}</p>)}</article> : <><section className="hero"><div><p className="eyebrow">暮らしに、ちょうどいい発見を。</p><h1>これからの毎日に、<br/>自分らしい<span>「いいもの」</span>を。</h1><p className="intro">たくさんよりも、心から気に入るものを。<br/>50代からの暮らしを楽しむ、ものとコトの記録です。</p><a className="button" href="#articles">いいものを探す <span>↗</span></a></div><div className="hero-art" aria-hidden="true"><div className="sun"></div><div className="vase">🌿</div><div className="cup">☕</div><div className="art-label">A little joy, every day.</div></div></section>
    <section id="articles" className="articles"><div className="section-heading"><div><p className="eyebrow">JOURNAL</p><h2>日々のいいもの手帖</h2></div><p>小さな発見を、ひとつずつ。</p></div><div className="controls"><div className="tabs" aria-label="カテゴリ">{categories.map(c => <button key={c} aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>)}</div><label className="search"><span>記事を検索</span><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="キーワードで探す"/></label></div><p className="sample">掲載記事はサンプルです。実際の商品レビューではありません。</p><div className="grid">{visible.map(p => <article className="card" key={p.id}><a href={`?article=${p.id}`}><div className={`illustration ${p.color}`} aria-hidden="true">{p.icon}<span>暮らしのひとこま</span></div><div className="card-body"><p className="meta">{p.category}<span>約{p.minutes}分で読めます</span></p><h3>{p.title}</h3><p>{p.excerpt}</p><span className="read">記事を読む ↗</span></div></a></article>)}</div>{visible.length === 0 && <p role="status" className="empty">該当する記事がありません。検索語やカテゴリを変更してください。</p>}</section>
    <section id="about" className="about"><p className="eyebrow">ABOUT THIS BLOG</p><h2>今の自分に、しっくりくるもの。</h2><p>暮らし、趣味、健康。年齢を重ねた今だからこそ、<br/>大切にしたいことが見えてきました。<br/>このブログでは、日々を心地よくする発見をつづっていきます。</p></section></>}
  </main><footer><span>50代からのいいもの探し</span><small>© {new Date().getFullYear()} 50代からのいいもの探し</small></footer></>;
}
const root = document.getElementById('root');
if (root) createRoot(root).render(<React.StrictMode><App/></React.StrictMode>);
