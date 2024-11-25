---
title: 'Autoformatting R code'
date: 2024-11-16
tags:
  - R
  - code
  - MIT
  - data-science
images:
  - img/boston.gif
draft: false
---

I am a big fan of autoformatting code with a language-specific tool.

This removes all the mental overhead of manually styling things nicely, and ensures styling is consistent across a project, usually while also ensuring your code adheres to a popular style guide (like [PEP8](https://peps.python.org/pep-0008/) for Python.) This is especially important if you are collaborating with others. Instead of mixing styles or having to police each others styles in pull requests or (worst of all) fighting over styles and changing things back and forth, you each run your code through the autoformatter and everything comes out looking the same.

For Python, I usually use ["Black: The Uncompromising Code Formatter"](https://black.readthedocs.io/en/stable/index.html), and for JavaScript I use Prettier. When using my usual code editor (VSCode), these packages can be installed as extensions, and you can configure the editor to auto format on save. (See: [tutorial](https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code)).

Nice! 👍

I have been learning R recently, by auditing the course "Applied Data Science for Cities" at MIT. I had some trouble replicating this "format on save" functionality in RStudio.

In RStudio, there is a built-in autoformatter, which can be run by highlighting the code you want to format and then pressing `Cmd + Shift + A`. This is not quite as convenient. For a plain R document it's okay-- you first select all (`Cmd + A`) and then run the formatter-- but for an R Markdown or Quarto document you have to carefully select just the chunks of R code you want to format, otherwise the formatter will complain about the markdown syntax.

For me, using a formatting tool needs to be effortless and automatic to be effectively integrated into your workflow.

## Solution

There is a package called `styler` that can be used, which adheres to the [tidyverse style guide](https://style.tidyverse.org/).

If you install it, you will see some new commands appear under the "Addins" menu in RStudio.

![Screenshot of the RStudio addins menu, where the styler commands are visible.](img/add_ins.png)

Next you want to bind the command "style active file" to a [keyboard shortcut](https://support.posit.co/hc/en-us/articles/206382178-Customizing-Keyboard-Shortcuts-in-the-RStudio-IDE). You can do this by going to `Tools > Modify Keyboard Shortcuts...` and then searching for "style active file."

If you could bind this to `Cmd + S` we could achive "format on save," but doing so overrides the default save command.

So the next best thing, for me, is to bind it to `Cmd + Shift + A`. This is replaces the default "format selection" command with a better command that formats the entire document and doesn't complain about markdown syntax.

![Screenshot of the RStudio keyboard shortcuts menu, where the styler command is visible.](img/shortcut.png)

I don't have trouble running this periodically as I work and watching everything snap into place.
