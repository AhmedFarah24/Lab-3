export interface Sponsor { sponsor_id: string; business_name: string; category: 'food'|'retail'|'services'|'other' }
export interface PropertyListing {
  property_id: string; street_address: string; city: string; state: 'CA'; zip_code: string;
  price: number; bedrooms: number; bathrooms: number; square_feet: number;
  amenities: Array<'parking'|'laundry'|'balcony'|'yard'|'air_conditioning'>;
  local_sponsors: Sponsor[];
}
