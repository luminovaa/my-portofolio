import backgroundImage from '../assets/wass.svg'; // Sesuaikan path dan nama file

export default function Home() {
  return (
    <div className=" min-h-screen">
      <img
        src={backgroundImage}
        alt="Background"
      />
      <div className="relative z-10">
        <h1 className="font-extrabold font-baloo text-3xl">Hello, Everyone</h1>
      </div>
    </div>
  );
}