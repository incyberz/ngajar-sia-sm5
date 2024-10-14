export default function RowRiwayat(props: {
  jenjang: string;
  sekolah: string;
  tahun: string;
}) {
  return (
    <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-3 ">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-3 ">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-3 ">{props.tahun}</div>
        </div>
      </div>
    </div>
  );
}
