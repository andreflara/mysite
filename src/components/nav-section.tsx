import { ChevronLeft, MenuIcon } from "lucide-react";
import Link from "next/link";

export default function Navegacao() {
  return (
    <div className="mb-12 w-full flex items-center justify-between text-gray-400">
      <button
        title="Voltar"
        type="button"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium "
      >
        <Link href="/" className="flex gap-1 items-center transition-transform">
          <ChevronLeft />
          <div className="text-lg">Voltar</div>
        </Link>
      </button>
      <nav>
        <Link href="/" title="Menu" className="hidden lg:flex gap-1">
          <div className="text-lg uppercase tracking-wider text-gray-400">
            Menu
          </div>
          <MenuIcon />
        </Link>
      </nav>
    </div>
  );
}
