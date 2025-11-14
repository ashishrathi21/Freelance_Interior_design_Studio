import { LogoCloud } from "./ui/logo-cloud-2";

function DemoOne() {
  return (
    <div className="min-h-screen w-full place-content-center px-4 bg-gradient-to-b from-neutral-950 to-black/90">
      <section className="relative mx-auto grid max-w-3xl py-5">
        
        <h2 className="mb-6 text-center font-medium text-3xl md:text-4xl tracking-tight  text-white font-bold">
          Our Interior Design Services
        </h2>

        <p className="mb-12 text-center text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
         We craft functional, aesthetic, and personalized interiors — offering residential and commercial design, modular solutions, 3D visualization, décor styling, and complete project execution.
        </p>

        <LogoCloud />
      </section>
    </div>
  );
}

export default DemoOne;
