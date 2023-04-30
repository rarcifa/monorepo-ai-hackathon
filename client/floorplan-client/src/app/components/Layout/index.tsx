import { Footer } from 'app/components/Footer';
import { Navbar } from 'app/components/Navbar';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Layout({ children }: Props): JSX.Element {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
