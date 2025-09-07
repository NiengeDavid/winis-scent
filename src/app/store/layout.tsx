export const metadata = {
  title: "Wini's Scent Store",
  description: "Backend studio and dashboard for Wini's Scent Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
