import React from 'react';


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
   
      <main className="min-h-full flex flex-col">
        {children}
        
      </main>
  );
}