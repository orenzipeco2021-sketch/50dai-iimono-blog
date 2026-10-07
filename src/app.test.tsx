// @vitest-environment jsdom
import React from 'react';
import { afterEach, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './main';
afterEach(() => { cleanup(); window.history.replaceState({}, '', '/'); });
it('画面でカテゴリ選択と検索を操作できる', async () => {
 const user = userEvent.setup();
 render(<App/>);
 expect(screen.getAllByRole('article')).toHaveLength(3);
 await user.click(screen.getByRole('button', {name: '健康'}));
 expect(screen.getAllByRole('article')).toHaveLength(1);
 expect(screen.getByRole('heading', {name: '歩く時間を、楽しみの時間に変える。'})).toBeTruthy();
 await user.type(screen.getByRole('searchbox'), 'タオル');
 expect(screen.getByRole('status').textContent).toContain('該当する記事がありません');
 await user.click(screen.getByRole('button', {name: 'すべて'}));
 expect(screen.getAllByRole('article')).toHaveLength(1);
 expect(screen.getByRole('link', {name: /毎日使うものから/}).getAttribute('href')).toBe('?article=comfortable-home');
});
it('記事詳細URLで本文が表示される', () => {
 window.history.replaceState({}, '', '/?article=comfortable-home');
 render(<App/>);
 expect(screen.getByRole('heading', {level:1}).textContent).toBe('毎日使うものから、暮らしを心地よく。');
 expect(screen.getByText(/重さ、持ちやすさ、洗いやすさ/)).toBeTruthy();
 expect(screen.getByRole('link', {name:'← 記事一覧へ'}).getAttribute('href')).toBe('./#articles');
});
