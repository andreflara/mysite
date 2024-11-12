"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="font-mono flex h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col gap-8">
        <div className=" items-center justify-between rounded-lg">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-foreground transition duration-300 ease-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-building-skyscraper h-4 w-4"
            >
              <path d="M3 21l18 0"></path>
              <path d="M5 21v-14l8 -4v18"></path>
              <path d="M19 21v-10l-6 -4"></path>
              <path d="M9 9l0 .01"></path>
              <path d="M9 12l0 .01"></path>
              <path d="M9 15l0 .01"></path>
              <path d="M9 18l0 .01"></path>
            </svg>
            <span>cwb, pr</span>
          </button>
        </div>

        <header className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight">Andre Fernando</h1>
          <p className="text-lg text-muted-foreground">
            Aprendendo Desenvolvimento Web
          </p>
        </header>

        <nav>
          <h2 className="mb-6 text-lg font-medium uppercase tracking-wider text-muted-foreground">
            Menu
          </h2>
          <div className="space-y-1">
            <div>
              <Link
                href="#"
                className="group flex items-center justify-between rounded-lg px-4 py-2 transition-colors hover:bg-muted"
              >
                <span className="font-medium text-muted-foreground">Sobre</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-chevron-right h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="group flex items-center justify-between rounded-lg px-4 py-2 transition-colors hover:bg-muted"
              >
                <span className="font-medium text-muted-foreground">
                  Projetos
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-chevron-right h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </Link>
              <Link
                href="/docs"
                className="group flex items-center justify-between rounded-lg px-4 py-2 transition-colors hover:bg-muted"
              >
                <span className="font-medium text-muted-foreground">Notes</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-chevron-right h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </Link>
            </div>
          </div>
        </nav>

        <h2 className="text-lg uppercase tracking-wider text-muted-foreground">
          Outros Links
        </h2>
        <div className="px-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://suporteunimed.vercel.app/"
          >
            <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 flex gap-2 w-full">
              Suporte Unimed
            </button>
          </a>
        </div>

        <footer className=" items-center border-t pt-4">
          <div className="flex justify-center w-full">
             {/* {Instagram} */}
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/oandrezito"
            >
              <button
                className="gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex items-center justify-center"
                title="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-instagram "
                >
                  <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  <path d="M16.5 7.5v.01"></path>
                </svg>
              </button>
            </a> */}
             {/* {Twitch} */}
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitch.tv/oandrezito"
            >
              <button
                className="gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex items-center justify-center"
                title="Twitch"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-twitch "
                >
                  <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z"></path>
                  <path d="M16 8l0 4"></path>
                  <path d="M12 8l0 4"></path>
                </svg>
              </button>
            </a> */}
             {/* {Twitter} */}
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ooandrezito"
            >
              <button
                className="gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex items-center justify-center"
                title="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-x "
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
              </button>
            </a> */}
             {/* {Youtube} */}
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtube.com/@oandrezito"
            >
              <button
                className="gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex items-center justify-center"
                title="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-youtube "
                >
                  <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
                  <path d="M10 9l5 3l-5 3z"></path>
                </svg>
              </button>
            </a> */}
             {/* {Threads} */}
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://threads.net/@oandrezito"
            >
              <button
                className="gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex items-center justify-center"
                title="Threads"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-threads "
                >
                  <path d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"></path>
                </svg>
              </button>
            </a> */}
             {/* {GitHub} */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/oandrezito"
            >
              <button
                className="gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex items-center justify-center"
                title="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-github "
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </button>
            </a>
             {/* {Linkedin} */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/andrefernando"
            >
              <button
                className="gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex items-center justify-center"
                title="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-linkedin "
                >
                  <path d="M8 11v5"></path>
                  <path d="M8 8v.01"></path>
                  <path d="M12 16v-5"></path>
                  <path d="M16 16v-3a2 2 0 1 0 -4 0"></path>
                  <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                </svg>
              </button>
            </a>
            {/* {discord} */}
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/"
            >
              <button
                className="gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex items-center justify-center"
                title="Discord"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-discord "
                >
                  <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                  <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                  <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
                  <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                </svg>
              </button>
            </a> */}
          </div>
        </footer>
      </div>
    </main>
  );
}
