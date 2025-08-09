// components/Footer.jsx
import {
  AcademicCapIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline"; // Example icons if you need them
import {
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@heroicons/react/24/solid"; // Replace with proper heroicons SVG import paths

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top panel */}
      <div className="bg-[#FDF7F6] rounded-t-2xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Logo + address + socials */}
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-extrabold text-[#EB401E]">HSEDU</h2>

              <address className="not-italic mt-5 text-sm leading-6 text-[#47506a]">
                101 Frederick St,<br />
                Kitchener, ON<br />
                N2H 6R3
              </address>

              {/* Socials */}
              <div className="mt-5 flex items-center gap-4">
                <a href="#" aria-label="LinkedIn" className="text-[#5b6275] hover:text-[#2a2f3e]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v1.98h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.69-2.5 3.44V23h-4V8.5z" />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className="text-[#5b6275] hover:text-[#2a2f3e]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.06 5.66 21.2 10.44 22v-7.02H7.9v-2.92h2.54V9.41c0-2.5 1.5-3.88 3.79-3.88 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.79l-.45 2.92h-2.34V22C18.34 21.2 22 17.06 22 12.06z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-[#5b6275] hover:text-[#2a2f3e]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm6.25-3.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18.25 6z" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="text-[#5b6275] hover:text-[#2a2f3e]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.8-1.7-.8-2.1-.9C17.4 2.7 12 2.7 12 2.7h-.1s-5.4 0-8.6.3c-.5 0-1.3 0-2.1.9C.7 4.6.5 6.2.5 6.2S0 8 0 9.8v1.9c0 1.9.5 3.7.5 3.7s.2 1.6.8 2.3c.8.8 1.9.8 2.4.9 1.8.2 7.4.3 7.4.3s5.4 0 8.6-.3c.5 0 1.3 0 2.1-.9.6-.6.8-2.3.8-2.3s.5-1.8.5-3.7v-1.9c0-1.8-.5-3.6-.5-3.6zM9.8 14.5v-5l5.4 2.5-5.4 2.5z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                <NavGroup title="Students" links={["Recruitment Partners", "Institutions", "Find Programs & Institutions", "360 Solutions"]} />
                <NavGroup title="Destinations" links={["Australia", "Canada", "Germany", "Ireland", "United Kingdom", "United States"]} />
                <NavGroup title="About" links={["Our Story", "Careers", "Press and Media", "Contact"]} />
                <NavGroup title="Resources" links={["Blog", "Webinar", "ApplyInsights"]} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-[#F9E1DF]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[#2a2f3e] text-sm">© 2025 HSEDU Inc</p>
            <div className="flex items-center gap-6 text-[#184FCB] text-sm">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NavGroup({ title, links }) {
  return (
    <nav>
      <h4 className="text-[#2a2f3e] font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2 text-[#47506a]">
        {links.map((label) => (
          <li key={label}>
            <a href="#" className="hover:text-[#2a2f3e] transition">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
