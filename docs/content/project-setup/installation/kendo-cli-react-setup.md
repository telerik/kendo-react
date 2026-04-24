---
title: Kendo CLI Options
page_title: Kendo CLI for React Setup - KendoReact
description: 'Install and use the Kendo CLI for KendoReact projects: licensing, MCP configuration, project generation, and assisted migration.'
components: ['general']
slug: kendo_cli_options
position: 2
category: setup
level: 0
tier: mixed
tag: new
---

# Kendo CLI Options for React

This article covers all React-related setup tasks you can perform with the Kendo CLI: installation, license management, MCP server configuration, project generation, and assisted migration.

## Install the Kendo CLI

Install the CLI globally:

```sh
npm i -g @progress/kendo-cli
```

## License Setup for KendoReact

A valid Telerik or Kendo UI license is required to use premium KendoReact components in your projects.

### Activate Your License

Find your license key at [Your Licenses](https://www.telerik.com/account/your-licenses), then run:

```sh
kendo license activate
```

The command searches for a license key in the following locations:

-   `TELERIK_LICENSE` environment variable
-   `KENDO_UI_LICENSE` environment variable
-   `telerik-license.txt` in the current directory, any parent directory, or `~/.telerik/`
-   `kendo-ui-license.txt` in the current directory, any parent directory, or `~/.telerik/`

`license activate` options:

| Option                | Description                                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `--ignore-no-license` | Exit with code `0` even when no license file is found. Useful in CI when a missing license should be treated as a warning. |

### Download or Refresh a License Key

To authenticate with telerik.com in a browser and save a fresh key to `~/.telerik/telerik-license.txt`, run:

```sh
kendo license refresh
```

### Inspect the Active License

To print the current license audience, issue date, and covered products, run:

```sh
kendo license info
```

## Configure the Kendo UI Agent (MCP) for React

Use MCP commands to register KendoReact MCP servers for your AI coding assistant.

### Configure for a Specific IDE

Use `react` as the product when you configure KendoReact.

```sh Cursor
kendo mcp config react --ide=cursor
```
```sh VS Code
kendo mcp config react --ide=vscode
```
```sh All IDEs
kendo mcp config react --ide=all
```

Supported IDEs: `cursor`, `vscode`, `visualstudio`, `all`

### Configure All Products for All IDEs

```sh
kendo mcp all
```

### Force Overwrite Existing Entries

By default, `mcp config` and `mcp all` skip entries that already exist in the config file. Use `--force` to overwrite existing entries:

```sh React for Cursor
kendo mcp config react --ide=cursor --force
```
```sh All products and IDEs
kendo mcp all --force
```

### JSON Output for Scripts and CI

Use `--json` to return machine-readable output:

```sh
kendo mcp config react --ide=cursor --json
```

Example output:

```json
{
    "exitCode": 0,
    "message": "MCP servers registered successfully.",
    "data": {
        "registered": [{ "ide": "Cursor", "configPath": "/Users/you/.cursor/mcp.json" }]
    },
    "success": true
}
```

MCP config files written per IDE:

| IDE                | Config file                                                |
| ------------------ | ---------------------------------------------------------- |
| Cursor             | `~/.cursor/mcp.json`                                       |
| Visual Studio Code | `~/Library/Application Support/Code/User/mcp.json` (macOS) |
| Visual Studio      | `~/.mcp.json`                                              |

### MCP Command Synopsis

```sh
kendo mcp config react
```

Options:

| Option        | Applies to              | Description                                                                   |
| ------------- | ----------------------- | ----------------------------------------------------------------------------- |
| `--ide=<ide>` | `mcp config`            | IDE to configure: `cursor`, `vscode`, `visualstudio`, `all` (default: `all`). |
| `--json`      | `mcp config`, `mcp all` | Print machine-readable JSON output.                                           |
| `--force`     | `mcp config`, `mcp all` | Overwrite existing MCP server entries.                                        |

```sh
kendo mcp all
```

Configures all MCP servers for all IDEs and products.

## Generate a KendoReact Project

The Kendo CLI can scaffold KendoReact apps for Vite, Next.js, and Astro.

<TabStrip>
<TabStripTab title="Vite">

```sh Theme example
npx kendo react create vite MyKendoApp --theme=bootstrap
```
```sh Styling example
npx kendo react create vite MyKendoApp --styling=Sass
```

Vite options:

-   Language: `--ts`
-   Styling: `--styling=CSS`, `--styling=Sass`
-   Theme: `--theme=default`, `--theme=bootstrap`, `--theme=material`, `--theme=fluent`
-   Other: `--free`

Synopsis:

```sh
kendo react create vite [name]
```

</TabStripTab>

<TabStripTab title="Next.js">

```sh JavaScript with App Router
npx kendo react create nextjs MyKendoApp --js --theme=bootstrap
```
```sh JavaScript without App Router
npx kendo react create nextjs MyKendoApp --js --no-app --theme=bootstrap
```
```sh TypeScript with App Router
npx kendo react create nextjs MyKendoApp --ts --theme=bootstrap
```
```sh TypeScript without App Router
npx kendo react create nextjs MyKendoApp --ts --no-app --theme=bootstrap
```

Next.js options:

-   Language: `--js`, `--ts`
-   Theme: `--theme=default`, `--theme=bootstrap`, `--theme=material`, `--theme=fluent`
-   Other: `--eslint`, `--no-app`, `--no-src-dir`, `--import-alias="@/*"`

Synopsis:

```sh
kendo react create nextjs [name]
```

</TabStripTab>

<TabStripTab title="Astro">

```sh Theme example
npx kendo react create astro MyKendoApp --theme=bootstrap
```

```sh Styling example
npx kendo react create astro MyKendoApp --styling=Sass
```

Astro options:

-   Language: `--ts`
-   Styling: `--styling=CSS`, `--styling=Sass`
-   Theme: `--theme=default`, `--theme=bootstrap`, `--theme=material`, `--theme=fluent`

Synopsis:

```sh
kendo react create astro [name]
```

</TabStripTab>
</TabStrip>

### Build and Run

After generation, install dependencies and start the development server:

```sh
cd MyKendoApp
npm install
npm run dev
```

## Assisted Migration for KendoReact

Use CLI-assisted migration to update KendoReact packages and apply available codemods.

Install the CLI globally (if needed):

```sh
npm i -g @progress/kendo-cli
```

Run migration from your project root:

```sh
npx @progress/kendo-cli migrate
```

The guided flow can:

1. Check for available package updates and peer dependencies.
2. Prompt you to install updates.
3. Prompt you to apply codemods.
4. Apply transformations version by version.

After migration, review added code comments and run your app/tests.

### Best Practices

-   Migrate between consecutive major versions (for example, v10 to v11).
-   Migrate one package at a time for better control.
-   Validate behavior with a full test run after migration.

### Quick Migration Commands

```sh Guided migration
npx @progress/kendo-cli migrate
```
```sh Specific package
npx @progress/kendo-cli migrate @progress/kendo-react-grid
```
```sh Specific versions
npx @progress/kendo-cli migrate @progress/kendo-react-grid --from 10 --to 11
```
```sh Force mode (no prompts)
npx @progress/kendo-cli migrate --force
```
```sh Install updates only (no codemods)
npx @progress/kendo-cli migrate --no-codemods
```
```sh Codemods only (no install)
npx @progress/kendo-cli migrate @progress/kendo-react-grid --no-install
```
```sh Ignore files/directories
npx @progress/kendo-cli migrate @progress/kendo-react-grid --no-install --ignore-pattern="dist/**"
```

### Migration Arguments Reference

| Argument           | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| `<pkg>`            | Package(s) to migrate. If omitted, runs for all available Kendo packages. |
| `--help`           | Print command help.                                                       |
| `--version`        | Print Kendo CLI version.                                                  |
| `--verbose`        | Set output verbosity level (`0` to `5`).                                  |
| `--quiet`          | Minimal output (equivalent to `--verbose=0`).                             |
| `--force`          | Run without confirmations.                                                |
| `--to`             | Target version to migrate to.                                             |
| `--from`           | Source version to migrate from.                                           |
| `--no-install`     | Skip package installation and run codemods only.                          |
| `--no-codemods`    | Skip codemods and install updates only.                                   |
| `--no-peer-deps`   | Skip peer dependency installation.                                        |
| `--no-optional`    | Skip optional codemods.                                                   |
| `--ignore-pattern` | Ignore files/directories by glob pattern.                                 |

## Suggested Links

-   [Getting Started with KendoReact](slug:getting_started)
-   [Set Up Your KendoReact License Key](slug:my_license)
-   [License Activation Errors and Warnings](slug:license_activation_errors)
-   [KendoReact AI Tools Overview](slug:ai_tools_overview)
-   [Agentic UI Generator Getting Started](slug:agentic_ui_generator_getting_started)
