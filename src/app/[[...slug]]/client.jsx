'use client';

import dynamic from 'next/dynamic';

const App = dynamic(() => import('../../Content/Content.jsx'), { ssr: true });

export function ClientOnly() {
  return <App />;
}
