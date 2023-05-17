import './globals.css' ;


import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata = {

  title: 'Meem ',
  description: 'Trade your goods and services with others in your community with ease."',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
