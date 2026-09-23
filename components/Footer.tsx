import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/brand/logo.jpg"
              alt="Invorious"
              width={28}
              height={28}
              className="h-7 w-7 rounded-full"
            />
            <p className="font-display text-lg font-semibold text-ink">invorious</p>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink/60">
            Custom software, technology consulting and Web3 development, built in Sydney.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="text-xs font-medium text-brand-violet">Site</p>
            <ul className="mt-3 space-y-2 text-ink/70">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium text-brand-violet">Contact</p>
            <ul className="mt-3 space-y-2 text-ink/70">
              <li><a href="tel:0426576625">0426 576 625</a></li>
              <li><a href="mailto:hello@invorious.com">hello@invorious.com</a></li>
              <li>Sydney, NSW, Australia</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-line pt-6 text-xs text-ink/50">
        © {new Date().getFullYear()} Invorious Software Agency. All rights reserved.
      </div>
    </footer>
  );
}
