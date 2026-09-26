import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import { heroSlides, vegItems, nonVegItems } from "@/data/menuData";
import { GiChefToque, GiFarmTractor, GiFireBowl } from "react-icons/gi";
import { FaAward } from "react-icons/fa";

const points = [
  {
    icon: GiFireBowl,
    title: "Fire-Grilled Signatures",
    text: "Every kebab and tikka is finished over an open flame for real smoky depth.",
  },
  {
    icon: GiFarmTractor,
    title: "Fresh, Daily Ingredients",
    text: "We source produce and meat fresh each morning -- nothing sits in the freezer.",
  },
  {
    icon: GiChefToque,
    title: "Recipes Passed Down",
    text: "Family recipes refined over the years, balancing spice, richness and heat.",
  },
  {
    icon: FaAward,
    title: "A Table for Every Occasion",
    text: "From quick lunches to family celebrations, we set the table for all of it.",
  },
];

const spotlight = [vegItems[0], nonVegItems[0], vegItems[4], nonVegItems[4]];

export default function Home() {
  return (
    <>
      <Head>
        <title>ALFA Restaurant | Fire-Grilled Flavor, Served Fresh</title>
        <meta
          name="description"
          content="ALFA Restaurant -- fire-grilled kebabs, slow-cooked curries and biryanis made fresh daily. Veg and non-veg menus, dine-in and reservations."
        />
      </Head>

      <ImageSlider slides={heroSlides} />

      {/* Irani Dum Chai & Coffee World */}
<section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-stretch">

    {/* Image */}
<div className="relative w-full h-full min-h-0 flex justify-center">
  <Image
    src="/iran chai img.jpeg"
    alt="ALFA Restaurant Irani Dum Chai and Coffee"
    width={1200}
    height={1600}
    sizes="(max-width: 768px) 100vw, 50vw"
    className="absolute inset-0 w-full h-full object-contain block"
  />
</div>

    {/* Matter */}
    <div className="flex flex-col justify-center">
      <h2 className="font-display text-3xl md:text-5xl text-bone tracking-tightish mb-5">
        Irani Dum Chai &{" "}
        <span className="text-gold">Coffee World</span>
      </h2>

      <div className="gold-rule w-16 mt-4 mb-6 rounded-full" />

      <p className="text-bone/70 leading-relaxed mb-5">
        At ALFA Restaurant, your meal does not have to end with the last
        bite. Step into our Irani Dum Chai and Coffee World, where rich
        aromas, creamy textures and comforting flavours create the
        perfect way to slow down and enjoy the moment.
      </p>

      <p className="text-bone/70 leading-relaxed mb-5">
        Our Irani Dum Chai is brewed with care to create a beautifully
        balanced cup with a rich, creamy taste and a comforting aroma.
        Served hot and full of character, it is perfect for relaxing
        after a delicious meal or enjoying with friends and family.
      </p>

      <p className="text-bone/70 leading-relaxed mb-5">
        Alongside our chai, Coffee World brings together refreshing and
        aromatic coffee choices for every coffee lover. Whether you
        prefer a strong cup to start your day or a relaxing drink after
        dinner, there is always something worth sipping.
      </p>

      <p className="text-bone/70 leading-relaxed">
        From the first sip to the final conversation, our goal is simple:
        create a warm café experience that keeps you coming back for
        another cup.
      </p>
    </div>

  </div>
</section>

      {/* Points / highlights */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-5xl text-bone tracking-tightish">
            Why guests keep coming back
          </h2>

          <div className="gold-rule w-16 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="card-3d rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold-sheen flex items-center justify-center shadow-popGold">
                <p.icon size={26} className="text-ink" />
              </div>

              <h3 className="font-display text-lg text-bone tracking-tightish mb-2">
                {p.title}
              </h3>

              <p className="text-bone/60 text-sm leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Spotlight dishes */}
      <section className="bg-char py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-5xl text-bone tracking-tightish">
                From the menu
              </h2>

              <p className="text-bone/60 mt-2">
                A quick taste of what's cooking, veg and non-veg alike.
              </p>
            </div>

            <Link
              href="/menu"
              className="btn-outline rounded-md px-5 py-2.5 font-display text-sm tracking-wide self-start"
            >
              View Full Menu
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spotlight.map((item) => (
              <div
                key={item.id}
                className="card-3d rounded-2xl overflow-hidden flex flex-col h-full"
              >
                {/* Same Image Size for Every Card */}
                <div className="relative w-full h-[240px] sm:h-[260px] lg:h-[280px] flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Same Name + Price Alignment */}
                <div className="p-4 h-[100px] flex flex-col justify-between">
                  <h3 className="font-display text-base text-bone tracking-tightish leading-tight">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-bone tracking-tightish mb-4">
          Hungry already?
        </h2>

        <p className="text-bone/60 max-w-xl mx-auto mb-8">
          Book your table now and let us handle the rest -- fresh food, fast
          service, warm welcome.
        </p>

        <Link
          href="/contact"
          className="btn-gold inline-block px-8 py-3.5 rounded-md font-display text-base tracking-wide"
        >
          Reserve a Table
        </Link>
      </section>
    </>
  );
}