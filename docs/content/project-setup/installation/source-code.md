---
title: Obtaining Source Code
description: "Download the source code of KendoReact components."
components: ["general"]
slug: source_code_installation
position: 4
category: setup
level: 0
---

# Obtaining Source Code

To obtain the source code of the components download the source code from the KendoReact [NX](https://nx.dev/)-based mono repository.

> The source code is available only for commercial-license holders and you will be asked to enter your credentials.

## Source Repository

1. To obtain the full source code, clone a repository from the KendoReact Git mirror. The repository contains the complete revision history of the official releases.

    ```sh
    git clone https://kendo.git.progress.com/kendo-react-private.git
    ```

1. To update your clone, run `git pull`. The mirror repository is updated daily.

### Tags

The source repository contains tags for each official release&mdash;for example, `"v1.0.0"` or `"v1.1.0"`. To get the full list of all tags, run `git tag`.

### Branches

The source repository contains a single `master` branch. It corresponds to the `latest` NPM `dist`-tag and represents the current official release of the package.

## Building from Source

> You can use the repository for building modified versions of the official package. However, the KendoReact license prohibits the redistribution of modified versions of the packages.

1. In each individual package, replace the metadata in the `package.json` file to make your package name unique.

    ```json
    {
      "name": "my-lovely-kendo-react-component",
      "description": "Customized react package",
      "version": "1.0.0"
    }
    ```

1. Run `git clean -xdf` to remove unwanted files from your working directory.
1. Run `npm ci` to install all developer dependencies.
1. Run `npm run build` to build all monorepo packages. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Submitting Your Credentials

To avoid being asked for your credentials while you clone a repository, store them.

### Choosing Storage Options

To store your credentials, either:

* Cache your credentials by storing them as plain text in a [`.netrc`](http://www.mavetju.org/unix/netrc.php) file, or
* Store your credentials by using the Git credential helpers. For detailed information on how to do this, refer to Stack Overflow and follow the discussion on [skipping the password typing](http://stackoverflow.com/questions/5343068/is-there-a-way-to-skip-password-typing-when-using-https-github).

### Storing on Windows

1. Create a text file called `_netrc` in your home directory&mdash;for example, `c:\users\jane\_netrc`.
1. Declare a `HOME` environment variable.

    ```sh
    C:\> SETX HOME %USERPROFILE%
    ```

1. Add your credentials by applying the following format:

    ```sh
    machine kendo.git.progress.com
        login my-progress.identity@example.com
        password mysecret
    ```

If your home directory contains spaces in its path, Git might experience problems when it tries to access it&mdash;for example, `c:\Documents and Settings\jane`. To avoid such issues, set your `%HOME%` environment variable so that it points to a directory and has no spaces in its name.

### Storing on Linux, OS X, and Unix-Like Systems

1. In your home directory, create a file called `.netrc` (`~/.netrc`). Modify the file permissions so that the file is readable only for you.

    ```sh
    touch ~/.netrc
    chmod 0600 ~/.netrc
    ```

1. Add your credentials to the `~/.netrc` file by using the following format:

    ```sh
    machine kendo.git.progress.com
        login my-progress.identity@example.com
        password mysecret
    ```

## Troubleshooting

This section provides solutions for common issues you might encounter while cloning the source code repository.

### SSL Issues Occur on Windows

You might see the following error message:

```sh
fatal: unable to access 'https://kendo.git.progress.com/kendo-react-private.git/': SSL certificate problem: unable to get local issuer certificate
```

**Cause** The underlying Git installation is missing the certificate bundle.

**Solution** Follow the steps in the [Adding a corporate (or self-signed) certificate authority to git.exe’s store](https://docs.microsoft.com/archive/blogs/phkelley/adding-a-corporate-or-self-signed-certificate-authority-to-git-exes-store) MSDN blog post.

> If you have to use the `@` symbol in the URL because of, for example, network restrictions or admin rules, encode it as `https://firstname.lasname%40domain.com@kendo.git.progress.com/kendo-react-private.git`.

## Suggested Links

* [Getting Started with KendoReact]({% slug getting_started %})
