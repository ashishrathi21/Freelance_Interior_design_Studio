import { PlusIcon } from "lucide-react";
import { cn } from "../../lib/utils";

// React Icons
import {
  MdMapsHomeWork,
  MdBedroomParent,
  MdKitchen,
  MdMeetingRoom,
  MdBathroom,
  MdChair,
  MdStoreMallDirectory,
  MdOutlineApartment,
} from "react-icons/md";

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4 border-neutral-700",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-neutral-700" />

      {/* 1. Residential Interior */}
      <LogoCard
        className="relative border-r border-b border-neutral-700"
        logo={{
          icon: <MdMapsHomeWork />,
          alt: "Residential Interior",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-white"
          strokeWidth={1}
        />
      </LogoCard>

      {/* 2. Bedroom Interior */}
      <LogoCard
        className="border-b border-neutral-700 md:border-r"
        logo={{
          icon: <MdBedroomParent />,
          alt: "Bedroom Interior",
        }}
      />

      {/* 3. Living Room */}
      <LogoCard
        className="relative border-r border-b border-neutral-700"
        logo={{
          icon: <MdMeetingRoom />,
          alt: "Living Room Interior",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-white"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-white"
          strokeWidth={1}
        />
      </LogoCard>

      {/* 4. Modular Kitchen */}
      <LogoCard
        className="relative border-b border-neutral-700"
        logo={{
          icon: <MdKitchen />,
          alt: "Modular Kitchen",
        }}
      />

      {/* 5. Bathroom Interior */}
      <LogoCard
        className="relative border-r border-b border-neutral-700 md:border-b-0"
        logo={{
          icon: <MdBathroom />,
          alt: "Bathroom Interior",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden text-white"
          strokeWidth={1}
        />
      </LogoCard>

      {/* 6. Custom Furniture */}
      <LogoCard
        className="border-b border-neutral-700 md:border-r md:border-b-0"
        logo={{
          icon: <MdChair />,
          alt: "Custom Furniture",
        }}
      />

      {/* 7. Commercial Interior */}
      <LogoCard
        className="border-r border-neutral-700"
        logo={{
          icon: <MdStoreMallDirectory />,
          alt: "Commercial Interior",
        }}
      />

      {/* 8. Apartment Interior */}
      <LogoCard
        className="text-white"
        logo={{
          icon: <MdOutlineApartment />,
          alt: "Apartment Interior",
        }}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-neutral-700" />
    </div>
  );
}

function LogoCard({ logo, className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 bg-neutral-900 px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      {/* Icon */}
      <div className="text-white text-5xl">{logo.icon}</div>

      {/* Alt Text (Title) */}
      <p className="text-sm md:text-base text-neutral-400 text-center font-medium">
        {logo.alt}
      </p>

      {children}
    </div>
  );
}
