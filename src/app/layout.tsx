// src/app/layout.tsx
import '@/styles/globals.css';    // <-- adjust this path if your CSS lives somewhere else

export const metadata = {
  title: 'Rafan Ahmed – Machine Learning & Algorithmic Trading',
  description: 'CS Student at UNC Charlotte | Full-Stack Developer | Aspiring AI Researcher',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}

