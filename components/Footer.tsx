export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#020617] bg-[#020617]">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-gray-400">
          © {currentYear} Danish Samsudin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
