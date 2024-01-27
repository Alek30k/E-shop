import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3>Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptos</Link>
            <Link href="#">Deskptos</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accesorios</Link>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
