import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "WXY STUDIO", description: "최소한의 비용으로 방문자를 구매자로 바꿔 드립니다." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ko"><body>{children}</body></html> }
