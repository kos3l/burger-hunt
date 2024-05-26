function Footer() {
  return (
    <footer className="z-20 flex h-44 w-full flex-col justify-center gap-4 bg-stone-900 p-8 pb-1 text-stone-100">
      <p className="text-[2rem] lg:text-[3rem]">Burger hunt</p>
      <div className="flex h-6 w-full justify-start gap-6 text-xs sm:text-sm lg:justify-end">
        <p>Cookies</p>
        <p>Legal Terms</p>
        <p>Priavy Policy</p>
      </div>
    </footer>
  );
}
export { Footer };
