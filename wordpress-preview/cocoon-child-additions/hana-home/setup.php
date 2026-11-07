<?php
/** Additive settings for the Hana page template. No activation or migration actions. */
defined('ABSPATH') || exit;

function hhana_topics() {
    return array(
        'food' => array('おいしいもの', 'お茶とおやつで、ほっとひと息。', 'gourmet'),
        'living' => array('暮らしの道具', '毎日使うものこそ、心地よく。', 'home'),
        'hana' => array('ハナとの日常', 'そばにいる幸せを、少しずつ。', 'pet'),
        'fashion' => array('おしゃれ', '今の私に、しっくりくる一着。', 'fashion'),
        'travel' => array('お出かけ', '心が動く、小さな寄り道。', 'travel'),
        'beauty' => array('美容と健康', '自分をいたわる、やさしい時間。', 'beauty'),
    );
}

function hhana_category_id($value) {
    $id = absint($value);
    return $id && term_exists($id, 'category') ? $id : 0;
}

function hhana_image_id($value) {
    $id = absint($value);
    return $id && wp_attachment_is_image($id) ? $id : 0;
}

add_action('customize_register', function ($customizer) {
    $customizer->add_section('hhana_home', array(
        'title' => 'ハナのトップページ', 'priority' => 160,
        'description' => '専用テンプレートだけに使う設定です。既存カテゴリの名前や記事は変更しません。',
    ));
    foreach (array(
        'title' => array('ブログタイトル', '60代からのいいもの探し'),
        'subtitle' => array('サブタイトル', 'ハナと私の、心地よい暮らし'),
    ) as $key => $item) {
        $customizer->add_setting('hhana_' . $key, array('default' => $item[1], 'sanitize_callback' => 'sanitize_text_field'));
        $customizer->add_control('hhana_' . $key, array('label' => $item[0], 'section' => 'hhana_home', 'type' => 'text'));
    }
    $customizer->add_setting('hhana_hero', array('default' => 0, 'sanitize_callback' => 'hhana_image_id'));
    $customizer->add_control(new WP_Customize_Media_Control($customizer, 'hhana_hero', array(
        'label' => '文字なしの「私とハナ」イラスト', 'section' => 'hhana_home', 'mime_type' => 'image',
        'description' => '横長の画像を推奨。全体を表示し、文字は重ねません。代替テキストはメディアライブラリで設定できます。',
    )));
    $choices = array(0 => '未設定（準備中と表示）');
    $terms = get_terms(array('taxonomy' => 'category', 'hide_empty' => false));
    if (!is_wp_error($terms)) {
        foreach ($terms as $term) { $choices[$term->term_id] = $term->name . '（ID: ' . $term->term_id . '）'; }
    }
    foreach (hhana_topics() as $key => $item) {
        $customizer->add_setting('hhana_image_' . $key, array('default' => 0, 'sanitize_callback' => 'hhana_image_id'));
        $customizer->add_control(new WP_Customize_Media_Control($customizer, 'hhana_image_' . $key, array(
            'label' => $item[0] . ' のイラスト', 'section' => 'hhana_home', 'mime_type' => 'image',
            'description' => 'JPG・PNG・WebP画像に差し替えできます。未設定時は同梱の水彩風イラスト。正方形を推奨し、画像全体を表示します。',
        )));
        $customizer->add_setting('hhana_cat_' . $key, array('default' => 0, 'sanitize_callback' => 'hhana_category_id'));
        $customizer->add_control('hhana_cat_' . $key, array('label' => $item[0] . ' のリンク先', 'section' => 'hhana_home', 'type' => 'select', 'choices' => $choices));
    }
    $customizer->add_setting('hhana_room', array('default' => '', 'sanitize_callback' => 'esc_url_raw'));
    $customizer->add_control('hhana_room', array('label' => '楽天ROOMのURL', 'section' => 'hhana_home', 'type' => 'url', 'description' => 'ご自身のROOMを確認して入力。空欄なら準備中と表示します。'));
});

add_action('wp_enqueue_scripts', function () {
    if (is_page_template('page-hana-home.php')) {
        wp_enqueue_style('hhana-home', get_stylesheet_directory_uri() . '/hana-home/assets/home.css', array(), '1.2.0');
    }
}, 99);

/** Default artwork is one generated watercolor sheet, framed by CSS without altering the source. */
function hhana_icon($kind) {
    $allowed = array('gourmet', 'home', 'pet', 'fashion', 'travel', 'beauty');
    if (!in_array($kind, $allowed, true)) { $kind = 'home'; }
    return '<span class="hh-watercolor hh-watercolor-' . esc_attr($kind) . '" aria-hidden="true"></span>';
}

function hhana_topic_image($key, $kind) {
    $image_id = absint(get_theme_mod('hhana_image_' . $key, 0));
    if ($image_id && wp_attachment_is_image($image_id)) {
        return wp_get_attachment_image($image_id, 'medium', false, array('class' => 'hh-category-image', 'alt' => '', 'loading' => 'lazy', 'sizes' => '(max-width: 600px) 150px, 300px'));
    }
    return hhana_icon($kind);
}

/** Existing post thumbnails take precedence; category art is only a fallback. */
function hhana_post_art() {
    foreach (hhana_topics() as $key => $item) {
        $id = absint(get_theme_mod('hhana_cat_' . $key, 0));
        if ($id && has_category($id)) { return hhana_topic_image($key, $item[2]); }
    }
    return hhana_icon('home');
}
