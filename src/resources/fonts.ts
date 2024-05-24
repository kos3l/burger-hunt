import localFont from 'next/font/local';

const RobotoMono = localFont({
  src: '../../public/fonts/RobotoMono-VariableFont_wght.ttf',
  variable: '--font-roboto-mono',
});
const Rubik = localFont({
  src: '../../public/fonts/Rubik-VariableFont_wght.ttf',
  variable: '--font-rubik',
});

export { RobotoMono, Rubik };
