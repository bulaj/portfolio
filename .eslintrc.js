module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "parser": "babel-eslint",
    "rules": {
        "no-await-in-loop": [ "warn" ],
        "no-compare-neg-zero": [ "error" ],
        "no-cond-assign": [ "error" ],
        "no-console": [ "error" ],
        "no-constant-condition": [ "off" ],
        "no-control-regex": [ "off" ],
        "no-debugger": [ "error" ],
        "no-dupe-args": [ "error" ],
        "no-dupe-keys": [ "error" ],
        "no-duplicate-case": [ "error" ],
        "no-empty": [ "warn", {"allowEmptyCatch": true} ],
        "no-empty-character-class": [ "warn" ],
        "no-ex-assign": [ "error" ],
        "no-extra-boolean-cast": [ "warn" ],
        "no-extra-parens": [ "off" ],
        "no-extra-semi": [ "error" ],
        "no-func-assign": [ "error" ],
        "no-inner-declarations": [ "error" ],
        "no-invalid-regexp": [ "warn" ],
        "no-irregular-whitespace": [ "error" ],
        "no-obj-calls": [ "error" ],
        "no-prototype-builtins": [ "off" ],
        "no-regex-spaces": [ "off" ],
        "no-sparse-arrays": [ "warn" ],
        "no-template-curly-in-string": [ "error" ],
        "no-unexpected-multiline": [ "warn" ],
        "no-unreachable": [ "error" ],
        "no-unsafe-finally": [ "off" ],
        "no-unsafe-negation": [ "error" ],
        "use-isnan": [ "error" ],
        "valid-jsdoc": [ "warn" ],
        "valid-typeof": [ "error" ],
        "accessor-pairs": [ "error" ],
        "array-callback-return": [ "error" ],
        "block-scoped-var": [ "off" ],
        "class-methods-use-this": [ "off" ],
        "complexity": [ "off" ],
        "consistent-return": [ "off" ],
        "curly": [ "warn" ],
        "default-case": [ "off" ],
        "dot-location": [ "warn", "property" ],
        "dot-notation": [ "off" ],
        "eqeqeq": [ "warn" ],
        "guard-for-in": [ "warn" ],
        "no-alert": [ "error" ],
        "no-caller": [ "error" ],
        "no-case-declarations": [ "off" ],
        "no-div-regex": [ "off" ],
        "no-else-return": [ "off" ],
        "no-empty-function": [ "off" ],
        "no-empty-pattern": [ "error" ],
        "no-eq-null": [ "off" ],
        "no-eval": [ "error" ],
        "no-extend-native": [ "error" ],
        "no-extra-bind": [ "warn" ],
        "no-extra-label": [ "off" ],
        "no-fallthrough": [ "off" ],
        "no-floating-decimal": [ "warn" ],
        "no-global-assign": [ "error" ],
        "no-implicit-coercion": [ "off" ],
        "no-implicit-globals": [ "off" ],
        "no-implied-eval": [ "error" ],
        "no-invalid-this": [ "error" ],
        "no-iterator": [ "error" ],
        "no-labels": [ "error" ],
        "no-lone-blocks": [ "error" ],
        "no-loop-func": [ "error" ],
        "no-magic-numbers": [ "warn", {"ignore": [ -1, 0, 1, 2 ], "ignoreArrayIndexes": true} ],
        "no-multi-spaces": [ "warn" ],
        "no-multi-str": [ "off" ],
        "no-new": [ "off" ],
        "no-new-func": [ "error" ],
        "no-new-wrappers": [ "error" ],
        "no-octal": [ "off" ],
        "no-octal-escape": [ "off" ],
        "no-param-reassign": [ "warn" ],
        "no-proto": [ "error" ],
        "no-redeclare": [ "warn" ],
        "no-restricted-properties": [ "off" ],
        "no-return-assign": [ "error" ],
        "no-return-await": [ "off" ],
        "no-script-url": [ "error" ],
        "no-self-assign": [ "warn" ],
        "no-self-compare": [ "error" ],
        "no-sequences": [ "off" ],
        "no-throw-literal": [ "error" ],
        "no-unmodified-loop-condition": [ "off" ],
        "no-unused-expressions": [ "off" ],
        "no-unused-labels": [ "off" ],
        "no-useless-call": [ "warn" ],
        "no-useless-concat": [ "warn" ],
        "no-useless-escape": [ "warn" ],
        "no-useless-return": [ "warn" ],
        "no-void": [ "error" ],
        "no-warning-comments": [ "off" ],
        "no-with": [ "error" ],
        "prefer-promise-reject-errors": [ "off" ],
        "radix": [ "off" ],
        "require-await": [ "off" ],
        "vars-on-top": [ "warn" ],
        "wrap-iife": [ "warn" ],
        "yoda": [ "warn" ],
        "strict": [ "warn", "global" ],
        "init-declarations": [ "off" ],
        "no-catch-shadow": [ "off" ],
        "no-delete-var": [ "off" ],
        "no-label-var": [ "off" ],
        "no-restricted-globals": [ "off" ],
        "no-shadow": [ "off" ],
        "no-shadow-restricted-names": [ "off" ],
        "no-undef": [ "warn" ],
        "no-undef-init": [ "off" ],
        "no-undefined": [ "off" ],
        "no-unused-vars": [ "warn", {"ignoreRestSiblings": true} ],
        "no-use-before-define": [ "off" ],
        "callback-return": [ "off" ],
        "global-require": [ "off" ],
        "handle-callback-err": [ "off" ],
        "no-mixed-requires": [ "off" ],
        "no-new-require": [ "error" ],
        "no-path-concat": [ "off" ],
        "no-process-env": [ "off" ],
        "no-process-exit": [ "off" ],
        "no-restricted-modules": [ "off" ],
        "no-sync": [ "off" ],
        "array-bracket-spacing": [ "warn" ],
        "block-spacing": [ "warn" ],
        "brace-style": [ "off" ],
        "camelcase": [ "warn" ],
        "comma-dangle": [ "warn", "always-multiline" ],
        "comma-spacing": [ "warn" ],
        "comma-style": [ "warn" ],
        "computed-property-spacing": [ "warn" ],
        "consistent-this": [ "off" ],
        "eol-last": [ "warn" ],
        "func-call-spacing": [ "warn" ],
        "func-name-matching": [ "warn" ],
        "func-names": [ "warn" ],
        "func-style": [ "off" ],
        "id-blacklist": [ "off" ],
        "id-length": [ "off" ],
        "id-match": [ "off" ],
        "indent": [ "warn", 4, {"SwitchCase": 1} ],
        "jsx-quotes": [ "warn", "prefer-double" ],
        "key-spacing": [ "warn" ],
        "keyword-spacing": [ "warn" ],
        "line-comment-position": [ "off" ],
        "linebreak-style": [ "off" ],
        "lines-around-comment": [ "off" ],
        "lines-around-directive": [ "off" ],
        "max-depth": [ "off" ],
        "max-len": [ "warn", 135, 4 ],
        "max-lines": [ "off" ],
        "max-nested-callbacks": [ "off" ],
        "max-params": [ "off" ],
        "max-statements": [ "off" ],
        "max-statements-per-line": [ "off" ],
        "multiline-ternary": [ "off" ],
        "new-cap": [ "off" ],
        "new-parens": [ "off" ],
        "newline-after-var": [ "off" ],
        "newline-before-return": [ "off" ],
        "newline-per-chained-call": [ "warn", {"ignoreChainWithDepth": 3} ],
        "no-array-constructor": [ "error" ],
        "no-bitwise": [ "off" ],
        "no-continue": [ "off" ],
        "no-inline-comments": [ "off" ],
        "no-lonely-if": [ "error" ],
        "no-mixed-operators": [ "off" ],
        "no-mixed-spaces-and-tabs": [ "warn" ],
        "no-multi-assign": [ "error" ],
        "no-multiple-empty-lines": [ "warn", {"max": 1} ],
        "no-negated-condition": [ "warn" ],
        "no-nested-ternary": [ "off" ],
        "no-new-object": [ "error" ],
        "no-plusplus": [ "off" ],
        "no-restricted-syntax": [ "off" ],
        "no-tabs": [ "warn" ],
        "no-ternary": [ "off" ],
        "no-trailing-spaces": [ "warn" ],
        "no-underscore-dangle": [ "off" ],
        "no-unneeded-ternary": [ "warn" ],
        "no-whitespace-before-property": [ "warn" ],
        "nonblock-statement-body-position": [ "off" ],
        "object-curly-newline": [ "off" ],
        "object-curly-spacing": [ "warn" ],
        "object-property-newline": [ "off" ],
        "one-var": [ "warn", {"var": "always", "let": "never", "const": "never"} ],
        "one-var-declaration-per-line": [ "off" ],
        "operator-assignment": [ "off" ],
        "operator-linebreak": [ "off" ],
        "padded-blocks": [ "warn", {"blocks": "never", "classes": "always", "switches": "never"} ],
        "quote-props": [ "warn", "as-needed" ],
        "quotes": [ "warn", "single" ],
        "require-jsdoc": [ "off" ],
        "semi": [ "warn", "always" ],
        "semi-spacing": [ "warn" ],
        "sort-keys": [ "off" ],
        "sort-vars": [ "off" ],
        "space-before-blocks": [ "warn" ],
        "space-before-function-paren": [ "warn", {"anonymous": "always", "named": "never"} ],
        "space-in-parens": [ "warn" ],
        "space-infix-ops": [ "off" ],
        "space-unary-ops": [ "off" ],
        "spaced-comment": [ "off" ],
        "template-tag-spacing": [ "warn" ],
        "unicode-bom": [ "off" ],
        "wrap-regex": [ "off" ],
        "arrow-body-style": [ "warn", "as-needed", {"requireReturnForObjectLiteral": true} ],
        "arrow-parens": [ "warn", "as-needed" ],
        "arrow-spacing": [ "warn" ],
        "constructor-super": [ "error" ],
        "generator-star-spacing": [ "off" ],
        "no-class-assign": [ "error" ],
        "no-confusing-arrow": [ "off" ],
        "no-const-assign": [ "error" ],
        "no-dupe-class-members": [ "error" ],
        "no-duplicate-imports": [ "error" ],
        "no-new-symbol": [ "error" ],
        "no-restricted-imports": [ "off" ],
        "no-this-before-super": [ "error" ],
        "no-useless-computed-key": [ "off" ],
        "no-useless-constructor": [ "error" ],
        "no-useless-rename": [ "off" ],
        "no-var": [ "off" ],
        "object-shorthand": [ "off" ],
        "prefer-arrow-callback": [ "warn" ],
        "prefer-const": [ "warn" ],
        "prefer-destructuring": [ "warn", {"array": false, "object": true} ],
        "prefer-numeric-literals": [ "off" ],
        "prefer-rest-params": [ "warn" ],
        "prefer-spread": [ "warn" ],
        "prefer-template": [ "warn" ],
        "require-yield": [ "off" ],
        "rest-spread-spacing": [ "warn" ],
        "sort-imports": [ "off" ],
        "symbol-description": [ "off" ],
        "template-curly-spacing": [ "warn" ],
        "yield-star-spacing": [ "off" ],
        "react/display-name": [ "off" ],
        "react/forbid-component-props": [ "off" ],
        "react/forbid-elements": [ "off" ],
        "react/forbid-prop-types": [ "error", {"forbid": [ "any" ]} ],
        "react/forbid-foreign-prop-types": [ "warn" ],
        "react/no-array-index-key": [ "off" ],
        "react/no-children-prop": [ "error" ],
        "react/no-danger": [ "error" ],
        "react/no-danger-with-children": [ "off" ],
        "react/no-deprecated": [ "warn" ],
        "react/no-did-mount-set-state": [ "error" ],
        "react/no-did-update-set-state": [ "error" ],
        "react/no-direct-mutation-state": [ "warn" ],
        "react/no-find-dom-node": [ "warn" ],
        "react/no-is-mounted": [ "warn" ],
        "react/no-multi-comp": [ "warn" ],
        "react/no-render-return-value": [ "error" ],
        "react/no-set-state": [ "off" ],
        "react/no-string-refs": [ "warn" ],
        "react/no-unescaped-entities": [ "error" ],
        "react/no-unknown-property": [ "error" ],
        "react/no-unused-prop-types": [ "warn" ],
        "react/prefer-es6-class": [ "warn" ],
        "react/prefer-stateless-function": [ "off" ],
        "react/prop-types": [ "warn", {"ignore": [ "children", "params" ]} ],
        "react/react-in-jsx-scope": [ "error" ],
        "react/require-default-props": [ "off" ],
        "react/require-optimization": [ "off" ],
        "react/require-render-return": [ "error" ],
        "react/self-closing-comp": [ "warn" ],
        "react/sort-comp": [ "warn" ],
        "react/sort-prop-types": [ "off" ],
        "react/style-prop-object": [ "off" ],
        "react/void-dom-elements-no-children": [ "warn" ],
        "react/jsx-boolean-value": [ "error", "always" ],
        "react/jsx-closing-bracket-location": [ "warn", "tag-aligned" ],
        "react/jsx-curly-spacing": [ "warn", "never" ],
        "react/jsx-equals-spacing": [ "warn", "never" ],
        "react/jsx-filename-extension": [ "off" ],
        "react/jsx-first-prop-new-line": [ "off" ],
        "react/jsx-handler-names": [ "off" ],
        "react/jsx-indent": [ "warn", 4 ],
        "react/jsx-indent-props": [ "off" ],
        "react/jsx-key": [ "error" ],
        "react/jsx-max-props-per-line": [ "warn", {"maximum": 1, "when": "multiline"} ],
        "react/jsx-no-bind": [ "warn", {"ignoreRefs": true} ],
        "react/jsx-no-comment-textnodes": [ "error" ],
        "react/jsx-no-duplicate-props": [ "error" ],
        "react/jsx-no-literals": [ "off" ],
        "react/jsx-no-target-blank": [ "off" ],
        "react/jsx-no-undef": [ "error" ],
        "react/jsx-pascal-case": [ "warn" ],
        "react/jsx-sort-props": [ "off" ],
        "react/jsx-tag-spacing": [ "warn", {
            "closingSlash": "never",
            "beforeSelfClosing": "never",
            "afterOpening": "never"
        } ],
        "react/jsx-uses-react": [ "error" ],
        "react/jsx-uses-vars": [ "error" ],
        "react/jsx-wrap-multilines": [ "warn" ],
        "import/no-unresolved": [ "off" ],
        "import/named": [ "warn" ],
        "import/default": [ "off" ],
        "import/namespace": [ "error" ],
        "import/no-restricted-paths": [ "warn" ],
        "import/no-absolute-path": [ "error" ],
        "import/no-dynamic-require": [ "off" ],
        "import/no-interal-modules": [ "off" ],
        "import/no-webpack-loader-syntax": [ "error" ],
        "import/export": [ "warn" ],
        "import/no-named-as-default": [ "warn" ],
        "import/no-named-as-default-member": [ "warn" ],
        "import/no-deprecated": [ "off" ],
        "import/no-extraneous-dependencies": [ "off" ],
        "import/no-mutable-exports": [ "warn" ],
        "import/unambiguous": [ "warn" ],
        "import/no-commonjs": [ "off" ],
        "import/no-amd": [ "warn" ],
        "import/no-nodejs-modules": [ "error" ],
        "import/first": [ "warn" ],
        "import/no-duplicates": [ "error" ],
        "import/no-namespace": [ "off" ],
        "import/extensions": [ "off" ],
        "import/order": [ "off", {
            "groups": [ "builtin", "external", "internal", "parent", "sibling", "index" ],
            "newlines-between": "always"
        } ],
        "import/newline-after-import": [ "warn" ],
        "import/prefer-default-export": [ "off" ],
        "import/max-dependencies": [ "off" ],
        "import/no-unassigned-import": [ "off" ],
        "import/no-named-default": [ "off" ],
        "import/no-anonymous-default-export": [ "off" ],

// Require ARIA roles to be valid and non-abstract
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
        'jsx-a11y/aria-role': [ 'error', {ignoreNonDom: false} ],

// Enforce all aria-* props are valid.
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
        'jsx-a11y/aria-props': 'error',

// Enforce ARIA state and property values are valid.
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
        'jsx-a11y/aria-proptypes': 'error',

// Enforce that elements that do not support ARIA roles, states, and
// properties do not have those attributes.
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
        'jsx-a11y/aria-unsupported-elements': 'error',

// disallow href "#"
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/href-no-hash.md
        'jsx-a11y/href-no-hash': [ 'error', {components: [ 'a' ]} ],

// Enforce that all elements that require alternative text have meaningful information
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
        'jsx-a11y/alt-text': [ 'error', {
            elements: [ 'img', 'object', 'area', 'input[type="image"]' ],
            img: [],
            object: [],
            area: [],
            'input[type="image"]': [],
        } ],

// Prevent img alt text from containing redundant words like "image", "picture", or "photo"
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
        'jsx-a11y/img-redundant-alt': 'error',

// require that JSX labels use "htmlFor"
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
        'jsx-a11y/label-has-for': [ 'error', {components: [ 'label' ]} ],

// require that mouseover/out come with focus/blur, for keyboard-only users
// TODO: evaluate
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
        'jsx-a11y/mouse-events-have-key-events': 'off',

// Prevent use of `accessKey`
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
        'jsx-a11y/no-access-key': 'error',

// require onBlur instead of onChange
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
        'jsx-a11y/no-onchange': 'off',

// Elements with an interactive role and interaction handlers must be focusable
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md
        'jsx-a11y/interactive-supports-focus': 'error',

// Enforce that elements with ARIA roles must have all required attributes
// for that role.
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
        'jsx-a11y/role-has-required-aria-props': 'error',

// Enforce that elements with explicit or implicit roles defined contain
// only aria-* properties supported by that role.
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
        'jsx-a11y/role-supports-aria-props': 'error',

// Enforce tabIndex value is not greater than zero.
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
        'jsx-a11y/tabindex-no-positive': 'error',

// ensure <hX> tags have content and are not aria-hidden
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
        'jsx-a11y/heading-has-content': [ 'error', {components: [ '' ]} ],

// require HTML elements to have a "lang" prop
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
        'jsx-a11y/html-has-lang': 'error',

// require HTML element's lang prop to be valid
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
        'jsx-a11y/lang': 'error',

// prevent distracting elements, like <marquee> and <blink>
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
        'jsx-a11y/no-distracting-elements': [ 'error', {
            elements: [ 'marquee', 'blink' ],
        } ],

// only allow <th> to have the "scope" attr
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
        'jsx-a11y/scope': 'error',

// require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
// TODO: enable?
        'jsx-a11y/click-events-have-key-events': 'off',

// Enforce that DOM elements without semantic behavior not have interaction handlers
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        'jsx-a11y/no-static-element-interactions': [ 'error', {
            handlers: [
                'onClick',
                'onMouseDown',
                'onMouseUp',
                'onKeyPress',
                'onKeyDown',
                'onKeyUp',
            ]
        } ],

// A non-interactive element does not support event handlers (mouse and key handlers)
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
        'jsx-a11y/no-noninteractive-element-interactions': [ 'error', {
            handlers: [
                'onClick',
                'onMouseDown',
                'onMouseUp',
                'onKeyPress',
                'onKeyDown',
                'onKeyUp',
            ]
        } ],

// ensure emoji are accessible
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
        'jsx-a11y/accessible-emoji': 'error',

// elements with aria-activedescendant must be tabbable
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

// ensure iframe elements have a unique title
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
        'jsx-a11y/iframe-has-title': 'error',

// prohibit autoFocus prop
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
        'jsx-a11y/no-autofocus': [ 'error', {ignoreNonDOM: true} ],

// ensure HTML elements do not specify redundant ARIA roles
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
        'jsx-a11y/no-redundant-roles': 'error',

// media elements must have captions
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
        'jsx-a11y/media-has-caption': [ 'error', {
            audio: [],
            video: [],
            track: [],
        } ],

// WAI-ARIA roles should not be used to convert an interactive element to non-interactive
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md
        'jsx-a11y/no-interactive-element-to-noninteractive-role': [ 'error', {
            tr: [ 'none', 'presentation' ],
        } ],

// WAI-ARIA roles should not be used to convert a non-interactive element to interactive
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [ 'error', {
            ul: [ 'listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid' ],
            ol: [ 'listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid' ],
            li: [ 'menuitem', 'option', 'row', 'tab', 'treeitem' ],
            table: [ 'grid' ],
            td: [ 'gridcell' ],
        } ],

// Tab key navigation should be limited to elements on the page that can be interacted with.
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md
        'jsx-a11y/no-noninteractive-tabindex': [ 'error', {
            tags: [],
            roles: [ 'tabpanel' ],
        } ],
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y"
    ],
};
