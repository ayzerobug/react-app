import BrandName from "./BrandName";

function Introduction() {
  return (
    <div className="text-white text-center space-y-2 mt-10 max-w-2xl">
      <BrandName />
      <h1>This is our first react project</h1>
      <p>
        We installed Node JS, and created a vite-react project, and installed
        tailwind as a dependency
      </p>
    </div>
  );
}

export default Introduction;
