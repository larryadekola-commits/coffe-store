import coffeeLogo from "../assets/coffee logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#2E1F16] px-5 py-10 text-[#F5EDE2] md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex  items-center gap-3">
              <img
                src={coffeeLogo}
                alt="Coffee logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Brew & Bloom</h3>
                <p className="text-sm text-[#D9B38C]">Coffee House</p>
              </div>
            </div>
            <p className="max-w-xs text-sm text-[#F5EDE2]/80">
              Thoughtfully roasted beans, slow-brewed coffee, and warm
              hospitality in every cup.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm text-[#F5EDE2]/80">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Loyalty
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Visit</h4>
            <ul className="space-y-2 text-sm text-[#F5EDE2]/80">
              <li>24 Oak Street</li>
              <li>Downtown Café</li>
              <li>Open Daily</li>
              <li>7:00 AM - 9:00 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Follow</h4>
            <div className="flex gap-3 text-xl text-[#D9B38C]">
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="X" className="hover:text-white">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#F5EDE2]/20 pt-5 text-center text-sm text-[#F5EDE2]/70">
          © 2026 Brew & Bloom. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
