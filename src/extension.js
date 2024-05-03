import vscode from 'vscode' // The module 'vscode' contains the VS Code extensibility API

// Manage: https://marketplace.visualstudio.com/manage/publishers/vueplay

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
const activate = (context) => {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vueplay" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vueplay.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Vue Play!')
	})

	context.subscriptions.push(disposable)
}

// This method is called when your extension is deactivated
const deactivate = () => {}

export {
	activate,
	deactivate
}
