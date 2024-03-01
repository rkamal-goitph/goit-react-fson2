# Module 01 Lesson 02. Components and Styling

## React Stylization

1. In ReactJS, styles are represented as an object
2. The return statement of a React Component accepts JSX Syntax --> meaning
   regular HTML tags and React components
3. If we want to use JavaScript inside our return statement, we have to wrap the
   JavaScript code in braces

## Stylization Syntax

4. Styles are considered as object with string properties in React
5. Since we want to apply styles dynamically through JavaScript, we use double
   brace {{}}
6. Outer braces mean we will be inserting a JavaScript code
7. Inner braces refer to the Style Object

## Stylization Approaches

1. The first inline CSS approach includes declaring the styles directly to
2. Inline Style - External Style Object Approach - The second inline CSS
   approach includes leverage the object properties of our styles
3. Inline Style - Conditional Styles Based on Props
4. Vanilla CSS Approach
5. Dynamic Classes - CLSX Approach
6. CSS Modules Approach

## React Components and Props Notes

1. Props can only be passed from parent to child
2. Props make data available from parent to child component without needing to
   import the data per file
3. Meaning we just need to import it in the parent and props take care of
   passing it down to its children
4. Props are considered as the parameter of the React functional component
5. Classes in React components are assigned through the "className" keyword

## Naming Convention

1. React Functional components must be in PascalCase --> all first letters of
   each word is capital
2. All css declarations/classes must be in camelCase --> first letters are
   capital letters starting on the second

## HTML + CSS block

1. uses kebab-case for class naming
2. however this is not recommended in React
