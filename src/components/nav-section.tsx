import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Navegacao() {
  return (
    <div
      className="mb-12 w-full flex items-center justify-between text-gray-400"
      title="Go Back"
    >
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 hover:text-primary p-2"
      >
        <div className="flex gap-2 items-center transition-transform">
        <Link href="/" className="text-lg">
          <FontAwesomeIcon
            className="h-4 w-4  transition-transform group-hover:translate-x-1"
            icon={faChevronLeft}
          />
          Voltar</Link>
        </div>
      </button>
      <nav>
        <div className="hidden lg:flex gap-6">
          <Link
            className="text-lg uppercase tracking-wider text-gray-400"
            href="/"
          >
            Menu
          </Link>
        </div>
      </nav>
    </div>
  );
}
