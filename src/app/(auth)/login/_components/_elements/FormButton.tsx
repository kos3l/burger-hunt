function FormButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      className="h-12 w-full rounded-sm bg-stone-400 text-lg font-semibold transition-all ease-in-out hover:bg-stone-900 hover:text-stone-100 active:scale-[0.99]"
      type="button"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}

export { FormButton };
