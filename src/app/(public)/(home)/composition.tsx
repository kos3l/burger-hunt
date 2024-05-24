function HomeComposition() {
  return (
    <main className="z-20 flex grow flex-col items-start justify-center gap-4 p-8">
      <div className="h-[40rem] w-[30rem] rounded-md bg-stone-100 p-4">
        <div className="size-24 rounded-md bg-stone-400" />
        <p className="pt-8 font-sans text-2xl font-bold text-stone-800">
          Search for burgers!
        </p>
      </div>
    </main>
  );
}

export { HomeComposition };
