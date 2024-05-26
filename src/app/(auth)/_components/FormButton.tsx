function FormButton({
  text,
  onClick,
  disabled = false,
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      className="h-12 w-full rounded-sm bg-stone-400 text-lg font-semibold transition-all ease-in-out hover:bg-stone-900 hover:text-stone-100 active:scale-[0.99] disabled:opacity-50"
      type="button"
      disabled={disabled}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}

export { FormButton };
