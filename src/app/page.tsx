import PropertyCard from '../components/PropertyCard';
import { parseListings } from '../lib/validate';
import source from '../../data/generated/listings.json';
export default function Home() {
  let listings: ReturnType<typeof parseListings> = [];
  let error = false;
  try { listings = parseListings(source); } catch { error = true; }
  return <main style={{maxWidth:1000,margin:'auto',padding:32,fontFamily:'Arial,sans-serif'}}>
    <h1>Neighborhood Property Listings</h1>
    <p>Fictional sample listings for Lab 3. Not real housing offers.</p>
    {error ? <p role="alert">Listings unavailable: validation failed.</p> :
    <section aria-label="Validated properties" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:16}}>
      {listings.map(p=><PropertyCard key={p.property_id} property={p}/>)}
    </section>}
  </main>;
}
