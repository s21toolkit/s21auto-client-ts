import dts from "bun-plugin-dts"

await Bun.build({
	entrypoints: ["src/index.ts"],
	outdir: "build",
	minify: true,
	plugins: [dts()],
})
