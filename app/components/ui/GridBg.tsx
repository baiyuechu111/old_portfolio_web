import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GridBackground({ children }: any) {
	return (
		<div className="h-fit w-full dark:bg-slate-900 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative flex items-start justify-center">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			{children}
		</div>
	);
}
