export interface DirectionDetail {
  id: 'trade' | 'logistics' | 'fulfillment'
  title: string
  lead?: string
  text: string
  bullets?: string[]
  image?: string
}

export interface Brand { name: string; logo: string }
export interface Contacts { phone: string; email: string; address?: string; hours?: string }

export interface Config {
  companyName: string;
  tagline: string;
  aboutShort: string;
  sections: {
    about: string;
    directionsOverview: { items: Array<{ id: 'trade' | 'logistics' | 'fulfillment'; title: string; image: string; lead?: string }> };
    directionsDetail: {
      trade: DirectionDetail;
      logistics: DirectionDetail;
      fulfillment: DirectionDetail;
    };
    brands: Brand[];
    contacts: Contacts;
    contactsText: string;
  };
}
