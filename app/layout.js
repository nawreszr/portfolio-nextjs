import './globals.css';

export const metadata = { title: 'portfolio-nextjs | Portfolio' };

const themeScript = `try{var t=localStorage.getItem('theme');
if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}
document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
