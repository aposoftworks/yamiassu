# Yamiassu

Welcome to APO Softworks official CSS framework. We openly support customization and encourage you to do so in your own terms. We created some conventions to help keep things organized. But you are free to override them. We separate everything in modules, so they can be easily re-used and combined to create on the run components. Attention: this framework does not support grid and such, we recommend bootstrap for that.

## Installation

You can either use `npm`, download the compiled files or simply clone this repository.

``` terminal
npm i @aposoftworks/yamiassu
```

Once downloaded, you can require our files through:
``` css
@import "aposoftworks/yamiassu";
```

## Editing to your needs

If you ever need to fit this framework into a different scope, you may do so editing the following files (they contain everything you need to change the entire visual):
- properties
- variables/colors
- variables/properties
- variables/naming

## Conventions

### File conventions
To keep things organized, and easy to find, we created a simple set of rules to follow:
- Imports can only be made in index files

### Naming conventions

When creating variables, we have certain rules to maintain readability, such as follows:
- Configuration variables must start with double underline before its name;
`Example: &__main_font_size: #AAA;`
- Togglable variables must start (after the preffix, in case of config variables, for example) with use;
`Example: &use_rounded: false;`
- Color containing variables must end with _color;
`Example: $text_color;`
- Naming variables must contain only one underline as its prefix;
`Example: $_column_name;`