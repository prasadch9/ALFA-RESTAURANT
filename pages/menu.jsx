import { useState } from "react";
import Head from "next/head";
import MenuCard from "@/components/MenuCard";
import { vegItems, nonVegItems } from "@/data/menuData";
import { FaLeaf, FaDrumstickBite } from "react-icons/fa";

export default function Menu() {
  const [tab, setTab] = useState("veg");
  const items = tab === "veg" ? vegItems : nonVegItems;

  return (
    <>
      <Head>
        <title>Menu | ALFA Restaurant</title>
        <meta
          name="description"
          content="Browse ALFA Restaurant's veg and non-veg menu -- fire-grilled kebabs, curries, biryanis and more."
        />
      </Head>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="font-display text-4xl md:text-6xl text-bone tracking-tightish">
            Our <span className="text-gold">Menu</span>
          </h1>
          <div className="gold-rule w-16 mx-auto mt-4 rounded-full" />
          <p className="text-bone/60 mt-5">
            Pick a category to see what's cooking. Photos are
            placeholders you can swap in anytime.
          </p>
        </div>

        {/* Veg / Non-Veg toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-char border border-white/10 rounded-full p-1.5 shadow-pop">
            <button
              onClick={() => setTab("veg")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-display text-sm tracking-wide transition-colors ${
                tab === "veg" ? "bg-gold-sheen text-ink shadow-popGold" : "text-bone/70 hover:text-bone"
              }`}
            >
              <FaLeaf /> Veg
            </button>
            <button
              onClick={() => setTab("nonveg")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-display text-sm tracking-wide transition-colors ${
                tab === "nonveg" ? "bg-gold-sheen text-ink shadow-popGold" : "text-bone/70 hover:text-bone"
              }`}
            >
              <FaDrumstickBite /> Non-Veg
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
