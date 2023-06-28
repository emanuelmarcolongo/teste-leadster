import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Metadata } from 'next';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leadster: Chatbot de Marketing para Aumentar a Geração de Leads',
  description: 'Marketing Conversacional: O Futuro da Geração de Leads',
  icons: {
    shortcut: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>{children}</body>
    </html>
  )
}
