import Image from "next/image";

export default function MenuCard({ item }) {
  return (
    <div className="card-3d rounded-2xl overflow-hidden h-full flex flex-col">
      <div className="relative w-full h-[240px] sm:h-[260px] lg:h-[280px] flex-shrink-0 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />

      </div>

      <div className="p-5 flex-1">
        <h3 className="font-display text-xl text-bone tracking-tightish mb-1">
          {item.name}
        </h3>

        <p className="text-bone/60 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}