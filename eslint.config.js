module.exports = {
  extends: [
    'eslint:recommended',              // Use ESLint's default recommendations
    'plugin:react/recommended',         // Use React plugin recommendations
    'plugin:@typescript-eslint/recommended' // Use TypeScript plugin recommendations
  ],
  parser: '@typescript-eslint/parser',  // Parse TypeScript files
  parserOptions: {
    ecmaVersion: 2020,                 // Set ECMAScript version
    sourceType: 'module',              // Allows for using imports/exports
    ecmaFeatures: {
      jsx: true                         // Enable JSX for React
    }
  },
  plugins: [
    'react',                           // React plugin
    '@typescript-eslint',              // TypeScript plugin
    'react-hooks',                     // React hooks plugin
    'react-refresh'                    // React Refresh plugin (for hot-reloading)
  ],
  rules: {
    // TypeScript-specific rules
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable if not required
    '@typescript-eslint/no-explicit-any': 'off',                // Allow `any` type if needed

    // React-specific rules
    'react/prop-types': 'off',        // Disable PropTypes validation if using TypeScript
    'react/jsx-uses-react': 'off',    // React 17 JSX Transform (if using it)
    'react/jsx-uses-vars': 'warn',    // Warn if JSX uses a variable that is undefined

    // React hooks rules
    'react-hooks/rules-of-hooks': 'error',  // Ensure hooks are used correctly
    'react-hooks/exhaustive-deps': 'warn',  // Warn about missing dependencies in useEffect

    // React Refresh rules
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  },
  settings: {
    react: {
      version: 'detect'  // Automatically detect the version of React
    }
  },
  overrides: [
    {
      files: ['**/*.tsx', '**/*.ts'], // Apply TypeScript-specific settings for TS and TSX files
      rules: {
        // TypeScript overrides if needed
      }
    }
  ]
};
