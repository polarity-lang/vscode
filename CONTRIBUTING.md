# Developer and Contributer Information

## Contents

- [Keeping the Changelog](#keeping-the-changelog)
- [Developing Locally](#developing-locally)
- [Making a Release](#making-a-release)


## Keeping the Changelog

Whenever you make a change which affects the editor extension you should add an entry to the changelog in the `Unreleased` section at the top of the [CHANGELOG.md](./CHANGELOG.md).

## Making a Release

In order to cut a release you should follow these steps:

- Start a new `git` branch called `prepare-0.0.x-release` and open a PR with the following changes.
- Update the [CHANGELOG.md](CHANGELOG.md) and replace the `Unreleased` section with the new version and the current date.
For every entry of the CHANGELOG check if there is a link to the corresponding issue or pull request.
- Update the version number in the `package.json` to the version you want to release.

After the Pull Request from this branch has been merged, you need to perform the following steps:

- Create a new annotated tag with the following command:
  ```console
  > git tag -a v0.0.x -m "Version 0.0.x"
  ```
- Push the tag to the repository using the following command:
  ```
  > git push origin v0.0.x
  ```
- Pushing the tag should trigger a release action which releases the new version of the extension to the Microsoft vscode extension marketplace and to the open-vsx marketplace. Check after a few minutes if the extension have been successfully released.

## Developing Locally

### Install required software
In order to work on the language extension on your local machine you need to install [Node.js](https://nodejs.org/en/download) and [npm](https://www.npmjs.com/package/npm), as well as the [vsce](https://www.npmjs.com/package/vsce) tool.

To install `vsce` via `npm`, run:

```sh
npm install -g @vscode/vsce
```

### Working on the extension
You can then open this folder in VSCode:

```sh
code .
```

Open the "Run and Debug" tab (`Ctrl+Shift+D`).
Select the "Extension" run configuration.
Press `F5` or the "Start Debugging" button in VSCode.

### Testing the packaging workflow

You can also create a packaged version of the extension by running the
following command:

```sh
vsce package
```

This should create a file named `polarity-0.0.x.vsix`, corresponding to the current version declared in `package.json`.

To install the extension in your local VSCode environment, run:

```sh
code --install-extension polarity-0.0.x.vsix
```
