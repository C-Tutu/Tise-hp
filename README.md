# Toria Tise | Portfolio Website

イラストレーター「鳥或チセ (Toria Tise)」のポートフォリオサイト。
React + TypeScript + Vite で構築され、モダンで高品質な Web 体験を提供します。

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

**[ライブデモを見る (GitHub Pages)](https://C-Tutu.github.io/Tise-hp/)**

![Site Preview](./public/icon.png)

## ✨ 特徴

-   **没入感のあるデザイン**: 視差効果と洗練されたアニメーション
-   **レスポンシブ対応**: PC、タブレット、スマートフォンに最適化
-   **高速なパフォーマンス**: Vite による最適化されたビルド
-   **画像プレビュー機能**: 作品をクリックして拡大表示できるライトボックス機能

## 🛠 技術スタック

-   **Framework**: React 19
-   **Language**: TypeScript
-   **Build Tool**: Vite
-   **Styling**: Modern CSS3 (CSS Variables, Animations, Glassmorphism)
-   **Deployment**: GitHub Pages

## 🚀 開発環境のセットアップ

```bash
# クローン
git clone https://github.com/C-Tutu/Tise-hp.git
cd Tise-hp

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 📦 デプロイ方法

このプロジェクトは GitHub Pages への自動デプロイ設定が含まれています。

1. 変更をコミットしてプッシュ

    ```bash
    git add .
    git commit -m "Update site content"
    git push
    ```

2. デプロイスクリプトを実行
    ```bash
    npm run deploy
    ```

## 📂 ディレクトリ構成

```
src/
├── assets/         # 画像などの静的リソース
├── components/     # UIコンポーネント
│   ├── FloatingNav.tsx  # SNSリンクナビゲーション
│   ├── ImageModal.tsx   # 画像プレビューモーダル
│   ├── MainVisual.tsx   # メインのヒーローセクション
│   ├── Profile.tsx      # プロフィール情報
│   └── Showcase.tsx     # 作品ギャラリー
├── constants/      # 定数ファイル (DRY原則)
│   └── index.ts
├── App.tsx         # メインアプリケーションコンポーネント
└── index.css       # グローバルスタイル・変数
```

## 📝 ライセンス

This project is licensed under the MIT License.
&copy; 2026 Toria Tise. All Rights Reserved.
