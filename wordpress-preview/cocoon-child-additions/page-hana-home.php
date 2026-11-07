<?php
/**
 * Template Name: ハナのトップページ（テスト用）
 * Template Post Type: page
 */
defined('ABSPATH') || exit;
require_once get_stylesheet_directory() . '/hana-home/setup.php';
$hhana_title = get_theme_mod('hhana_title', '60代からのいいもの探し');
$hhana_subtitle = get_theme_mod('hhana_subtitle', 'ハナと私の、心地よい暮らし');
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class('hh-home'); ?>>
<?php wp_body_open(); ?>
<div class="hh-site">
<a class="hh-skip" href="#hh-main">本文へ移動</a>
<div class="hh-topnote">毎日に、小さな「いいな」を。</div>
<header class="hh-header hh-wrap">
    <a class="hh-brand" href="<?php echo esc_url(home_url('/')); ?>"><span aria-hidden="true" class="hh-sprig">❧</span><?php echo esc_html($hhana_title); ?></a>
    <nav aria-label="メインメニュー"><a href="#hh-articles">新着記事</a><a href="#hh-about">このブログについて</a><a class="hh-room-nav" href="#hh-room">楽天ROOM ↗</a></nav>
</header>
<main id="hh-main" class="hh-wrap">
<?php if (post_password_required()) : ?>
    <section class="hh-section"><h1>このページは保護されています</h1><?php echo get_the_password_form(); ?></section>
