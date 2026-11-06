# LaPrizza Kitchen 3D

3D visualization module of the LaPrizza kitchen for SGRAI (Graphics Systems and Interaction), ISEP 2026/27. Built with [three.js](https://threejs.org), TypeScript and [Vite](https://vite.dev).

## Requirements

| Requirement | Version                                  | Notes                                               |
| ----------- | ---------------------------------------- | --------------------------------------------------- |
| Node.js     | 20.19 or newer, or 22.12 or newer        | Required by Vite 8. The Nix shell provides Node 22. |
| npm         | comes with Node.js                       | Installs the dependencies listed in `package.json`. |
| Browser     | a recent Chrome, Firefox, Edge or Safari | Must support WebGL 2.                               |

Optional:

- [Nix](https://nixos.org) with flakes enabled, to get the exact toolchain from `flake.nix`.
- [direnv](https://direnv.net) with [nix-direnv](https://github.com/nix-community/nix-direnv), to load that toolchain automatically when entering the folder.

## Installation

### With Nix

```sh
cd sgrai-laprizza
nix develop        # or, with direnv: direnv allow
npm install
```

### Without Nix

1. Install Node.js from https://nodejs.org (the LTS version is fine).
2. Check the version:
   ```sh
   node --version   # must print v20.19 or newer, or v22.12 or newer
   ```
3. Install the dependencies:
   ```sh
   cd sgrai-laprizza
   npm install
   ```

## Running

```sh
npm run dev
```

Then open the address Vite prints, usually http://localhost:5173.

Other commands:

| Command           | What it does                                                           |
| ----------------- | ---------------------------------------------------------------------- |
| `npm run dev`     | Starts the development server, which reloads the page on every change. |
| `npm run build`   | Type-checks the code and writes a production build to `dist/`.         |
| `npm run preview` | Serves the production build from `dist/` locally.                      |

The page must be served by one of these commands. Opening `index.html` straight from the file system does not work: the browser cannot run the TypeScript sources and blocks loading `layout.json` from a `file://` address.
