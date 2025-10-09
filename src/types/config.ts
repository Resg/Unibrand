export type DirectionID = 'trade' | 'logistics' | 'fulfillment'

export interface DirectionOverviewItem {
  id: DirectionID
  title: string
  image: string
  lead?: string
}

export interface DirectionDetail {
  id: DirectionID
  title: string
  image: string
  text: string
  lead?: string
  bullets?: string[]
}

export interface Brand {
  name: string
  logo: string
}

export interface Contacts {
  phone: string
  email: string
  address: string
  hours: string
}

export interface Sections {
  directionsOverview: { items: DirectionOverviewItem[] }
  directionsDetail: {
    trade: DirectionDetail
    logistics: DirectionDetail
    fulfillment: DirectionDetail
  }
  brands: Brand[]
  contacts: Contacts
}

export interface Config {
  companyName: string
  tagline: string
  aboutShort: string
  about: string
  sections: Sections
    images: Record<string, string>
}
