import github from "@/../public/github.svg";
import gmail from "@/../public/gmail.svg";
import linkedin from "@/../public/linkedin.svg";
import SocialIcons from "@/components/social-icons";
import { MapPinned } from "lucide-react";

function Introduction() {
	const imageSize = 24;
	return (
		<div className="flex gap-4">
			<div className="max-w-48 rounded-md">
				<img
					src="https://avatars.githubusercontent.com/u/38507921?s=400&u=600001e508097806e657c3322c5301bf5785f54b&v=4"
					alt="Andre Derjagin"
					className="rounded-xl"
				/>
			</div>
			<div>
				<div className="text-muted-foreground">
					<h1 className="text-2xl font-bold text-primary">Andre Derjagin</h1>
					<p className="flex text-sm items-center gap-2">
						<span>
							<MapPinned
								size={16}
								strokeWidth={1.25}
							/>
						</span>
						Baden-Wuerttemberg, Germany, CET
					</p>
					<p className="font-mono">
						Frontend-Developer focusing on building user interfaces.
					</p>
				</div>
				<div className="flex gap-2 pt-4">
					<SocialIcons
						icon={
							<img
								src={gmail}
								alt="gmail"
								width={imageSize}
								height={imageSize}
							/>
						}
						href="mailto:derjagin.andre@gmail.com"
					/>
					<SocialIcons
						icon={
							<img
								src={github}
								alt="github"
								width={imageSize}
								height={imageSize}
							/>
						}
						href="https://github.com/ExziiL"
					/>
					<SocialIcons
						icon={
							<img
								className="-mr-0.5"
								src={linkedin}
								alt="linkedin"
								width={imageSize}
								height={imageSize}
							/>
						}
						href="https://www.linkedin.com/in/andre-derjagin/"
					/>
				</div>
			</div>
		</div>
	);
}

export default Introduction;
