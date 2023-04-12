import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>1. When should you use context API?</h1>
      <p>
        Answer:{""} You should use Context API in React when you have data that
        needs to be accessed by multiple components across the component tree,
        without having to pass the data down through every level of the tree as
        props.
      </p>
      <h1>2. What is a custom hook?</h1>
      <p>
        Answer:{""} A custom hook is a JavaScript function that starts with the
        word "use" and allows you to use stateful logic in functional components
        in React. It allows you to summarize complex logic into reusable
        functions.
      </p>
      <h1>3. What is useRef?</h1>
      <p>
        Answer:{""} useRef is a React Hook that allows you to create a mutable
        reference to a DOM element or a value that persists across component
        renders. It is commonly used to access the DOM node directly or to store
        a previous value for comparison in a useEffect hook.
      </p>
      <h1>4. What is useMemo?</h1>
      <p>
        Answer:{""} useMemo is a React Hook that allows you to memoize the
        result of a function so that it is only recomputed when its dependencies
        change. This can improve performance by preventing unnecessary
        re-renders of components that rely on the result of the function.
      </p>
    </div>
  );
};

export default Blog;
