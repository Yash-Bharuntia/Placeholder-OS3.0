import FAQPage from "./faq/page";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import PrizesPage from "./prizes/page";

export default function Home() {
  return (
    <main className="p-8 text-center">
      <AboutPage/>
      <PrizesPage/>
      <ContactPage/>
      <FAQPage/>
    </main>
  )
}
