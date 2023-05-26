export const metadata = {
  title: "OXDX",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="collection/image/icon_2.png"
        type="image/x-icon"
      />
      <body style={{ margin: "0" }}>{children}</body>
    </html>
  );
}
