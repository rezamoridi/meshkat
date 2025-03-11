import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html dir="rtl" lang="en">
            <body
                className={`antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
