const name = "Ayomide";
const age = 10;

function Introduction() {
  return (
    <div className="text-2xl space-y-1 text-center">
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>Next year you will be {age + 1}.</p>
      <img
        src="avatar.jpg"
        className="size-16 rounded-full mx-auto"
        alt="profile"
      />
    </div>
  );
}

export default Introduction;
