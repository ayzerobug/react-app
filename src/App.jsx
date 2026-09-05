import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div>
      {/* <div className="bg-slate-900  text-white min-h-screen flex flex-row gap-20 items-center justify-center">
        <h1 className="text-white font-bold text-4xl">
          Hello React + Tailwind 🚀
        </h1>
        <Card name="Ayomide" role="Backend Engineer" />
        <Card name="Francis" role="Musician" />
        <Card name="Christopher" role="Project Manager" />
        <Card name="Dave" role="Fullstack Developer" />
        <Introduction />
        <div />
      </div> */}
      <div className="min-h-screen bg-slate-100 p-10 flex gap-6 flex-wrap">
        <ProfileCard
          name="Ayomide"
          role="Full-Stack Developer"
          bio="Building products for everyday Nigerians."
          avatarClass="bg-blue-500"
        >
          <div className="bg-gray-300 p-2 mt-4 rounded-lg">
            <p className="text-xs">Labore pariatur ea labore exercitation.</p>
          </div>
        </ProfileCard>
        <ProfileCard
          name="Temi"
          role="UI Designer"
          bio="Crafting beautiful interfaces that just work."
          avatarClass="bg-green-500"
        />
        <ProfileCard
          name="Seun"
          role="Product Manager"
          bio="Turning user problems into product solutions."
          avatarClass="bg-red-500"
        />
      </div>
    </div>
  );
}

export default App;
