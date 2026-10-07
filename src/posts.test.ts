import { describe, expect, it } from 'vitest';
import { filterPosts, posts } from './posts';
describe('記事の絞り込み', () => {
 it('すべての記事を表示する', () => expect(filterPosts('すべて','')).toHaveLength(3));
 it('カテゴリを選択する', () => expect(filterPosts('健康','').map(p => p.id)).toEqual(['walking-time']));
 it('タイトルと紹介文を検索する', () => expect(filterPosts('すべて','  タオル  ').map(p => p.id)).toEqual(['comfortable-home']));
 it('カテゴリと検索を組み合わせる', () => expect(filterPosts('趣味','タオル')).toHaveLength(0));
 it('記事詳細への識別子が重複しない', () => expect(new Set(posts.map(p => p.id)).size).toBe(posts.length));
});
