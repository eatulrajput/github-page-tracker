import axios from "axios";

export interface GitHubPagesRepo {
  name: string;
  url: string;
  updated_at: string;
}

interface GitHubRepoResponse {
  name: string;
  has_pages: boolean;
  updated_at: string;
}

export async function getPagesRepos(username: string): Promise<GitHubPagesRepo[]> {
  try {
    const res = await axios.get<GitHubRepoResponse[]>(
      `https://api.github.com/users/${username}/repos`
    );

    const pagesRepos = res.data.filter(repo => repo.has_pages);

    return pagesRepos.map(repo => ({
      name: repo.name,
      url: `https://${username}.github.io/${repo.name}/`,
      updated_at: repo.updated_at
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
