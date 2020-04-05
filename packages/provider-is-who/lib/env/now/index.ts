declare global
{
	namespace NodeJS
	{
		interface ProcessEnv extends IEnvZeitNow
		{

		}
	}
}

/**
 * @see https://zeit.co/docs/v2/git-integrations/zeit-now-for-github
 * @see https://zeit.co/docs/v2/git-integrations/zeit-now-for-gitlab
 * @see https://zeit.co/docs/v2/git-integrations/zeit-now-for-bitbucket
 */
export interface IEnvZeitNow
{
	/**
	 *  An indicator for whether the app was deployed by ZEIT Now for GitHub.
	 */
	NOW_GITHUB_DEPLOYMENT?: string | '1'

	/**
	 * The GitHub organization that owns the repository the deployment is triggered from.
	 */
	NOW_GITHUB_ORG?: string

	/**
	 * The origin repository of the app.
	 */
	NOW_GITHUB_REPO?: string

	/**
	 * The organization of which the commit belongs. For example, when submitting a pull request from a forked repository.
	 */
	NOW_GITHUB_COMMIT_ORG?: string

	/**
	 * The repository of which the commit belongs. For example, when submitting a pull request from a forked repository.
	 */
	NOW_GITHUB_COMMIT_REPO?: string

	/**
	 * The branch that the deployment was made from.
	 */
	NOW_GITHUB_COMMIT_REF?: string

	/**
	 * The sha of the commit the deployment was triggered by.
	 */
	NOW_GITHUB_COMMIT_SHA?: string

	/**
	 * The username belonging to the author of the commit that the project was deployed by.
	 */
	NOW_GITHUB_COMMIT_AUTHOR_LOGIN?: string

	/**
	 * The name belonging to the author of the commit that the project was deployed by.
	 */
	NOW_GITHUB_COMMIT_AUTHOR_NAME?: string

	/**
	 * /zeit/{id}/packages/web
	 */
	INIT_CWD?: string
	PWD?: string

	HOME?: string | '/zeit',

	NOW_BUILDER?: string

	GITLAB_DEPLOYMENT?: string
	GITLAB_PROJECT_ID?: string

	BITBUCKET_DEPLOYMENT?: string
	BITBUCKET_REPO_NAME?: string

	NOW_REGION?: string
	AWS_REGION?: string
}

export {}
