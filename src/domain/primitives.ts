/**
 * Брендовый тип - техника для создания номинальной семантики поверх примитивов.
 * Позволяет компилятору отличать идентификаторы друг от друга, даже если они основаны на string.
 */
export type Brand<T, B extends string> = T & { readonly __brand: B };

export type GotiId = Brand<string, "GotiId">;
export type OwnerId = Brand<string, "OwnerId">;
export type TraitId = Brand<string, "TraitId">;
export type TraitCategory = Brand<string, "TraitCategory">;

/**
 * Уровни редкости, применимые к Goti. Нижний регистр удобен для сериализации в метаданные NFT.
 */
export const RARITY_TIERS = ["common", "rare", "epic", "mythic"] as const;
export type RarityTier = (typeof RARITY_TIERS)[number];

export type XPAmount = Brand<number, "XPAmount">;

/**
 * Фабрики для безопасного создания брендовых идентификаторов.
 * В раннем прототипе принимаем string, но при интеграции можно добавить валидацию.
 */
export const asGotiId = (value: string): GotiId => value as GotiId;
export const asOwnerId = (value: string): OwnerId => value as OwnerId;
export const asTraitId = (value: string): TraitId => value as TraitId;
export const asTraitCategory = (value: string): TraitCategory => value as TraitCategory;

/**
 * Обёртка над очками опыта. Округляем вниз и не допускаем отрицательных значений.
 */
export const xp = (value: number): XPAmount => Math.max(0, Math.floor(value)) as XPAmount;
export const xpValue = (amount: XPAmount): number => amount as number;

/**
 * Служебные функции для работы с редкостью и утилитарные helpers.
 */
export const isRarityTier = (value: string): value is RarityTier =>
  (RARITY_TIERS as readonly string[]).includes(value);

export const compareRarity = (left: RarityTier, right: RarityTier): number =>
  RARITY_TIERS.indexOf(left) - RARITY_TIERS.indexOf(right);

/**
 * Универсальный кламп для чисел - пригодится при расчётах XP и наград.
 */
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

/**
 * Утилита для исчерпывающих switch/case - помогает ловить новые значения при расширении домена.
 */
export const assertNever = (value: never): never => {
  throw new Error(`Unexpected value: ${String(value)}`);
};
