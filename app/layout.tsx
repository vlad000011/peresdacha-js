import './globals.css';
import { Sidebar } from '@/components/Sidebar';

export const metadata = { title: 'FinTrack', description: 'Personal finance tracker built with Next.js' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ru"><body><div className="app-shell"><Sidebar /><main className="main">{children}</main></div></body></html>;
}
