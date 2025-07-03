import { a as createComponent, m as maybeRenderHead, e as renderTemplate, d as renderComponent, c as createAstro, b as addAttribute, r as renderHead } from '../chunks/astro/server_BjglbUUM.mjs';
/* empty css                                 */
import { c as createLucideIcon, a as cars, $ as $$Image, b as $$Footer } from '../chunks/createLucideIcon_BBflix1h.mjs';
export { renderers } from '../renderers.mjs';

const ChevronRight = createLucideIcon("chevron-right", [["path", { "d": "m9 18 6-6-6-6" }]]);

const Cog = createLucideIcon("cog", [["path", { "d": "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" }], ["path", { "d": "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }], ["path", { "d": "M12 2v2" }], ["path", { "d": "M12 22v-2" }], ["path", { "d": "m17 20.66-1-1.73" }], ["path", { "d": "M11 10.27 7 3.34" }], ["path", { "d": "m20.66 17-1.73-1" }], ["path", { "d": "m3.34 7 1.73 1" }], ["path", { "d": "M14 12h8" }], ["path", { "d": "M2 12h2" }], ["path", { "d": "m20.66 7-1.73 1" }], ["path", { "d": "m3.34 17 1.73-1" }], ["path", { "d": "m17 3.34-1 1.73" }], ["path", { "d": "m11 13.73-4 6.93" }]]);

const Fuel = createLucideIcon("fuel", [["line", { "x1": "3", "x2": "15", "y1": "22", "y2": "22" }], ["line", { "x1": "4", "x2": "14", "y1": "9", "y2": "9" }], ["path", { "d": "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" }], ["path", { "d": "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" }]]);

const Gauge = createLucideIcon("gauge", [["path", { "d": "m12 14 4-4" }], ["path", { "d": "M3.34 19a10 10 0 1 1 17.32 0" }]]);

const Phone = createLucideIcon("phone", [["path", { "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }]]);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 class="text-4xl cursor-default text-shadow-lg md:text-shadow-none">
NEED<span class="text-red-900">FR</span><span class="text-sky-900">SPD</span> </h2>`;
}, "/Users/gagandeepsingh/Personal/Projects/needfrspd.github.io/src/component/logo.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-between items-center py-5 absolute top-0 left-0 right-0 container mx-auto px-5 xl:px-0"> <ul class="flex items-center gap-8"> ${renderComponent($$result, "Logo", $$Logo, {})} <!-- {
      navlinks.map((link) => (
        <li class="font-medium">
          <a href={link.href}>{link.name}</a>
        </li>
      ))
    } --> </ul> <a href="tel:+13654405686" class="font-bold text-slate-100 tracking-widest border border-slate-100 rounded-2xl px-4 py-2 flex items-center gap-2"> ${renderComponent($$result, "Phone", Phone, { "class": "w-4 h-4" })} <span class="hidden sm:block">+1 (365) 440-5686</span> <span class="block sm:hidden">Call</span> </a> </nav>`;
}, "/Users/gagandeepsingh/Personal/Projects/needfrspd.github.io/src/component/navbar.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center h-screen bg-[url('../assets/images/hero-img.png')] bg-contain bg-no-repeat bg-top-right"> <div class="ml-5 md:ml-[10%] max-w-2xl mt-[70%] lg:mt-0"> <p>Find the best cars on sale near you.</p> <div class="text-7xl font-semibold tracking-wide leading-22 my-8"> ${cars.length} Vehicles Available
</div> <a href="tel:+13654405686" class="px-4 py-2 rounded-xl border border-[#333] hover:bg-sky-900 hover:text-slate-100 hover:border-sky-900 transition-all duration-300">
Contact Us
</a> </div> </div>`;
}, "/Users/gagandeepsingh/Personal/Projects/needfrspd.github.io/src/component/hero.astro", void 0);

const $$Astro$1 = createAstro("https://needfrspd.github.io");
const $$Car = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Car;
  const { car } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-80"> <div class="w-full h-48 relative"> ${renderComponent($$result, "Image", $$Image, { "src": car.image[0].src, "alt": car.image[0].alt, "width": 320, "height": 192, "class": "w-full h-full object-cover rounded-t-xl" })} </div> <div class="p-4 border-x border-b border-neutral-700 rounded-b-xl"> <div class="text-xl font-semibold text-neutral-300"> ${car.brand} ${car.model} - ${car.year} </div> <div class="text-sm text-neutral-400"> ${car.variant} </div> <hr class="my-4 border-neutral-700"> <div class="flex items-center gap-4 justify-between"> <div class="flex flex-col items-center gap-2"> ${renderComponent($$result, "Gauge", Gauge, { "class": "w-6 h-6 text-neutral-600" })} <span class="text-sm text-neutral-400"> ${car.milage} km
</span> </div> <div class="flex flex-col items-center gap-2"> ${renderComponent($$result, "Fuel", Fuel, { "class": "w-6 h-6 text-neutral-600" })} <span class="text-sm text-neutral-400"> ${car.fuelType} </span> </div> <div class="flex flex-col items-center gap-2"> ${renderComponent($$result, "Cog", Cog, { "class": "w-6 h-6 text-neutral-600" })} <span class="text-sm text-neutral-400"> ${car.transmission} </span> </div> </div> <hr class="my-4 pt-1 border-neutral-700"> <div class="flex items-center justify-between"> <div class="text-xl font-semibold text-neutral-400">
$ ${car.price} </div> <a${addAttribute(`/cars/${car.id}`, "href")} class="text-sky-900 font-medium text-sm hover:text-red-900 transition-all duration-300 flex items-center gap-2">
View Details
${renderComponent($$result, "ChevronRight", ChevronRight, { "class": "w-4 h-4" })} </a> </div> </div> </div>`;
}, "/Users/gagandeepsingh/Personal/Projects/needfrspd.github.io/src/component/car.astro", void 0);

const $$Inventory = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto mb-10 px-5 xl:px-0"> <div class="text-4xl font-bold mt-20 mb-5 border-l-6 border-sky-900 pl-4">
Inventory
</div> <div class="border-b border-neutral-700"> <br> </div> <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center"> ${cars.map((car) => renderTemplate`<div class="mb-10"> ${renderComponent($$result, "Car", $$Car, { "car": car })} </div>`)} </div> </div>`;
}, "/Users/gagandeepsingh/Personal/Projects/needfrspd.github.io/src/component/inventory.astro", void 0);

const $$Astro = createAstro("https://needfrspd.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><title>NeedfrSpd</title>${renderHead()}</head> <body class="w-full"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "Inventory", $$Inventory, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/gagandeepsingh/Personal/Projects/needfrspd.github.io/src/pages/index.astro", void 0);

const $$file = "/Users/gagandeepsingh/Personal/Projects/needfrspd.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
