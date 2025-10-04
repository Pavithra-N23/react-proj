// 🔑 Core React Hooks & Use Cases
// 1. useState

// What: Manages local state inside functional components.

// Use cases:

// Toggle UI elements (modals, dropdowns).

// Track form input values.

// Counter logic.

// const [count, setCount] = useState(0);

// 2. useEffect

// What: Handles side effects (data fetching, subscriptions, DOM updates).

// Use cases:

// Fetching data from APIs.

// Listening/unsubscribing to events.

// Syncing state with localStorage.

// useEffect(() => {
//   document.title = `Count: ${count}`;
// }, [count]);

// 3. useContext

// What: Access global values without prop drilling.

// Use cases:

// Theme switching (dark/light).

// User authentication state.

// Global language/locale settings.

// const theme = useContext(ThemeContext);

// 4. useReducer

// What: Alternative to useState for complex state logic.

// Use cases:

// Complex forms with multiple fields.

// Shopping cart logic.

// State transitions (loading → success → error).

// const [state, dispatch] = useReducer(reducer, initialState);

// 5. useRef

// What: Provides a way to reference DOM nodes or store mutable values that don’t trigger re-renders.

// Use cases:

// Focusing an input element.

// Storing previous state values.

// Managing timers/intervals.

// const inputRef = useRef(null);

// 6. useMemo

// What: Memoizes expensive computations.

// Use cases:

// Optimize performance with heavy calculations.

// Prevent recalculating filtered/sorted lists.

// const sortedList = useMemo(() => sortList(list), [list]);

// 7. useCallback

// What: Memoizes functions to prevent unnecessary re-renders of child components.

// Use cases:

// Passing stable callback props to child components.

// Event handlers in components with React.memo.

// const handleClick = useCallback(() => setCount(c => c + 1), []);

// 8. useLayoutEffect

// What: Runs synchronously after DOM mutations but before the browser paints.

// Use cases:

// Measuring DOM elements before rendering.

// Performing animations.

// 9. useImperativeHandle

// What: Customizes the instance value exposed when using ref with forwardRef.

// Use cases:

// Exposing specific methods from child → parent.

// Controlling child components programmatically.

// 10. Custom Hooks

// What: Reusable hooks combining logic from multiple hooks.

// Use cases:

// useFetch for API calls.

// useAuth for authentication logic.

// useForm for form handling.

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   useEffect(() => { fetch(url).then(r => r.json()).then(setData); }, [url]);
//   return data;
// }


// ✅ Rule of thumb:

// useState → local state

// useEffect → side effects

// useContext → global values

// useReducer → complex state

// useRef → DOM & mutable refs

// useMemo/useCallback → performance optimization