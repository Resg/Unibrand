// src/types/config.ts

// --- Контент внутри детальных блоков ---
export type RichItem =
  | { type: 'p'; text: string }
  | { type: 'p_bold'; text: string }
  | { type: 'ul'; items: string[] }

export interface DirectionDetail {
  id: string
  title: string
  text?: string
  image?: string
  rich?: RichItem[]
}

// --- Краткие карточки направлений (для "Ключевые направления бизнеса") ---
export type DirectionOverviewId = 'distribution' | 'logistics' | 'transport' | 'fulfillment'

export interface DirectionOverviewItem {
  id: DirectionOverviewId
  title: string
  lead?: string
  image?: string
}

export interface Brand {
  name: string
  logo: string
}

// --- Секции сайта ---
export interface Sections {
  directionsOverview: { items: DirectionOverviewItem[] }

  // ВАЖНО: ключи должны соответствовать тому, что используется в коде
  directionsDetail: {
    distribution: DirectionDetail // было trade → теперь distribution
    logistics: DirectionDetail
    transport: DirectionDetail
    fulfillment: DirectionDetail

    // опционально оставим для обратной совместимости
    trade?: DirectionDetail
  }

  // Если у тебя есть строго описанные типы для других секций — подставь их,
  brands: Brand[]
  // иначе оставим any, чтобы не блокировать сборку
  contacts?: unknown
  // about?: any;
  // и т.д.
}

// --- Весь конфиг сайта ---
export interface Config {
  companyName?: string
  tagline: string
  aboutShort?: string
  about?: string

  /** Путь к PDF «Политика конфиденциальности» */
  privacyPolicy?: string
  images: {
    map: string
    [key: string]: string | undefined
  }

  ui?: {
    brandsLogoScale?: number
  }

  sections: Sections
}
