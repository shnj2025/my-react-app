# Dev Stack

## Description
Dev Stack is a React-based web app that helps developers explore different frontend, backend, database, language, styling, and DevOps technologies, and build their own ideal development stack. Users can browse technology cards, add their favorites to a personal "stack," and remove them as needed — all with a clean, responsive UI and instant feedback notifications.

## Technologies Used
- React (with TypeScript)
- Tailwind CSS
- React Toastify (for alerts/notifications)
- Vite (build tool)

## Features
1. **Dynamic Technology Cards** — All technology data (name, description, rating, difficulty, badge) is loaded from a JSON file using `fetch` and displayed in a responsive grid layout.
2. **Build Your Own Stack** — Users can add technologies to a personal "Your Stack" sidebar, with duplicate prevention, remove-single, and remove-all functionality.
3. **Fully Responsive Design** — The navbar, hero banner, technology cards, and footer all adapt smoothly between mobile, tablet, and desktop views.

---

## React Concept Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like code directly inside JavaScript. It's used in React because it makes components easier to read and write — instead of manually creating elements with JavaScript functions, we can describe what the UI should look like in a familiar HTML-like structure.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — they are read-only and the component receiving them cannot change them. State is data that a component manages internally and can change over time (for example, using `useState`). In this project, `stack` is state inside `TechnologyCards`, while `StackSidebar` receives that same data as a prop.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component store and update its own data, and automatically re-renders the UI whenever that data changes. In this project, I used it to track the list of technologies in the stack (`stack`), whether the data is still loading (`loading`), and whether the mobile menu is open or closed (`open`).

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets a component run code automatically when it loads (or when certain values change). I used it to fetch the `technologies.json` file as soon as the `TechnologyCards` component mounts, so the technology data loads once automatically instead of being hardcoded into the component.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` prop to efficiently track which items in a list have changed, been added, or been removed, without having to re-render the entire list. In this project, each technology and stack item uses its unique `id` as the key.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on a condition. For example, in `StackSidebar`, if `stack.length === 0`, it shows "No technologies selected yet." and an empty state message; otherwise, it renders the list of selected technologies along with the count and a "Remove All" button.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child using props — for example, `TechnologyCards` passes the `stack` array and functions like `onRemove` and `onRemoveAll` to `StackSidebar` as props. For a child to send data back up, the parent passes down a function as a prop, and the child calls that function (often with some data as an argument) — for example, clicking the ✕ button in `StackSidebar` calls `onRemove(item.id)`, which runs the `handleRemove` function defined in the parent.