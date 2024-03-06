import { useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError() as { message: string; statusText: string };

	return (
		<div>
			<h1>Oops!</h1>
			<p>Something went wrong.</p>
			<p>
				<i>{error.message || error.statusText}</i>
			</p>
		</div>
	);
}

export default ErrorPage;
