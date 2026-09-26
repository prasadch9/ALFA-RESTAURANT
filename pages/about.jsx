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
      <section className="relative bg-char overflow-hidden">
        <div className="relative w-full">
          <Image
            src="/about cover.jpg"
            alt=""
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-auto block opacity-10"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-char/40" />

          {/* Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
              <h1 className="font-display text-4xl md:text-6xl text-bone tracking-tightish">
                Our <span className="text-gold">Story</span>
              </h1>

              <div className="gold-rule w-16 mx-auto mt-5 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden card-3d">
          <Image
            src="/flam.jpg"
            alt="ALFA Restaurant kitchen"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl md:text-4xl text-bone tracking-tightish mb-5">
            Built around <span className="text-gold">The Flame</span>
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
        </div>
      </section>

      {/* Additional Food Section */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-display text-3xl md:text-4xl text-bone tracking-tightish mb-5">
            Our Food, <span className="text-gold">Our Craft</span>
          </h2>

          <p className="text-bone/70 leading-relaxed mb-4">
            Every dish at ALFA is prepared with attention to flavour, texture,
            and presentation. From rich biryanis and sizzling starters to
            comforting vegetarian favourites, our menu brings together the
            flavours our guests love.
          </p>

          <p className="text-bone/70 leading-relaxed">
            Fresh ingredients, carefully selected spices, and traditional
            cooking techniques come together to create food that feels familiar
            while still giving every meal its own special character.
          </p>
        </div>

        <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden card-3d order-1 md:order-2">
          <Image
            src="/for about.png"
            alt="ALFA Restaurant food"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="bg-char py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

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

      {/* Additional Hospitality Section */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden card-3d">
          <Image
            src="/peoples dinning.jpg"
            alt="ALFA Restaurant dining experience"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl md:text-4xl text-bone tracking-tightish mb-5">
            Made for <span className="text-gold">Every Table</span>
          </h2>

          <p className="text-bone/70 leading-relaxed mb-4">
            A great restaurant is more than just the food. It is the
            conversations, celebrations, family moments, and memories created
            around the table.
          </p>

          <p className="text-bone/70 leading-relaxed">
            At ALFA, we want every guest to feel comfortable, welcomed, and
            cared for. Whether you are joining us for a quick meal or a special
            celebration, our goal is to make every visit feel worth remembering.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "10+", l: "Years Serving" },
            { n: "40+", l: "Signature Dishes" },
            { n: "7", l: "Days a Week" },
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