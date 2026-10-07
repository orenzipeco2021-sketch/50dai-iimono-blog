// @vitest-environment jsdom
import React from "react";
import { afterEach, beforeAll, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./main";
beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn();
});
afterEach(() => {
  cleanup();
  window.history.replaceState({}, "", "/");
});
it("画面でカテゴリ選択と検索を操作できる", async () => {
  const user = userEvent.setup();
  render(<App />);
  expect(screen.getAllByRole("article")).toHaveLength(6);
  await user.click(screen.getByRole("button", { name: "美容" }));
  expect(screen.getAllByRole("article")).toHaveLength(1);
  expect(
    screen.getByRole("heading", {
      name: "がんばりすぎない、私のためのスキンケア時間。",
    }),
  ).toBeTruthy();
  await user.type(screen.getByRole("searchbox"), "タオル");
  expect(screen.getByRole("status").textContent).toContain(
    "該当する記事がありません",
  );
  await user.click(screen.getByRole("button", { name: "すべて" }));
  expect(screen.getAllByRole("article")).toHaveLength(1);
  expect(
    screen.getByRole("link", { name: /毎日使うものから/ }).getAttribute("href"),
  ).toBe("?article=comfortable-home");
});
it("記事詳細URLで本文が表示される", () => {
  window.history.replaceState({}, "", "/?article=comfortable-home");
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
    "毎日使うものから、暮らしを心地よく。",
  );
  expect(screen.getByText(/重さ、持ちやすさ、洗いやすさ/)).toBeTruthy();
  expect(
    screen.getByRole("link", { name: "← 記事一覧へ" }).getAttribute("href"),
  ).toBe("./#articles");
});
it("6つのカテゴリへの入口と楽天ROOMへの導線がある", async () => {
  const user = userEvent.setup();
  render(<App />);
  for (const name of [
    "美容",
    "暮らし",
    "ファッション",
    "旅行",
    "グルメ",
    "ペット",
  ]) {
    await user.click(
      screen.getByRole("button", { name: `${name}の記事を見る` }),
    );
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(
      screen.getByRole("button", { name }).getAttribute("aria-pressed"),
    ).toBe("true");
  }
  const link = screen.getByRole("link", { name: /楽天ROOMでいいものを見る/ });
  expect(link.getAttribute("href")).toBe("https://room.rakuten.co.jp/room_c836dc669f/items");
  expect(link.getAttribute("rel")).toContain("noopener");
  expect(screen.queryByText(/個人のROOMは準備中/)).toBeNull();
});
it("検索結果がない場合に一覧へ戻せる", async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.type(screen.getByRole("searchbox"), "存在しない検索語");
  await user.click(
    screen.getByRole("button", { name: "すべての記事を表示する →" }),
  );
  expect(screen.getAllByRole("article")).toHaveLength(6);
});
