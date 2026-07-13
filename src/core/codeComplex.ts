import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import type { Program } from 'acorn'; // Valid AST type

/*
Learning:
---------
our code is not just a text, but it's a tree structure called an AST (Abstract syntax tree).

AST looks like:

ifStatement 
	-> test: x > 5 ?
	-> consequent: BlockStatement
		-> console.log('x is bigger than 5')
		-> console.log('another log!')

* why use Acron?

-> converts text to AST 🤩 so we can calc the complexity of the project!

* why use Acron Walk?

-> visits EVERY node in the tree and checks it for us 😎

What will it do?

-> count decision points only!

*/

export function getAST(code: string): Program | false {
	try {
		return acorn.parse(code, { 
    	ecmaVersion: 2022, 
    	sourceType: 'module' 
  	})
	} catch (error) {
		console.error(`Error converting code to AST: ${error}`);
		return false
	}
}

export function calculateComplexity(ast: Program): int {
	let complexity = 1;

	walk.simple(ast, {
		IfStatement() { complexity++ },
		ConditionalExpression() { complexity++ },
		LogicalExpression() { complexity++ },
		SwitchStatement() { complexity++ },
		SwitchCase() { complexity++ }, // case 1: (each case is a decision!)
		CatchClause() { complexity++ }, // catch (error) { } 
		// loops
		ForStatement() { complexity++ },
		ForInStatement() { complexity++ },
		ForOfStatement() { complexity++ },
		WhileStatement() { complexity++ },
		DoWhileStatement() { complexity++ }
	})

	return complexity;
}

export default function getComplexityMsg(): object {

}