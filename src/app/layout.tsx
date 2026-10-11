import type { ReactNode } from 'react';
export const metadata = { title:'Lab 3 Neighborhood Listings', description:'Synthetic validated property listings' };
export default function RootLayout({children}:{children:ReactNode}) {return <html lang="en"><body style={{margin:0,background:'#f8fafc',color:'#0f172a'}}>{children}</body></html>}
