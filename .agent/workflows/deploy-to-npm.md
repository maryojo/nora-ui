---
description: How to deploy the nora-ui package to npm
---

# Deploying to npm

Follow these steps to publish your package to the npm registry.

## Prerequisites

1.  **npm Account**: You need an account on [npmjs.com](https://www.npmjs.com/).
2.  **Login**: Run `npm login` in your terminal and follow the prompts to authenticate.

## Preparation

1.  **Update Version**:
    - Update the `version` in `package.json`.
    - Follow [Semantic Versioning](https://semver.org/) (e.g., `0.1.0` -> `0.1.1`).
    - You can use `npm version patch`, `npm version minor`, or `npm version major` to do this automatically.

2.  **Check Files**:
    - Ensure `package.json` has the correct `files` array (it currently includes `bin`, `library`, etc.).
    - Ensure `registry.json` is included (it might need to be added to the `files` array in `package.json` if it's not already covered).

## Publishing

1.  **Dry Run** (Optional but recommended):
    - Run `npm publish --dry-run` to see what files will be included and verify metadata without actually publishing.

2.  **Publish**:
    - Run `npm publish`.
    - If your package name is scoped (e.g., `@username/nora-ui`), you might need to run `npm publish --access public`.

## Verification

1.  **Check npm**: Visit your package page on npmjs.com to see the new version.
2.  **Test Install**: Try running `npx nora-ui@latest add button` in a separate project to verify the update.