<?php else : ?>
    <section class="hh-hero" aria-labelledby="hh-title">
        <div class="hh-hero-copy">
            <p class="hh-eyebrow">LITTLE JOYS, EVERY DAY</p>
            <h1 id="hh-title"><?php if ($hhana_title === '60代からのいいもの探し') : ?><span>60代からの</span><span>いいもの探し</span><?php else : echo esc_html($hhana_title); endif; ?></h1>
            <p class="hh-subtitle"><?php echo esc_html($hhana_subtitle); ?></p>
            <p>好きなものを、少しずつ。<br>おいしいものも、暮らしの道具も。<br>ハナと過ごす日々の「いいな」を綴ります。</p>
            <a class="hh-button" href="#hh-articles">日々のいいものを読む <span aria-hidden="true">→</span></a>
        </div>
        <figure class="hh-hero-figure">
        <?php $hero = absint(get_theme_mod('hhana_hero', 0));
        if ($hero && wp_attachment_is_image($hero)) :
            echo wp_get_attachment_image($hero, 'large', false, array('class' => 'hh-hero-image', 'loading' => 'eager', 'fetchpriority' => 'high', 'sizes' => '(max-width: 760px) 100vw, 600px'));
        else : ?>
            <div class="hh-image-placeholder" role="img" aria-label="メインイラストは準備中"><span aria-hidden="true">❧</span></div>
        <?php endif; ?>
            <figcaption><?php echo $hero && wp_attachment_is_image($hero) ? 'ハナと私の、いつもの時間。' : '「私とハナ」のイラストは、これから。'; ?></figcaption>
        </figure>
    </section>
    <section class="hh-topics hh-section" aria-labelledby="hh-topics-title">
        <div class="hh-section-heading"><p class="hh-eyebrow">CATEGORIES</p><h2 id="hh-topics-title">好きなことから、見つけよう。</h2></div>
        <div class="hh-topic-grid">
        <?php foreach (hhana_topics() as $key => $item) :
            $cat_id = absint(get_theme_mod('hhana_cat_' . $key, 0));
            $term = $cat_id ? get_term($cat_id, 'category') : null;
            $url = $term && !is_wp_error($term) ? get_category_link($cat_id) : '';
            if (is_wp_error($url)) { $url = ''; }
        ?>
            <div class="hh-topic hh-topic-<?php echo esc_attr($key); ?>">
            <?php if ($url) : ?><a href="<?php echo esc_url($url); ?>"><?php endif; ?>
                <span class="hh-topic-icon"><?php echo hhana_topic_image($key, $item[2]); ?></span>
                <h3><?php echo esc_html($item[0]); ?></h3>
                <p><?php echo esc_html($item[1]); ?></p>
                <span class="hh-topic-more"><?php echo $url ? '記事を読む →' : 'ただいま準備中'; ?></span>
            <?php if ($url) : ?></a><?php endif; ?>
            </div>
        <?php endforeach; ?>
        </div>
    </section>
    <section id="hh-articles" class="hh-section" aria-labelledby="hh-articles-title">
        <div class="hh-section-heading hh-heading-row"><div><p class="hh-eyebrow">THE JOURNAL</p><h2 id="hh-articles-title">新着記事<span class="hh-dot">。</span></h2></div><p>毎日に、ひとさじの楽しみを。</p></div>
        <?php
        $hhana_page = isset($_GET['hh_page']) && is_scalar($_GET['hh_page']) ? max(1, absint(wp_unslash($_GET['hh_page']))) : 1;
        $hhana_posts = new WP_Query(array('post_type' => 'post', 'post_status' => 'publish', 'has_password' => false, 'posts_per_page' => 6, 'paged' => $hhana_page, 'ignore_sticky_posts' => true, 'orderby' => array('date' => 'DESC', 'ID' => 'DESC')));
        if ($hhana_posts->have_posts()) : ?>
        <div class="hh-article-grid">
        <?php while ($hhana_posts->have_posts()) : $hhana_posts->the_post(); ?>
            <article class="hh-card"><a href="<?php the_permalink(); ?>">
                <?php if (has_post_thumbnail()) : ?>
                    <div class="hh-card-image"><?php the_post_thumbnail('medium_large', array('loading' => 'lazy', 'sizes' => '(max-width: 600px) 100vw, (max-width: 900px) 50vw, 380px')); ?></div>
                <?php else : ?><div class="hh-card-image hh-noimage hh-watercolor-panel" aria-hidden="true"><?php echo hhana_post_art(); ?></div><?php endif; ?>
                <div class="hh-card-body">
                    <div class="hh-meta"><time datetime="<?php echo esc_attr(get_the_date('c')); ?>"><?php echo esc_html(get_the_date('Y.m.d')); ?></time>
                    <?php $cats = get_the_category(); if ($cats) : ?><span><?php echo esc_html($cats[0]->name); ?></span><?php endif; ?></div>
                    <h3><?php echo esc_html(get_the_title() ?: 'タイトル未設定'); ?></h3>
                    <p><?php echo esc_html(wp_html_excerpt(wp_strip_all_tags(get_the_excerpt()), 76, '…')); ?></p>
                    <span class="hh-read">続きを読む <span aria-hidden="true">→</span></span>
                </div>
            </a></article>
        <?php endwhile; ?>
        </div>
        <?php else : ?><p class="hh-empty">記事はただいま準備中です。また、のぞきに来てくださいね。</p><?php endif;
        wp_reset_postdata();
        if ($hhana_posts->max_num_pages > 1 || $hhana_page > 1) : ?>
        <nav class="hh-pagination" aria-label="新着記事のページ送り">
            <?php if ($hhana_page > 1) : ?><a class="hh-button hh-outline" href="<?php echo esc_url(add_query_arg('hh_page', min($hhana_page - 1, max(1, $hhana_posts->max_num_pages)), get_permalink()) . '#hh-articles'); ?>">← 新しい記事</a><?php endif; ?>
            <?php if ($hhana_page < $hhana_posts->max_num_pages) : ?><a class="hh-button hh-outline" href="<?php echo esc_url(add_query_arg('hh_page', $hhana_page + 1, get_permalink()) . '#hh-articles'); ?>">以前の記事 →</a><?php endif; ?>
        </nav>
        <?php endif; ?>
    </section>
    <section id="hh-room" class="hh-room hh-section" aria-labelledby="hh-room-title">
        <div class="hh-room-mark" aria-hidden="true"><span>楽天</span>ROOM<small>暮らしに、ときめきを。</small></div>
        <div><p class="hh-eyebrow">MY FAVORITES</p><h2 id="hh-room-title">お気に入りを、<br>ひとつずつ。</h2><p>毎日をちょっと心地よくするもの。<br>気になるものを、楽天ROOMに集めています。</p>
        <?php $room = get_theme_mod('hhana_room', ''); if ($room && esc_url($room)) : ?>
            <a class="hh-button hh-rose" href="<?php echo esc_url($room); ?>" target="_blank" rel="noopener noreferrer sponsored">楽天ROOMを見てみる ↗<span class="hh-sr">（新しいタブで開きます）</span></a>
        <?php else : ?><p class="hh-room-pending">楽天ROOMへのご案内は準備中です。</p><?php endif; ?>
        <p class="hh-small">リンク先には、商品購入により紹介者へ報酬が発生するものがあります。</p></div>
    </section>
    <section id="hh-about" class="hh-about hh-section" aria-labelledby="hh-about-title">
        <span class="hh-about-sprig" aria-hidden="true">❧</span>
        <div><p class="hh-eyebrow">ABOUT THIS BLOG</p><h2 id="hh-about-title">このブログについて</h2>
        <?php if (trim((string) get_post_field('post_content', get_queried_object_id())) !== '') :
            while (have_posts()) : the_post(); the_content(); endwhile;
        else : ?>
            <p>年齢を重ねるほど、自分の「好き」を大切に。<br>「60代からのいいもの探し」は、ハナと過ごす毎日のなかで見つけた、<br>小さな楽しみや心地よいものを綴るブログです。</p>
            <p class="hh-sign">あなたの「これ、いいな」が見つかりますように。</p>
        <?php endif; ?></div>
    </section>
<?php endif; ?>
</main>
<footer class="hh-footer hh-wrap"><p><?php echo esc_html($hhana_title); ?><small><?php echo esc_html($hhana_subtitle); ?></small></p><nav aria-label="フッターメニュー"><a href="#hh-main">ページの先頭へ ↑</a><?php if (get_privacy_policy_url()) : ?><a href="<?php echo esc_url(get_privacy_policy_url()); ?>">プライバシーポリシー</a><?php endif; ?></nav><small>© <?php echo esc_html(wp_date('Y')); ?> <?php echo esc_html($hhana_title); ?></small></footer>
</div>
<?php wp_footer(); ?>
</body></html>
