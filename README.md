# Namaste React 🚀

# Parcel 🚀
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - Written in C++
- Faster Builds - Caching
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - supports older browsers
- Diagnostics
- Error Handling
- Host on HTTPS
- Tree Shaking - remove unused code
- Different dev and production bundles

# Two types of Export/Import🚀
-Default
export default Component;
import Component from "path"

-Named
export const Header()
import {Header} from "path"

# React Hooks
Normal JS Utility Function
-useState() -> Superpowerful state variable in react for creating local state variables
-useEffect() -> 1. When no array is passed, will be called everytime my component re-renders.
                2. [] When empty array is passed, will be called only once while initial rendering.
                3. [passed some dependencies] only called when the dependency has some changes.
