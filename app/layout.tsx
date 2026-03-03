export const metadata = {
  title: "Kelas Pekerja V2",
  description: "Ruang sunyi yang sedang dibangun perlahan."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
