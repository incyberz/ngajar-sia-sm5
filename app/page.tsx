import FavoritColor from "./components/favoritColor";
import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./insho-styles.css";

export default function CVOnline() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      {/* <FavoritColor /> */}
    </section>
  );
}
