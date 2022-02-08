// 4. Children prop
// Create a Wrapper component in the components folder
// Return <section></section> from this component
// Use this in App.js
// Make it possible to render children between the <Wrapper></Wrapper> component. Use (props.children) in the <Wrapper> component.

// Ex. <Wrapper><Title title="Test" /></Wrapper> should render the content of <Title>

export default function Wrapper({ children }) {
  return <section className="flex">{children}</section>;
}
