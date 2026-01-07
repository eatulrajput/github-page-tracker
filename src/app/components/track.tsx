"use client";

import { useState } from "react";
import { getPagesRepos, GitHubPagesRepo } from "@/app/lib/github";
import { Container } from "./Container";
import { IconBrandGithub } from "@tabler/icons-react";

export default function Track() {
  const [username, setUsername] = useState<string>("");
  const [pages, setPages] = useState<GitHubPagesRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!username) return;
    setLoading(true);
    const repos = await getPagesRepos(username);
    setPages(repos);
    setLoading(false);
  };

  return (
    <Container>
      <div className="bg-neutral-50 dark:bg-neutral-950/60 backdrop-blur-2xl h-full border border-neutral-100 dark:border-neutral-900 rounded-xl shadow-md w-full max-w-4xl mx-auto p-4 flex flex-col items-center justify-between transition ease-in-out duration-300">
        <div className="flex justify-around text-center text-blue-400 text-4xl">
          <IconBrandGithub className="size-10" />
          <h1 className=" font-medium text-blue-400 dark:text-white">
            GitHub Pages Tracker
          </h1>
        </div>

        <div className="mt-10 flex items-center justify-evenly w-full max-w-2xl gap-4">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="placeholder:text-neutral-400 text-black  dark:placeholder:text-blue-300/40 dark:text-blue-400 focus:outline-none focus:ring-2 flex-1 focus:ring-blue-400 dark:focus:ring-blue-600 p-2 rounded-lg"
          />
          <button
            onClick={handleSearch}
            className="transition ease-in-out duration-300 rounded-lg px-4 py-2 bg-blue-400 hover:bg-blue-600  dark:bg-blue-950 text-white dark:text-neutral-50/30 dark:hover:text-neutral-50 focus:outline-none border focus:ring-2 border-none focus:ring-blue-400 dark:focus:ring-blue-600 cursor-pointer"
          >
            Search
          </button>
        </div>

        {loading && <p>Loading...</p>}

        {pages.length > 0 && (
          <div className="mt-10">
            <h2>
              <span className="text-blue-400 font-medium"> {username}</span>:
            </h2>
            <ul>
              {pages.map((repo) => (
                <li key={repo.name}>
                  <a
                    href={repo.url}
                    className="text-blue-400 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>{" "}
                  (Last updated:{" "}
                  {new Date(repo.updated_at).toLocaleDateString()})
                </li>
              ))}
            </ul>
          </div>
        )}

        {pages.length === 0 && !loading && username && (
          <p> No GitHub Pages found for this user.</p>
        )}
      </div>
    </Container>
  );
}
