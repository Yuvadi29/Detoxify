

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Detoxify</h1>
        <p className="mt-4 text-gray-700">
          Detoxify your YouTube feed by selecting topics of interest.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
}
