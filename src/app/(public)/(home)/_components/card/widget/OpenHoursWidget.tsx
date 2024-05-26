function OpenHoursWidget({ variant }: { variant: 'open' | 'closed' }) {
  let text;
  let textColor;
  let tagColor;

  switch (variant) {
    case 'open':
      text = 'OPEN';
      textColor = 'text-stone-900';
      tagColor = 'text-stone-300';
      break;
    case 'closed':
      text = 'CLOSED';
      textColor = 'text-stone-900';
      tagColor = 'text-stone-300';
      break;
    default:
      text = 'CLOSED';
      textColor = 'text-stone-900';
      tagColor = 'text-stone-300';
  }

  return (
    <div
      className={`${tagColor} absolute left-8 top-8 z-10 flex h-8 w-24 items-center justify-center rounded-sm bg-stone-400`}
    >
      <p className={`${textColor} text-sm font-semibold`}>{text}</p>
    </div>
  );
}

export { OpenHoursWidget };
