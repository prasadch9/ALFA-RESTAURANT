import Head from "next/head";
import Image from "next/image";
import { FaLeaf, FaFire, FaHandsHelping, FaStar } from "react-icons/fa";

const values = [
  {
    icon: FaFire,
    title: "Bold Flavor",
    text: "Spice blends and marinades built to leave an impression, not just fill a plate.",
  },
  {
    icon: FaLeaf,
    title: "Fresh Sourcing",
    text: "Vegetables, meat and dairy sourced daily from trusted local suppliers.",
  },
  {
    icon: FaHandsHelping,
    title: "Warm Hospitality",
    text: "Every guest is treated like family, from the first hello to the last bite.",
  },
  {
    icon: FaStar,
    title: "Consistent Quality",
    text: "The same care and standard in every dish, every single day.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | ALFA Restaurant</title>
        <meta
          name="description"
          content="Learn the story behind ALFA Restaurant -- our kitchen, our values, and what keeps guests coming back."
        />
      </Head>

      {/* Hero band */}
      <section className="relative py-20 md:py-28 bg-char overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/logo.jpg" alt="" fill className="object-cover" />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-bone tracking-tightish">
            Our <span className="text-gold">Story</span>
          </h1>

          <div className="gold-rule w-16 mx-auto mt-5 rounded-full" />
        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden card-3d">
          <Image
            src="https://picsum.photos/seed/alfa-about-kitchen/800/900"
            alt="ALFA Restaurant kitchen"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl md:text-4xl text-bone tracking-tightish mb-5">
            Built around the flame
          </h2>

          <p className="text-bone/70 leading-relaxed mb-4">
            ALFA Restaurant started with a simple idea: cook the food we grew
            up loving, and cook it properly. That means marinated meats
            resting overnight, spice blends ground fresh, and everything
            finished on an open flame the way it's meant to be.
          </p>

          <p className="text-bone/70 leading-relaxed mb-4">
            Today, our kitchen serves both hearty non-veg classics and
            carefully built vegetarian dishes, so every table -- however
            different everyone's taste -- finds something worth coming back
            for.
          </p>

          <p className="text-bone/70 leading-relaxed">
            Replace this text and the photo alongside it with your own
            restaurant's story, founding year, and photos whenever you're
            ready.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-char py-16 md:py-24 notch-t notch-b">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          {/* ONLY CHANGE: relative z-10 */}
          <div className="relative z-10 text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-5xl text-bone tracking-tightish">
              What we stand for
            </h2>

            <div className="gold-rule w-16 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="card-3d rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold-sheen flex items-center justify-center shadow-popGold">
                  <v.icon size={22} className="text-ink" />
                </div>

                <h3 className="font-display text-lg text-bone tracking-tightish mb-2">
                  {v.title}
                </h3>

                <p className="text-bone/60 text-sm leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "10+", l: "Years Serving" },
            { n: "40+", l: "Signature Dishes" },
            { n: "5", l: "Days a Week" },
            { n: "1000+", l: "Happy Guests" },
          ].map((s) => (
            <div key={s.l} className="card-3d rounded-2xl py-8 px-4">
              <div className="font-display text-3xl md:text-4xl text-gold">
                {s.n}
              </div>

              <div className="text-bone/60 text-sm mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}