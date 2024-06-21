# README

## Setup

Add formatter:

```sh
npm i
```

### Install theme

Initial setup:

```sh
git submodule add https://github.com/nodejh/hugo-theme-mini.git themes/mini
```

When you re-clone:

```sh
git submodule update --init --recursive
```

To update the theme, run:

```sh
git submodule update --remote --merge
```

## Key Files

- The original theme files are seen in `themes/mini.` Some of the templates and assets are overwritten in `layouts` and `static.`

- `custom.css` is in `static/css` and is used to override the theme's CSS.

- `config/_default/hugo.toml` is the main configuration file. Some settings are overwritten for production in `config/production/hugo.toml`.

## Notes

- Analytics at [Plausible](https://plausible.io)
