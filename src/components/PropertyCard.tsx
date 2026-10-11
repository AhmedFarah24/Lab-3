import type { PropertyListing } from '../lib/types';
export default function PropertyCard({ property }: { property: PropertyListing }) {
  return <article style={{border:'1px solid #cbd5e1',borderRadius:12,padding:20,background:'white'}}>
    <h2>{property.street_address}</h2>
    <p>{property.city}, {property.state} {property.zip_code}</p>
    <p><strong>${property.price.toLocaleString()}/month</strong></p>
    <p>{property.bedrooms} bedrooms · {property.bathrooms} bathrooms · {property.square_feet} sq ft</p>
    <p>Amenities: {property.amenities.join(', ')}</p>
    <p>Local sponsors: {property.local_sponsors.map(s=>s.business_name).join(', ') || 'None'}</p>
  </article>;
}
