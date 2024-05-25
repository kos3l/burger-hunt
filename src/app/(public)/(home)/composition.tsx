function HomeComposition() {
  return (
    <main className="z-20 flex grow gap-12 p-8">
      <div className="sticky top-8 flex h-[60rem] w-[45rem] rounded-md bg-stone-100 p-4">
        <div className="size-24 rounded-md bg-stone-400" />
        <p className="pt-8 font-sans text-2xl font-bold text-stone-800">
          Search for burgers!
        </p>
      </div>
      <div className="grid h-full grow grid-cols-3 gap-8">
        <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
        <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
        <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
        <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
        <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
        <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
        <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
        <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
        <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
        <div className="col-span-1 h-[30rem] rounded-md bg-stone-100" />
      </div>
    </main>
  );
}

export { HomeComposition };
