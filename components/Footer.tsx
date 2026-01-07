
import React from 'react';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import { ARTIST_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5F1ED] py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-serif mb-2 tracking-widest">BETIA</h2>
            <p className="text-sm opacity-60 tracking-wider">Singer Songwriter & Artistic Director</p>
          </div>
          
          <div className="flex space-x-6">
            <a href={ARTIST_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#B8976A] transition-colors"><Facebook size={20} /></a>
            <a href={ARTIST_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#B8976A] transition-colors"><Instagram size={20} /></a>
            <a href={ARTIST_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#B8976A] transition-colors"><Youtube size={20} /></a>
            <a href={`mailto:${ARTIST_INFO.email}`} className="hover:text-[#B8976A] transition-colors"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs opacity-40 tracking-widest">
          &copy; {new Date().getFullYear()} BETIA MUSIC. TOUS DROITS RÉSERVÉS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
