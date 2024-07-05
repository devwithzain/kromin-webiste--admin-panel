import "@/styles/globals.css";
import type { Metadata } from "next";
import ToasterProvider from "@/provider/ToastProvide";

export const metadata: Metadata = {
	title: "Kromin Admin Panel",
	description: "Kromin Webiste Admin Panel",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ToasterProvider />
				{children}
			</body>
		</html>
	);
}
