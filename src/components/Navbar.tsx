"use client";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // CHANGED: Removed background, blur, and border classes for a fully transparent look
    <header className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-extrabold tracking-tighter">Forge</h1>
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>Canada, Montreal</span>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a onClick={() => scrollToSection('manufacture-section')} className="text-gray-700 hover:text-forge-blue transition-colors cursor-pointer">Manufacture</a>
        <a onClick={() => scrollToSection('tool-library-section')} className="text-gray-700 hover:text-forge-blue transition-colors cursor-pointer">Tool Library</a>
        <a onClick={() => scrollToSection('story-section')} className="text-gray-700 hover:text-forge-blue transition-colors cursor-pointer">Story</a>
      </nav>
      <div className="flex items-center gap-4 text-sm font-medium">
        <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-500/10 transition-colors">Get in touch</button>
        <span className="text-gray-500">Eng / $</span>
      </div>
    </header>
  );
};

export default Navbar;