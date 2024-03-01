// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as vscodelang from "vscode-languageclient";

let client: vscodelang.LanguageClient;

// This method is called when the "pol" extension is activated.
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "polarity" is now active!');

  let config = vscode.workspace.getConfiguration("pol");

  let defaultCmd = "pol";
  let langCmd = config.get<string>("executable") || defaultCmd;

  // Assemble arguments
  let args: string[] = [];
  args.push("lsp");

  let serverOptions: vscodelang.ServerOptions = {
    run: {
      command: langCmd,
      args: args,
      options: {},
    },
    debug: {
      command: langCmd,
      args: args,
      options: {},
    },
  };

  let clientOptions: vscodelang.LanguageClientOptions = {
    documentSelector: [
      {
        scheme: "file",
        language: "pol",
      },
    ],
    diagnosticCollectionName: "pol",
  };

  client = new vscodelang.LanguageClient(
    "polLanguageServer",
    "Polarity Language Server",
    serverOptions,
    clientOptions
  );

  context.subscriptions.push(client.start());
}

// this method is called when your extension is deactivated
export function deactivate() {}
