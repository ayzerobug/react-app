function ProfileCard({ name, role, bio, avatarClass, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm">
      <div className={"w-16 h-16 rounded-full mb-4 " + avatarClass} />
      <h2 className="text-xl font-bold text-slate-900">{name}</h2>
      <p className="text-cyan-500 font-medium text-sm">{role}</p>
      <p className="text-slate-600 mt-3 leading-relaxed">{bio}</p>
      {children}
    </div>
  );
}

export default ProfileCard;
