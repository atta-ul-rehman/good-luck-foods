
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-4">
          {/* Brand Info */}
          <div className="space-y-6 md:col-span-3">
            <Link to="/" className="flex items-center">
              <img src="/assets/logo_footer.png" alt="Good Luck Foods" className="h-20 md:h-32 w-auto object-cover" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium B2B wholesale distribution of quality food and grocery products. Serving the hospitality and retail industry since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/good-luck-foods" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
         

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500">📍</span>
                <span>Unit 5, Viva Centre, Coverdale Cres,<br />Manchester M12 4AP</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-emerald-500">📞</span>
                <span>+44 161 273 1399<br />+44 745 937 9180</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-emerald-500">✉️</span>
                <span>sales@goodluckfoods.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-2 text-sm w-[200px]">
              <li className="flex justify-between"><span>Mon - Sat</span><span className="text-emerald-400">9 am – 7 pm</span></li>
              <li className="flex justify-between"><span>Sun</span><span className="text-emerald-400">10:30 am – 4 pm</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© 2026 Good Luck Foods Ltd. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/wholesale-agreement" className="hover:text-white transition-colors">Wholesale Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
