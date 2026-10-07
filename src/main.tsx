import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  categories,
  categoryInfo,
  filterPosts,
  posts,
  type Category,
} from "./posts";
import { StillLife, TopicIcon } from "./Art";
import { roomHref, roomUrl } from "./site";
import "./style.css";
const Sprig = () => (
  <svg viewBox="0 0 70 90" fill="none" aria-hidden="true">
    <path d="M20 83Q50 48 42 8" stroke="currentColor" strokeWidth="2" />
    <ellipse
      cx="30"
      cy="57"
      rx="9"
      ry="18"
      fill="currentColor"
      transform="rotate(-42 30 57)"
    />
    <ellipse
      cx="49"
      cy="42"
      rx="8"
      ry="16"
      fill="currentColor"
      transform="rotate(38 49 42)"
    />
    <ellipse
      cx="31"
      cy="24"
      rx="8"
      ry="16"
      fill="currentColor"
      transform="rotate(-35 31 24)"
    />
  </svg>
);
const Arrow = () => <span aria-hidden="true">↗</span>;
function RoomLink({ className = "button" }: { className?: string }) {
  return (
    <a
      className={className}
      href={roomHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      {roomUrl ? "楽天ROOMでいいものを見る" : "楽天ROOMを見てみる"} <Arrow />
      <span className="sr-only">（新しいタブで開きます）</span>
    </a>
  );
}
function RoomSection() {
  return (
    <section id="room" className="room-section" aria-labelledby="room-title">
      <div className="room-visual">
        <StillLife kind="beauty" />
        <span className="room-stamp">
          暮らしに
          <br />
          ときめきを。
        </span>
      </div>
      <div className="room-copy">
        <p className="eyebrow">FIND YOUR FAVORITES</p>
        <p className="room-label">
          楽天<span>ROOM</span>
        </p>
        <h2 id="room-title">
          読んで、気になって。
          <br />
          次は、お気に入り探し。
        </h2>
        <p>
          肌にふれるもの、毎日使うもの、心がはずむもの。
          <br className="desktop-break" />
          楽天ROOMで、自分にぴったりのひと品を探してみませんか。
        </p>
        <RoomLink />
        <p className="room-note">
          {roomUrl
            ? "リンク先で商品の詳細や最新の価格をご確認ください。"
            : "楽天ROOMの公式サイトへ移動します。個人のROOMは準備中です。"}
        </p>
      </div>
    </section>
  );
}
export function App() {
  const [category, setCategory] = useState<Category>("すべて");
  const [query, setQuery] = useState("");
  const visible = filterPosts(category, query);
  const selected = posts.find(
    (p) => p.id === new URLSearchParams(window.location.search).get("article"),
  );
  function chooseCategory(next: Category) {
    setCategory(next);
    setQuery("");
    document
      .getElementById("articles")
      ?.scrollIntoView({
        behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)")
          .matches
          ? "instant"
          : "smooth",
        block: "start",
      });
  }
  return (
    <>
      <a className="skip-link" href="#main">
        本文へスキップ
      </a>
      <div className="top-note">これからの毎日を、もっと私らしく。</div>
      <header className="site-header">
        <a
          className="brand"
          href="./"
          aria-label="50代からのいいもの探し ホーム"
        >
          <span className="brand-sprig" aria-hidden="true">
            <Sprig />
          </span>
          <span>
            <small>50代からの</small>いいもの探し
            <span className="brand-dot">.</span>
          </span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="./#articles">記事を読む</a>
          <a href="./#about">このブログについて</a>
          <a className="nav-room" href="./#room">
            楽天ROOM <Arrow />
          </a>
        </nav>
      </header>
      <main id="main">
        {selected ? (
          <>
            <article className="detail">
              <a className="back-link" href="./#articles">
                ← 記事一覧へ
              </a>
              <p className="eyebrow">
                {selected.category} · 約{selected.minutes}分
              </p>
              <h1>{selected.title}</h1>
              <StillLife kind={selected.art} />
              <p className="sample">サンプル記事 · イラストはイメージです。</p>
              {selected.body.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </article>
            <RoomSection />
          </>
        ) : (
          <>
            <section className="hero">
              <div className="hero-copy">
                <p className="eyebrow">
                  <span className="tiny-line" /> LITTLE JOYS, EVERY DAY
                </p>
                <h1>
                  今の私に、
                  <br />
                  ちょうどいい。
                  <br />
                  <span>そんな「いいもの」と。</span>
                </h1>
                <p className="hero-description">
                  好きなものを、少しずつ。
                  <br />
                  美容も、おしゃれも、日々の暮らしも。
                  <br />
                  これからの毎日を楽しむヒントをお届けします。
                </p>
                <a className="button" href="#articles">
                  私の「いいもの」を探す <Arrow />
                </a>
                <p className="hero-sub">
                  40代・50代・60代。いくつになっても、ときめきを。
                </p>
              </div>
              <div className="hero-image">
                <StillLife />
                <span className="hero-image-caption">
                  心地よい暮らしは、小さな発見から。
                </span>
                <div className="hero-seal">
                  Enjoy
                  <br />
                  <em>your life.</em>
                </div>
              </div>
            </section>
            <section
              className="category-section"
              aria-labelledby="category-title"
            >
              <div className="section-kicker">
                <span className="eyebrow">CATEGORIES</span>
                <h2 id="category-title">好きなことから、見つけよう。</h2>
              </div>
              <div className="category-grid">
                {categoryInfo.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => chooseCategory(c.name)}
                    aria-label={`${c.name}の記事を見る`}
                  >
                    <span className={`category-icon ${c.art}`}>
                      <TopicIcon topic={c.art} />
                    </span>
                    <strong>{c.name}</strong>
                    <span className="category-description">
                      {c.description}
                    </span>
                  </button>
                ))}
              </div>
            </section>
            <section
              id="articles"
              className="articles"
              aria-labelledby="articles-title"
            >
              <div className="section-heading">
                <div>
                  <p className="eyebrow">THE JOURNAL</p>
                  <h2 id="articles-title">
                    日々の、いいもの手帖<span className="heading-dot">。</span>
                  </h2>
                </div>
                <p>毎日に、ひとさじの楽しみを。</p>
              </div>
              <div className="controls">
                <div className="tabs" aria-label="記事のカテゴリ">
                  {categories.map((c) => (
                    <button
                      key={c}
                      aria-pressed={category === c}
                      onClick={() => setCategory(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <label className="search">
                  <span className="sr-only">記事を検索</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="10" cy="10" r="6.5" />
                    <path d="m15 15 6 6" />
                  </svg>
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="キーワードで探す"
                  />
                </label>
              </div>
              <div className="results-line">
                <p className="sample">
                  サンプル記事 · イラストはイメージです。
                </p>
                <span aria-live="polite">{visible.length}件の記事</span>
              </div>
              <div className="article-grid">
                {visible.map((p) => (
                  <article className="card" key={p.id}>
                    <a href={`?article=${p.id}`}>
                      <div className="card-image">
                        <StillLife kind={p.art} />
                        <span className="image-category">{p.category}</span>
                      </div>
                      <div className="card-body">
                        <p className="meta">
                          {
                            categoryInfo.find((c) => c.name === p.category)
                              ?.english
                          }
                          <span>約{p.minutes}分で読めます</span>
                        </p>
                        <h3>{p.title}</h3>
                        <p className="excerpt">{p.excerpt}</p>
                        <span className="read">
                          続きを読む <Arrow />
                        </span>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
              {visible.length === 0 && (
                <div role="status" className="empty">
                  <p>
                    該当する記事がありません。
                    <br />
                    検索語やカテゴリを変更してください。
                  </p>
                  <button
                    className="text-button"
                    onClick={() => {
                      setCategory("すべて");
                      setQuery("");
                    }}
                  >
                    すべての記事を表示する →
                  </button>
                </div>
              )}
            </section>
            <RoomSection />
            <section id="about" className="about">
              <div className="about-mark" aria-hidden="true">
                <Sprig />
              </div>
              <div>
                <p className="eyebrow">ABOUT THIS BLOG</p>
                <h2>
                  年齢を重ねるほど、
                  <br className="mobile-break" />
                  「好き」を大切に。
                </h2>
                <p>
                  誰かの正解より、今の自分にしっくりくるものを。
                  <br className="desktop-break" />
                  「50代からのいいもの探し」は、美容や暮らし、旅などを通じて、
                  <br className="desktop-break" />
                  毎日をちょっと心地よくするヒントを集めるブログです。
                </p>
                <p className="about-sign">
                  あなたの「これ、いいな」が見つかりますように。
                </p>
              </div>
            </section>
          </>
        )}
      </main>
      <footer>
        <a className="footer-brand" href="./">
          50代からのいいもの探し<span>毎日に、小さなときめきを。</span>
        </a>
        <div>
          <nav aria-label="フッターナビゲーション">
            <a href="./#articles">記事一覧</a>
            <a href="./#about">このブログについて</a>
            <a href="./#room">楽天ROOM</a>
          </nav>
          <small>© {new Date().getFullYear()} 50代からのいいもの探し</small>
        </div>
      </footer>
    </>
  );
}
const root = document.getElementById("root");
if (root)
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
