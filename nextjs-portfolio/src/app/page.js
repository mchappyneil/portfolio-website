// src/app/page.js
export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Neil Mehta</h1>
      <p className="text-xl mb-6">Software Engineer / Photographer </p>
      <img
        src="/images/profile.jpg" // static image stored in public/images
        alt="Profile"
        className="w-48 h-48 rounded-full object-cover mb-4 hover:scale-105 transition-transform"
      />
    </section>
  );
}
