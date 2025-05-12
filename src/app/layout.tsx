// src/app/layout.tsx
import '@/styles/globals.css';    // <-- adjust this path if your CSS lives somewhere else
import ScrollProgressBar from '@/components/ScrollProgressBar';

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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900 font-sans">
        <ScrollProgressBar color="#000" height={3} zIndex={100} />
        {children}
      </body>
    </html>
  );
}

