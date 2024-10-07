import foto from "./foto.jpg";
import "./insho-styles.css";

function Profile() {
  return <img src={foto.src} alt="Iin Sholihin" className="fotoku" />;
}

export default function Gallery() {
  return (
    <section>
      <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-300 font-bold">CV Online</h1>
        <h2 className="text-3xl">Iin Sholihin</h2>
        <Profile />
        <p>
          Saya adalah seorang Web Developer, IT Trainer, dan juga Hobbies
          Farmer. Cita-cita saya ingin menjadi programmer internasional. Saya
          juga ingin masuk syurga tanpa hisab sekeluarga.
        </p>

        {/* Riwayat Pendidikan */}
        <div className="container mx-auto p-2 text-center pt-20">
          <h2 className="text-2xl">Riwayat Pendidikan</h2>
          <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
            <div className="container mx-auto ">
              <div className="grid grid-cols-12 gap-1">
                <div className="col-span-12 md:col-span-3 ">SD</div>
                <div className="col-span-12 md:col-span-3 ">
                  SDN 1 Tanjungsari
                </div>
                <div className="col-span-12 md:col-span-3 ">1999-2002</div>
              </div>
            </div>
          </div>
          <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
            <div className="container mx-auto ">
              <div className="grid grid-cols-12 gap-1">
                <div className="col-span-12 md:col-span-3 ">SLTP</div>
                <div className="col-span-12 md:col-span-3 ">
                  SLTPN 1 Tanjungsari
                </div>
                <div className="col-span-12 md:col-span-3 ">2002-2005</div>
              </div>
            </div>
          </div>
          <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
            <div className="container mx-auto ">
              <div className="grid grid-cols-12 gap-1">
                <div className="col-span-12 md:col-span-3 ">SMA (IPA)</div>
                <div className="col-span-12 md:col-span-3 ">
                  SMAN 1 Tanjungsari
                </div>
                <div className="col-span-12 md:col-span-3 ">2005-2008</div>
              </div>
            </div>
          </div>
          <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
            <div className="container mx-auto ">
              <div className="grid grid-cols-12 gap-1">
                <div className="col-span-12 md:col-span-3 ">
                  Prodi Sistem Informasi
                </div>
                <div className="col-span-12 md:col-span-3 ">
                  Masoem University
                </div>
                <div className="col-span-12 md:col-span-3 ">2008-2012</div>
              </div>
            </div>
          </div>
        </div>

        {/* end riwayat pendidikan */}
      </div>
    </section>
  );
}
