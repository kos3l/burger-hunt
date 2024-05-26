function NavigationButton({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={() => onClick()}
      type="button"
      className="flex h-7 w-28 items-center justify-center rounded-sm bg-stone-400 text-sm font-medium"
    >
      {title}
    </button>
  );
}
export { NavigationButton };
