---
title: Keeping Up to Date
description: 'Update KendoReact components to their latest versions.'
components: ["general"]
slug: up_to_date
position: 1
previous_url: /installation/up-to-date
tag: updated
---

# Keeping Up to Date

The KendoReact packages are released frequently with bug fixes and new features.

> tip Starting with KendoReact 11, some component packages now provide codemods to help you migrate between major versions. Check out [Assisted Migration](slug:assisted_migration).

## Semantic Versioning

The KendoReact packages are released together (all `@progress/kendo-react-*` packages have the same version) and their version numbers follow the rules of [Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning):

-   A major version bump (X.y.z) signals a breaking change in the API. You might need to update application code or dependencies.
-   A minor version bump (x.Y.z) signals the addition of new features. Existing code will continue to work but new features may require additional setup.
-   A patch version bump (x.y.Z) indicates a bug-fix release. Typically, patches do not require changes to application code.

## Updating to Compatible Releases

The `package.json` file references a major version range&mdash;for example, `"@progress/kendo-react-grid": "^10.0.0"`. To fetch the latest compatible Minor or Patch release, run `npm update`.

## Version Compatibility

> All complex KendoReact components must have the same version as their KendoReact dependencies in order to function properly. The easiest way to track that is to always update the used KendoReact packages to one and the same version.

> When you are upgrading the KendoReact packages to the latest version, you have to make sure that the kendo-themes packages are also updated to the latest in order to have properly styled components and avoid any version incompatibility.

## Manual Update

To update to the most recent versions of the KendoReact components, use [`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates).

-   To upgrade all Progress packages, run:

    ```sh
    npx npm-check-updates --upgrade --filter "/@progress.*/"
    ```

-   To upgrade only KendoReact packages, run:

    ```sh
    npx npm-check-updates --upgrade --filter "/@progress/kendo-react.*/"
    ```

-   In some cases, you may have to specify the location of the `package.json` file:

    ```sh
    npx npm-check-updates --upgrade --filter "/@progress.*/" --packageFile ./package.json
    ```

A successful run will record the updated versions in `package.json` and `package-lock.json`.

> Upgrading between major versions might require you to change the application code.
>
> For more details, refer to the [KendoReact Change Log](https://www.telerik.com/kendo-react-ui/components/changelogs/ui-for-react/).


## Suggested Links

-   [All Things React Telerik Blog Page](https://www.telerik.com/blogs/all-things-react)
-   [Obtaining Development Builds]({% slug development_builds_installation %})
-   [Obtaining Source Code]({% slug source_code_installation %})
