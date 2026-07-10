const team = ["Creative Director", "Graphic Designer", "3D Artist", "Discord Developer", "Web Developer"];

export function TeamSection() {
  return (
    <section className="py-24">
      <div className="container-x">
        <h2 className="mb-10 text-4xl font-black md:text-6xl">فريق الاستوديو</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((role, index) => (
            <div key={role} className="group glass rounded-lg p-5 text-center">
              <div className="mx-auto mb-5 grid aspect-square w-24 place-items-center rounded-lg bg-gradient-to-br from-zinc-800 via-black to-red-950 text-3xl font-black metal-text">P{index + 1}</div>
              <h3 className="font-black">{role}</h3>
              <p className="mt-3 text-sm leading-6 text-white/0 transition group-hover:text-white/55">شخصية تجريبية غير حقيقية مخصصة للعرض.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
