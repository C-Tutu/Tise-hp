/**
 * サイト共通定数
 * DRY原則に基づき、重複する情報を一元管理
 */

/** アーティスト情報 */
export const ARTIST = {
    nameEn: "Toria Tise",
    nameJp: "鳥或チセ",
    role: "Illustrator",
    status: "High School Student",
    interests: ["Arknights", "Vocaloid"],
} as const;

/** SNSリンク */
export const SOCIAL_LINKS = {
    twitter: {
        url: "https://x.com/tise_toria",
        label: "X (Twitter)",
    },
    bluesky: {
        url: "https://bsky.app/profile/tise-toria.bsky.social",
        label: "BlueSky",
    },
} as const;

/** テーマカラー */
export const COLORS = {
    primary: "#00bcd4",
    accent: "#84fffc", // イメージカラー
} as const;
