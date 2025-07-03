import { c as createAstro, a as createComponent, b as addAttribute, r as renderHead, d as renderComponent, e as renderTemplate } from '../../chunks/astro/server_BjglbUUM.mjs';
/* empty css                                    */
import { c as createLucideIcon, $ as $$Image, a as cars, b as $$Footer } from '../../chunks/createLucideIcon_BBflix1h.mjs';
export { renderers } from '../../renderers.mjs';

const ChevronLeft = createLucideIcon("chevron-left", [["path", { "d": "m15 18-6-6 6-6" }]]);

const $$Astro = createAstro("https://needfrspd.github.io");
async function getStaticPaths() {
  return cars.map((car) => ({
    params: { car: car.id.toString() },
    props: { car }
  }));
}
const $$car = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$car;
  const { car } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><title>NeedfrSpd</title>${renderHead()}</head> <body class="container mx-auto flex flex-col min-h-screen"> <div class="flex justify-start items-center my-10 mx-5 md:mx-0"> <a href="/" class="text-sky-900 font-medium text-sm transition-all duration-300 flex justify-center items-center border border-sky-900 rounded-full w-12 h-12 hover:bg-red-900 hover:text-white hover:border-red-900"> ${renderComponent($$result, "ChevronLeft", ChevronLeft, { "class": "w-8 h-8 mr-1" })} </a> </div> <div class="text-4xl font-bold mb-5 border-l-6 border-sky-900 pl-4 mx-5 md:mx-0"> ${car.year} ${car.brand} ${car.model} </div> <span class="text-sm text-neutral-500 mx-5 md:mx-0">${car.variant} with ${car.milage} km | ${car.fuelType} | ${car.transmission}</span> <div class="mt-4 mx-5 md:mx-0"> <p class="text-l font-semibold mt-4">Price: $${car.price} CAD</p> </div> <div class="mt-6 grid grid-cols-2 gap-4 mx-5 md:mx-0"> ${car.image.map((img) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": img.src, "alt": img.alt, "width": 800, "height": 600, "class": "w-full h-full object-cover rounded-lg" })}`)} </div> <div class="mt-auto"> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "/Users/gagandeepsingh/Personal/Projects/needfrspd.github.io/src/pages/cars/[car].astro", void 0);

const $$file = "/Users/gagandeepsingh/Personal/Projects/needfrspd.github.io/src/pages/cars/[car].astro";
const $$url = "/cars/[car]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$car,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
