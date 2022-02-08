// 1. Basic Component
//Create a component called MyComponent in the components folder and use it to render <h1>My First Component</h1>
//Use MyComponent in App.js

// 2. Basic Prop
//Add a "title" prop on MyComponent. Use it so that MyComponent render <h1>It Works</h1>

/* Oppgave 3 */
import MyTitle from './Title';

export default function MyComponent({ title }) {
  return (
    <div>
      <MyTitle title={title} />
    </div>
  );
}
