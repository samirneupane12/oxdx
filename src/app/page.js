import Landingpage from "./Landing/landingpage";
import Hearder from "./component/hearder";
import Footer from "./component/footer";
export default function Home() {
  return (
    <>
      <header>
        <Hearder />
      </header>
      <main style={{ minWidth: "100vh" }}>
        <Landingpage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
