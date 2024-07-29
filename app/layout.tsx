import "@/styles/globals.css";
import type { Metadata } from "next";
import Providers from "@/provider/provider";
import ToasterProvider from "@/provider/ToastProvide";

export const metadata: Metadata = {
	title: "Kromin Website Admin Panel",
	description: "Kromin Webiste Admin Panel by devwithzain",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<ToasterProvider />
					{children}
				</Providers>
			</body>
		</html>
	);
}
