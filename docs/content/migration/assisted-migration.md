---
title: Assisted Migration Tooling
description: 'Update KendoReact components to their latest versions.'
components: ["general"]
slug: assisted_migration
position: 2
tag: new
---

# Assisted Migration Tooling

Starting with KendoReact 11 and Kendo CLI 1.9.0, you can speed up the migration between major KendoReact versions with the Kendo CLI.

The Kendo CLI is a powerful command-line tool that accelerates your React development. You can use it to quickly create and update projects, and scaffold pages and components.

## Overview

During the migration process, the codemods automatically transform the KendoReact components in your project code by updating:

- JSX markup inside your React components
- Component and hook import paths from `@progress/kendo-react-*` packages
- Component props, event handlers, and configuration options in TypeScript or JavaScript files

The codemods support three transformation patterns: updating prop names, modifying prop values, and handling prop deprecations or removals.

To get started with the migration process, follow these steps to set up the CLI and run the available codemods for your KendoReact packages.

1. Install the Kendo CLI globally.

    ```bash
    npm i -g @progress/kendo-cli
    ```

2. In the root of your project, run:

    ```bash
    npx @progress/kendo-cli migrate
    ```

    If not already installed, you will be prompted to install the Kendo CLI. Next, this command checks for available Kendo UI updates (including any peer dependencies), prompts you to install the updates, and then applies any available codemods on top.

3. Confirm that you want to install the available updates.
4. Confirm that you want to apply the available transformations.
5. Review and accept the suggested transformations.<br/>The Kendo CLI begins to apply the available codemods version by version, starting with the transformations for the earliest version.
6. Look for newly added code comments to your code. These indicate that you need to further adjust any existing custom logic.
7. Finally, do a test run of your project to verify that everything works as expected.

### Best Practices

For a more manageable migration process, consider the following recommended practices:

-   Migrate between consecutive major versions. For example, migrate from v10 to v11. This lets you review and adjust your code version by version, avoiding possible conflicts between breaking changes.
-   Migrate one package at a time. This provides finer control over the migration process.

### CLI Quick Guide

The following list describes the most common migration scenarios.

-   You can run any of the listed commands with or without a package specified.
-   If not already installed, you will be prompted to install the Kendo CLI when running `npx @progress/kendo-cli migrate` for the first time.
-   Once installed, you can also run commands with the `kendo` handle instead of `npx @progress/kendo-cli`. For example: `kendo migrate`.

```bash
# Install the Kendo CLI globally.
npm i -g @progress/kendo-cli

# Run a guided migration. You will be prompted every step of the way.
npx @progress/kendo-cli migrate

# Migrate a specific package.
npx @progress/kendo-cli migrate @progress/kendo-react-grid

# Migrate between specific versions.
npx @progress/kendo-cli migrate --from 10 --to 11

# Run a quick migration without any prompts.
npx @progress/kendo-cli migrate --force

# Only install the available updates. Do not run any codemods.
# Useful when you want to manually migrate your code.
npx @progress/kendo-cli migrate --no-codemods

# Only run the available codemods. Do not install any packages.
# Useful when you already have the packages installed.
npx @progress/kendo-cli migrate --no-install

# Ignoring specific files or directories during the migration.
npx @progress/kendo-cli migrate @progress/kendo-react-grid --no-install --ignore-pattern="dist/**"
```

### CLI Arguments

If you want more control over the migration, you can use any of the following arguments when running `npx @progress/kendo-cli migrate`.

| Argument           | Description                                                                                                                                                    | Sample Use                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `<pkg>`            | Specifies one or more packages for which to execute the assisted migration (with any additional arguments). If not set, runs for all available Kendo packages. | `npx @progress/kendo-cli migrate @progress/kendo-react-grid`                      |
| `--help`           | Prints the help for the command.                                                                                                                               | `npx @progress/kendo-cli migrate --help`                                          |
| `--version`        | Prints the version of the Kendo CLI.                                                                                                                           | `npx @progress/kendo-cli --version`                                               |
| `--verbose`        | Sets the verbosity level of the command output on a level from 0 (silent) to 5 (most verbose). By default: 1.                                                  | `npx @progress/kendo-cli migrate --verbose=3`                                     |
| `--quiet`          | Silences the output as much as possible. Shorthand for `--verbose=0`.                                                                                          | `npx @progress/kendo-cli migrate --quiet`                                         |
| `--force`          | Runs in force mode and does not ask for any confirmations.                                                                                                     | `npx @progress/kendo-cli migrate --force`                                         |
| `--to`             | Specifies the package version to migrate to. If not set, migrates to the latest available version of the respective package(s).                                | `npx @progress/kendo-cli migrate @progress/kendo-react-grid --codemods --to=11`   |
| `--from`           | Specifies the package version to migrate from. If not set, uses the current version.                                                                           | `npx @progress/kendo-cli migrate @progress/kendo-react-grid --codemods --from=10` |
| `--no-install`     | Skips the installation part of the migration. Use this option if you have already updated your packages and want to **only** run the available codemods.       | `npx @progress/kendo-cli migrate --no-install`                                    |
| `--no-codemods`    | Skips the codemods step of the migration. Use this option to **only** install the available updates.                                                           | `npx @progress/kendo-cli migrate --no-codemods`                                   |
| `--no-peer-deps`   | Skips the installation of any peer dependencies for the updated packages. By default, the `migrate` command always installs the available peer dependencies.   | `npx @progress/kendo-cli migrate --no-peer-deps`                                  |
| `--no-optional`    | Skips the optional codemods, if any. Use this option to run **only** the required transformations.                                                             | `npx @progress/kendo-cli migrate --no-optional`                                   |
| `--ignore-pattern` | Specifies a glob pattern to ignore specific files or directories during the migration. Use this option to exclude files that you do not want to be modified.   | `npx @progress/kendo-cli migrate --ignore-pattern="dist/**"`                      |

### Available Codemods

Codemods automatically update all KendoReact related code in your project during migrations between major versions. They are designed to handle all breaking changes introduced in each major release.

The table below lists the components that introduce breaking changes for the specified migration path&mdash;these are the components for which the codemods will apply the necessary updates in your codebase:

| Migration Path  | Affected Components with Breaking Changes                                                                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| From v10 to v11 | <ul><li>[Data Grid](slug://available_codemods#data-grid)</li><li>[DateInputs](slug://available_codemods#date-inputs)</li><li>[Dialogs](slug://available_codemods#dialogs)</li><li>[TreeList](slug://available_codemods#treelist)</li></ul> |
| From v11 to v12 | <ul><li>[Chat](slug://available_codemods#chat)</li></ul> |

## Suggested Links

-   [All Things React Telerik Blog Page](https://www.telerik.com/blogs/all-things-react)
-   [Obtaining Development Builds]({% slug development_builds_installation %})
-   [Obtaining Source Code]({% slug source_code_installation %})

