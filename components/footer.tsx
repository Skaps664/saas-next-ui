"use client";
import { Link } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

export const Footer = () => {
  return (
    <footer className="w-full py-8 px-8 bg-transparent">
      {/* Divider */}
      <div className="container mx-auto mt-8 border-t border-default-200"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src="/editur_logo.png" alt="Editur Logo" className="w-8 h-8" />
          <p className="font-bold text-lg">Editur.ai</p>
        </div>

        {/* Footer Links Section */}
        <div className="flex gap-6 text-base ">
          <Link href="/pricing" className="hover:text-primary">
            Pricing
          </Link>
          <Link href="/features" className="hover:text-primary">
            Features
          </Link>
          <Link href="/about-us" className="hover:text-primary">
            About Us
          </Link>
          <Link href="/support" className="hover:text-primary">
            Support
          </Link>
          <Link href="/terms-of-service" className="hover:text-primary">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="hover:text-primary">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-default-500 mt-6">
        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} Editur.ai. All rights reserved.</p>

        {/* Call to Action */}
      </div>
    </footer>
  );
};

export default Footer;
