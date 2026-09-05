function Card({ name, role }) {
  return (
    <div className="text-xl flex items-center gap-2">
      <img
        src="avatar.jpg"
        className="size-12 rounded-full mx-auto"
        alt="profile"
      />
      <div>
        <h2>{name}</h2>
        <p className="text-sm text-slate-400">{role}</p>
      </div>
    </div>
  );
}

export default Card;
