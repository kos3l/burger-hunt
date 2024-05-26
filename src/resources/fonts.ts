import localFont from 'next/font/local';

const RobotoMono = localFont({
  src: '../../public/fonts/RobotoMono-VariableFont_wght.ttf',
  variable: '--font-roboto-mono',
  preload: false,
});
const Rubik = localFont({
  src: '../../public/fonts/Rubik-VariableFont_wght.ttf',
  variable: '--font-rubik',
  preload: false,
});

export { RobotoMono, Rubik };
