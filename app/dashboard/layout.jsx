'use client';

// The Dashboard Layout is a Client Component
export default function ClientLayout({ children }) {
  // Can use useState / useEffect here
  return (
    <>
      <h1>Layout</h1>
      {children}
    </>
  );
}
