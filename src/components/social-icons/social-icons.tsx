import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface SocialIconsProps {
	icon: React.ReactNode;
	href: string;
}

function SocialIcons({ icon, href }: SocialIconsProps) {
	return (
		<Button
			variant="outline"
			size="icon"
		>
			<Link to={href}>{icon}</Link>
		</Button>
	);
}

export default SocialIcons;
