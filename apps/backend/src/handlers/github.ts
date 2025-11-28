
import { Octokit } from "octokit";
import batchFetch from "../utils/batchFetch.ts";
import type { NextFunction, Request, Response } from "express";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

export const githubFetch = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const repos = await octokit.request("GET /user/repos", {
            per_page: 20,
            visibility: "all",
            sort: "pushed",
            direction: "desc",
        })

        const languagesFromRepos = await batchFetch(repos.data, 8, async (repo) => {
            try {
                const res = await octokit.request(`GET ${repo.languages_url}`);
                return { languages: res.data };
            } catch (err) {
                console.warn(`Failed to fetch languages for ${repo.full_name}`);
                console.error(err)
                return
            }
        })

        const languagesCalculated: Record<string, number> = {}
        
        for (const repo of languagesFromRepos) {
            for (const key in repo?.languages) {
                if (languagesCalculated[key]) {
                    languagesCalculated[key] = languagesCalculated[key] + repo.languages[key]
                } else {
                    languagesCalculated[key] = repo.languages[key]
                }
            }
        }

        const totalBytes = Object.values(languagesCalculated).reduce((acc, val) => acc + val, 0);

        const languagePercentages: Record<string, number> = {}

        for (const [lang, bytes] of Object.entries(languagesCalculated)) {
            const percent = (bytes / totalBytes) * 100

            if (percent > 1) {
                languagePercentages[lang] = percent
            }
        }        
        
        res.status(200).json(languagePercentages)
    } catch (error) {
        console.error(error) 
        next(error)
    }
}
