import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "RVTM Template" },
		{ name: "description", content: "Welcome to RVTM!" },
	];
};

export default function Index() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className='text-4xl font-black'>Remix Template</h1>
      <h2 className="text-2xl">Remix | Vite | Tailwind | Mongoose</h2>
		</div>
	);
}
