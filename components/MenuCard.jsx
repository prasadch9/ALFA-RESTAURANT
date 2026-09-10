import Image from "next/image";

export default function MenuCard({ item }) {
  return (
    <div className="card-3d rounded-2xl overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute top-3 right-3 bg-ink/80 backdrop-blur px-3 py-1 rounded-full border border-gold/40">
          <span className="font-display text-gold text-sm tracking-tightish">{item.price}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl text-bone tracking-tightish mb-1">{item.name}</h3>
        <p className="text-bone/60 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}
