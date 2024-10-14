import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
  return (
    <div className="container mx-auto p-2 text-center">
      <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat Pendidikan</h2>
      </div>
      <RowRiwayat jenjang="SD" sekolah="SDN 1 Tjs" tahun="1999" />
      <RowRiwayat jenjang="SLTP" sekolah="SLTPN 1 Tjs" tahun="2002" />
      <RowRiwayat jenjang="SMA" sekolah="SMAN 1 Tjs" tahun="2005" />
      <RowRiwayat jenjang="Sarjana" sekolah="Masoem Univ" tahun="2008" />
      <RowRiwayat jenjang="Magister" sekolah="STMIK LIKMI" tahun="2017" />
      <RowRiwayat jenjang="Doktor" sekolah="ITB" tahun="2035" />
    </div>
  );
}
