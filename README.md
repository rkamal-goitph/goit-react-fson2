# Module 04 Lesson 07. Hooks

## Steps for Translating from Class Components to Functional Components:

1. Replace `Class Component` declaration to const `Component = () => {}` arrow
   function declaration
2. Remove the unused `extends Component` and `import {Component} from "react"`
3. Remove the `render()` method from the return statement of the component
4. Pass the components props as parameters to the Component `Component = ({prop1,
   prop2}) => ()`
5. Remove the unused `this.props.` declarations or the `this.props` destructuring
6. Replace state object with the `useState` hook
7. Remove the unused `this.state.` declarations or the `this.state` destructuring
8. Add `const` keyword to the state handlers inside the components
9. Replace side effects with `useEffect` hook
