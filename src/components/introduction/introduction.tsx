import { MapPinned } from "lucide-react";

function Introduction() {
	return (
		<div className="flex gap-4">
			<div className="max-w-48 rounded-md">
				<img
					src="https://avatars.githubusercontent.com/u/38507921?s=400&u=600001e508097806e657c3322c5301bf5785f54b&v=4"
					alt="Andre Derjagin"
					className="rounded-xl"
				/>
			</div>
			<div className="text-muted-foreground">
				<h1 className="text-xl font-bold text-primary">Andre Derjagin</h1>
				<p className="flex text-sm items-center gap-2">
					<span>
						<MapPinned
							size={16}
							strokeWidth={1.25}
						/>
					</span>
					Baden-Wuerttemberg, Germany
				</p>
				<p className="font-mono">
					Frontend-Developer focusing on building user interfaces
				</p>
			</div>
		</div>
	);
}

export default Introduction;
