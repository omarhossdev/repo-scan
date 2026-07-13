import type { Config, Context } from "@netlify/functions"
import { ESLint } from 'eslint'

export interface ESLintIssue {
	ruleId: string
	message: string
	severity: 1 | 2 // 1=warning, 2=error
	line: number
	column: number
} 

export async function runESLint(code: string): Promise<ESLintIssue[]> | false {
	try {
		const eslint = new ESLint({
			baseConfig: {
			  parser: '@typescript-eslint/parser',
			  parserOptions: {
			    ecmaVersion: 2022,
			    sourceType: 'module'
			  },
			  extends: [
			    'eslint:recommended',
			    'plugin:@typescript-eslint/recommended'
			  ],
			  plugins: ['@typescript-eslint']
			},
			useEslintrc: false, // ignore .eslintrc 
  		fix: false // we want to find issues only not to fix them
		});

		const results = await eslint.lintText(code, { filePath: 'file.ts' })
		return results[0].messages	

	} catch (error) {
		console.error(`Error while running ESLint on code: ${error}`);
		return false;
	}
}

export default async (req: Request, context: Context) => {
	try {
		const body = await req.json();
		const code: string = body.code;

		const issues: Promise<ESLintIssue[]> = await runESLint(code);

		return new Response(
			JSON.stringify(issues), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			}
		)
	} catch (error) {
		return new Response(
			JSON.stringify({ error: error.message }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			}
		)
	}
}

// api endpoint
export const config: Config = {
	path: '/api/analyze'
}