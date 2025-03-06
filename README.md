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

# React Hooks🚀
Normal JS Utility Function
-useState() -> Superpowerful state variable in react for creating local state variables
-useEffect() -> 1. When no array is passed, will be called everytime my component re-renders.
                2. [] When empty array is passed, will be called only once while initial rendering.
                3. [passed some dependencies] only called when the dependency has some changes.

# 2 types of Routing in Web Apps🚀
- Client Side Routing
- Server Side Routing
 

# Redux Toolkit🚀
- Install Libraries - @reduxjs/toolkit and react-redux
- Build our store
- Connect store to our app
- Slice(cart slice)
- Dispatch action
- Selector

# Types of testing(developer)🚀
- Unit Testing -> Testing one specific component
- Intergration Testing -> Multiple components talking to each other and testing by code
- End to End Testing -> Testing the application as soon as user lands on the page and user exiting the page.

# Setting up Testing in our app🚀
- Install React Testing Library
- Install Jest
- Install babel dependencies
- Configure babel
- Configure parcel config file to disable default babel transpilation
- Jest configuration - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in the test cases.
- Include @babel/preset-react
- npm i -D @testing-library/jest-dom
