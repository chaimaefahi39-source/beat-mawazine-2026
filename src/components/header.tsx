import { Link } from "react-router";

export const Header =() => {
  return (
    <>
    <nav className="flex items-center justify-between gap-10 px-10 h-20  text-white">
      <div className="flex items-center gap-33">
        <img src="src/assets/beat Mawazine.png" alt="Logo" className="h-10" />
      </div>

      <div className="flex items-center gap-8">
        <Link to="/" className="text-yellow-500 border-b-2  border-yellow-500 pb-1 cursor-pointer">Home</Link>
        <Link to="/Programme" className="hover:text-yellow-400 cursor-pointer transition-colors">Programme</Link>
        <Link to="/Planning" className="hover:text-yellow-400 cursor-pointer transition-colors">Planning</Link>
        <Link to="/Passport" className="hover:text-yellow-400 cursor-pointer transition-colors">Passeport</Link>
    </div>

      <div className="flex items-center">
        <div className="bg-[#236dcf] p-2 rounded-full cursor-pointer hover:bg-slate-700 transition-all">
          <img src="src/assets/Background+Border.svg" alt="Notification" className="w-6 h-6" />
        </div>
      </div>
    </nav>
    </>
  );
}