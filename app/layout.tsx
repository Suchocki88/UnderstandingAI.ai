export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
