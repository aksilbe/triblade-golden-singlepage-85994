const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">TRIBLADE</span>
              <span className="text-sm text-gold">CONSTRUCTION INC.</span>
            </div>
            <p className="text-primary-foreground/80">
              Building excellence with quality concrete and construction services since 2007.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gold">Contact Info</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Phone: (403) 986-2206</li>
              <li>Email: info@triblade.com</li>
              <li>Address: 44 Haliburton Crescent, Red Deer, AB</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Triblade Construction Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
