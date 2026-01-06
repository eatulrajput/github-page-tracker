"use client"

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
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>GitHub Pages Tracker</h1>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "0.5rem" }}
      />
      <button onClick={handleSearch} style={{ padding: "0.5rem" }}>
        Search
      </button>

      {loading && <p>Loading...</p>}

      {pages.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Pages hosted by {username}:</h2>
          <ul>
            {pages.map((repo) => (
              <li key={repo.name}>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
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
