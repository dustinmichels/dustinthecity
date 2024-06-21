# README

## Setup

Update hugo:

```sh
brew upgrade hugo
```

Add prettier formatter:

```sh
npm i
```

Get theme:

```sh
# install theme
git submodule update --init --recursive

# to update theme
git submodule update --remote --merge


# (Note: the initial command was)
git submodule add https://github.com/nodejh/hugo-theme-mini.git themes/mini
```

## Key Files

- The original theme files are seen in `themes/mini.` Some of the templates and assets are overwritten in `layouts` and `static.`

- `custom.css` is in `static/css` and is used to override the theme's CSS.

- `config/_default/hugo.toml` is the main configuration file. Some settings are overwritten for production in `config/production/hugo.toml`.

## Notes

- Analytics at [Plausible](https://plausible.io)
