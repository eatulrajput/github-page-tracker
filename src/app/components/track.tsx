"use client";

import { useState } from "react";
import { getPagesRepos, GitHubPagesRepo } from "@/app/lib/github";

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
     <div className="h-full border border-neutral-100 shadow-md w-full max-w-4xl mx-auto p-4 flex flex-col items-center justify-between">
      <h1 className="text-4xl font-medium text-blue-400 dark:text-gray-50">GitHub Pages Tracker</h1>

      <div className="mt-10 flex items-center justify-evenly w-full max-w-2xl">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="placeholder-text-blue-500 focus:outline-none focus:ring-2 flex-1 focus:ring-blue-400 p-2"
        />
        <button onClick={handleSearch} className="px-2 py-2 bg-blue-400 text-white rounded focus:outline-none border focus:ring-2 focus:ring-blue-400 cursor-pointer">Search</button>
      </div>

      {loading && <p>Loading...</p>}

      {pages.length > 0 && (
        <div className="mt-10">
          <h2>Pages hosted by <span className="text-blue-400 font-medium"> {username}</span>:</h2>
          <ul>
            {pages.map((repo) => (
              <li key={repo.name}>
                <a href={repo.url} className="text-blue-400 font-medium" target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>{" "}
                (Last updated: {new Date(repo.updated_at).toLocaleDateString()})
              </li>
            ))}
          </ul>
        </div>
      )}

      {pages.length === 0 && !loading && username && (
        <p>No GitHub Pages found for this user.</p>
      )}
    </div>
  );
}

