module.exports = {
  root: true,
  ignorePatterns: [
    "projects/**/*"
  ],
  plugins: ['@mews'],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase"
          }
        ],
        '@angular-eslint/component-selector': [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case"
          }
        ],
        "subscribe-extends": "error",
        "max-lines-per-function": ["error", 20],
        "max-lines": ["error", 
          {
            max: 200,
            skipBlankLines: true
        }]
      }
    },
    {
      files: ["*.spec.ts"],
      rules: {
        "subscribe-extends": "off",
        "max-lines-per-function": "off",
        "max-lines": "off"

      }
    },
    {
      files: [
        "*.html"
      ],
      extends: [
        "plugin:@angular-eslint/template/recommended"
      ],
      rules: {
      }
    }
  ]
}
