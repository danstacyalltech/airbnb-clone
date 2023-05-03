import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";

export const metadata = {
	title: "Airbnb",
	description: "Airbnb Clone",
};

// Here we are using the font in the layout
const font = Nunito({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<RegisterModal />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
