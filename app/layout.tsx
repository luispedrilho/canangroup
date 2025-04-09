export const metadata = {
  title: "CaNan Group",
  description: "Connecting Guangdong and South America through global trade.",
};

<link rel="icon" href="/favicon.ico" sizes="any" />

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
