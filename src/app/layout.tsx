// src/app/layout.tsx
import '@/styles/globals.css';    // <-- adjust this path if your CSS lives somewhere else

export const metadata = {
  title: 'Rafan Ahmed – Portfolio',
  description: 'Computer Science student at UNC Charlotte specializing in AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}

