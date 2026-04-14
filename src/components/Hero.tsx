import { ArrowRightIcon, PlayIcon, ZapIcon, CheckIcon } from "lucide-react";
import { PrimaryButton, GhostButton } from "./Buttons";

export default function Hero() {

const trustedUserImages = [
"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50",
"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50",
"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop"
];

const mainImageUrl =
"https://i.imgur.com/FsAAai1.png";

const galleryStripImages = [
"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=100",
"https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=100",
"https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=100"
];

const trustedLogos = [
"/softwares/nuvem.png",
"/softwares/metaads.png",
"/softwares/googleads.png",
"/softwares/rd.png",
"/softwares/edrone.png",
"/softwares/melhorenvio.png",
"/softwares/bling.png",
"/softwares/hostgatir.png",
"/softwares/tiktokads.png"
];

return (
<>

<section id="home" className="relative z-10">

<div className="max-w-6xl mx-auto px-4 pt-28 md:pt-32 pb-16 md:pb-20">

<div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

{/* LEFT */}
<div>

<div className="flex items-center gap-3 mb-6 bg-white/10 px-3 py-2 rounded-full w-fit">

<div className="flex -space-x-2">
{trustedUserImages.map((src, i) => (
<img
key={i}
src={src}
className="w-6 h-6 rounded-full border border-black"
/>
))}
</div>

<span className="text-xs text-gray-200">
+300 empresas atendidas com sucesso
</span>

</div>

<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-lg md:max-w-xl leading-[1.15]">

Crescimento real para{" "}

<span className="block">
sua empresa no digital.
</span>

<span className="block text-indigo-400">
Estratégia e execução.
</span>

</h1>

<p className="text-gray-300 mb-8 max-w-lg text-sm sm:text-base leading-relaxed">
Marketing para escritórios, clínicas e lojistas que querem sair do básico, atrair mais clientes e escalar suas vendas com estratégia.
</p>

<div className="flex flex-col sm:flex-row gap-4 mb-8">

<a href="https://wa.me/554796648695">
<PrimaryButton className="py-3 px-6 sm:px-7 w-full sm:w-auto justify-center">
Receber diagnóstico gratuito
<ArrowRightIcon className="size-4" />
</PrimaryButton>
</a>

<a
href="https://wa.me/554796648695"
target="_blank"
rel="noopener noreferrer"
>
<GhostButton className="py-3 px-5 w-full sm:w-auto justify-center">
<PlayIcon className="size-4" />
Falar com especialista
</GhostButton>
</a>

</div>

<div className="flex flex-col sm:flex-row text-sm text-gray-200 bg-white/10 rounded overflow-hidden">

<div className="flex items-center gap-2 p-3 w-full">

<ZapIcon className="size-4 text-sky-500" />

<div>
<div>Estratégia completa</div>
<div className="text-xs text-gray-400">
Marketing, conteúdo e sistemas
</div>
</div>

</div>

<div className="hidden sm:block h-6 w-px bg-white/10"></div>

<div className="flex items-center gap-2 p-3 w-full">

<CheckIcon className="size-4 text-cyan-500" />

<div>
<div>Execução integrada</div>
<div className="text-xs text-gray-400">
Empresa e marketing alinhados
</div>
</div>

</div>

</div>

</div>

{/* RIGHT */}
<div>

<div className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

<img
src={mainImageUrl}
className="w-full h-full object-cover"
/>

</div>

<div className="flex gap-2 sm:gap-3 mt-4">

{galleryStripImages.map((img, i) => (

<img
key={i}
src={img}
className="w-12 sm:w-14 h-9 sm:h-10 object-cover rounded"
/>

))}

</div>

</div>

</div>

</div>

</section>


{/* LOGOS */}

<section className="border-y border-white/10 py-8 md:py-10 overflow-hidden">

<div className="max-w-6xl mx-auto">

<div
className="flex gap-6 w-max"
style={{
animation: "scrollLogos 18s linear infinite"
}}
>

{[...trustedLogos, ...trustedLogos].map((logo, index) => (

<img
key={index}
src={logo}
alt="software"
className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition"
/>

))}

</div>

</div>

<style>
{`
@keyframes scrollLogos {
0% {
transform: translateX(0);
}
100% {
transform: translateX(-50%);
}
}
`}
</style>

</section>

</>
);
}