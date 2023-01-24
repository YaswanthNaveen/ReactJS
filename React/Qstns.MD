Interview qstns
# what is react ?

  --react is  javascript library used to build user interfaces, front end applications . Most popular like netflix is also using it

# why react ?

  ---its a library so need of particular code structure
  virtual dom
  state management - so focus on bussiness logic
  community
  Writing integration and unit tests can be made smother by using tools
  debugging
  React is easy to integrate with other frameworks like Meteor, Angular, etc
  Also supports Server side rendering

# Why ClassName ?
  bz keyword

# One Root element to Returned by JSX ?

  - so need to wrap under one element

# Diff b/w SPA & MPA ?

    In SPA , only 1 html page will be there and content will re render on client
    In MPA , multiple pages will be there and content will be rendered on server

    many ReactDOM.render() call will be at MPA while its 1 in SPA

# Default keyword restriction in export ?
  If we have default keyword in export , we can name the module whatever we want during import.
  If we not use default keyword , that is named export so we need to use exact same name in the import

# Why we need efficient workflow ?
  - because we will be more productive by getting more optimized and using next gen features

     Done due to  - dependency tool
                   - bundler ( complier)
                  - development server (web pack dev server)

# Why we need creat-react-app tool ?
    with use of this , we can create efficent build workflow project for react

# What is service worker wil do in react app?
  service worker  gives us the progressive web app out of the box for us . This is used to pre cache the scripts files . 
    Service workers ensure that the network is not a bottleneck to serve new requests.
    It gives offline experiences.
    They enable notification and push APIs

# What is react components ?
  React component is combination of react elements which also called as custom html elements . Combination of react components gives u react application
  Its very important that all react elements should start with caps letter otherwise it thinks as native html elements

# Why we dont need to specify the .js extension at the end ?
 This will automatically added by the build workflow

# Difference between state & function component ?

 In state component , 

 1) state can be defined only once whether it is object (if multiple object is necessary) or primitive 
 2) Here setState method can update single item by passing it & other items will be retained as it is


 In Functional component ,

 1) state can be defined multiple time with different state items and it also can take primitive or objects
 2) Here useState should have all state items in it while updating otherwise it be lost.


# Why need to use functional component over class components ?
 
 Because function components is easy to understand & write since it a normal javascripts function & also we can use class functionalities using hooks. 
  we should maintain no internal logic in functional components & also they are presentation means they should present the content with data they passed . 
  minimum number of class components with state are recommended .
  We can prefer functional component .

#  Controlled vs unControlled components ?

   In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself. To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

# Life Cycle of class based components for creation ?

  1) constructor -- intialize state
  2)  static getDerivedStateFromProps  --- sync state 
  3) render --- which invokes child component life cycle . after completing all those ********
  4) componentDidMount -- https calls if any to trigger re render

# Life Cycle of class based components for updation ?

  1) static getDerivedStateFromProps 
  2) shouldComponentUpdate -- to prevent unneccessary updates by blocking the life cycle process
  3) render --- which invokes child component life cycle . after completing all those
  4) getSnapshotBeforeUpdate - this gives previous state & prop , if this is used then "componentDidUpdate" should be used for sure , 
  5) componentDidUpdate

# How can we add event listerner/handlers to the react elements ?
 
    Here we use typical camelCase like onClick instead of onclick and value binded in the  { <function reference>}
    <button 
      className={[cssClasses.Button,cssClasses[props.btnType]].join(' ')}
        disabled={props.disabled}  
      onClick={props.clicked}>{props.children}</button>

# After which version React hooks are available ?

   All >=react 16.8

# How can we pass the function reference from one component to another ?
    
    <Person clickHandler={this.handler}> -- in first component
    <button onClick={this.props.clickHandler}> -- in second component

    if we want to pass some value in first component , we can do 2 ways
       1) bind function 
              <Person clickHandler={this.handler.bind(this,arg1)}>
       2) inline function call
              <Person clickHandler={()=>this.handler(arg1)}>

    but recommend way is bind method  if we dont want event argument
      

# In React evrything is javascript , we can make use of all functionalities without any restriction like other frameworks - vue , angular 

# ---no need ngfor for list , we can do by map method

# Need of Key attribute when we render a list of elements ?

  Because react uses a virtual dom approach for re rendering  so when we use list rendering without key it will difficult for virtual dom approach to check which got . 
    So by adding key attribute . it helps reacts to work in an efficient way for re rendering behind scenes

# Issue with normal css with css file extension ?
  When we use this kind of styling . it will be global css applied for entire application

# What is the issue with inline style ?
    Its very hard to write inline style & not more reusable
    We can't use psuedo selectors and media queries

    But we can do using 3rd party package called "Radium" to use these psuedo selectors and media queries

# Few optimization techniques

  Perfomance optimization by shouldComponentUpdate & useEffect with props as dependencies & also by pure component in class components 
  React.memo & pure component usage will just memoize the component by taking a snapshot . during re render if same props it will return this snapshot

  if ur interested in check if few props change in stoping render cycle use shouldComponentUpdate instead of react.memo & pure Component -- using these it will check all props & state

  This need to added only when there is less dependency on parent c0mponent

# Issue with unknown props ?
  Pass it dynamically with spread operator like <Person {...props} />

# Check usage of context api once


# What to takecare when we add assests (images) ?
    We need to declare them by exporting it & use it . So that webpack will take care of those when bundling


# Optimization ways ?

  1) using shouldComponentUpdate , react.memo , pure component to prevent unncessary rerendering 
  2) make more functional components than state components by keeping logic in state components
  3) In big application , use redux for central state management for sharing data across mutliple components
  4) use prop types if there project is shared between development team  or given to third party people
  5)  In big application , load components in lazy loading manner instead of loading evrything at a time . load when required and only load those which are essential
  6) for functional components , while making use of react.memo , use usecallBack,useMemo along with that for not recreation of function and value .
  7) state colocation , fixing slow renders , fixing unneccessary renders


# Use componentDidUpdate carefully so that it wont cause infinite render cycles by adding some conditions

# Why we use LINK & NAVLINK instead of anchhor tags ?

    If we use anchor tags the page will get reloaded not re rendered so that previous application state will be lost.
    But using LINK & NAVLINK , it will get re rendered

# How to navigate to other pages ?
  
    1) use navlinks in headers or in content render also 
    2) within components we can use route props like history  & also we can use redirect

# Ways of passing the route props to underneath components ?

    1) passing through props from parent
    2) using withRouter HOC 

# Why we use exact in the NAVLINK ?

    purpose exact in the navlink is because it gives styling only route which exactly matches otherwise all other links which has same prefix will get active style styling

# How nested routes will work ?

    When using nested routes like in main components of main route page having again some routes .
    then it will render lexically means when we wnat to render the nested routes first it should render the main route then again after that it should match inner route means its a relative path for nested route

    while rendering nest route component , parent component wont be re rendered . only it nested will mount

    One more important things are like 
      1) route should not collide with each other with base prefix . so should be handled carefully
      2) So when we want to navigate to only the nested component . parent component wont be re mounted because its already mounted . In order to fix this , we need to write logic in "componenDidUpdate" in parent to re render the nested component


#  Reducers are pure functions which has access to old state & get type & payload to update . More important it synchornous so it wont excute async code . So how to make asynchronous nature

    Inorder to acheive that we use redux thunk middleware to execute async code  ---- impt


# Redux is third party library so we need export everything from redux package like createStore,applyMiddleware,combineReducers,compose
   
    Now in order to connect the redux to react --- we need to import from 'react-redux' like provider , connect


# Why we need to use action types variables as separate ?

      Because , action types are very important . even small type can lead to problem so if we keep together to have a clear look

# Why combine reducer has one more level of nesting ?

    Y bz , if we have same state item in two reducer then it will cause name conflicts . 

# Types of state ?

    Local data      ---  local state  --- ex: UI data like modal open
    persistent data ---   server store & get loaded to redux  -- ex: users data
    Client data ---------  redux          --- ex : authentication

# Redux dev tools is something which we can use to see the store visually how its getting updating . react dev extensions is to see component tree & their local state.

# default compose function provided by redux is to combine the enhancers during redux store

# Why we need to store token in local storage during authentication ?

    Bz if we store appliaction state or in redux . If reloaded , state will be lost so token as well . Thats y we need to use local storage for this token storing

# Is that safe to store token in local storage ?

      No , we can get cross site scripting attacks which we can access local storage . 
      But react by default will prevent these attacks so we use that in react application

# What if u want to use route props along with redux?

      wrap evrything with withRouter HOC
      export default withRouter(connect(mapStatetoProps,mapDispatchtoProps)(withErrorHandler(BurgerBuilder, axios)));

# What are the testing tools required to write & run unit test ?

    we need 
      1) test runner - which executes tests and provides validation library 
        By default , create-react-app provides us jest as test runner

      2) Testing utilities - "simulates" the react app (mounts components , allows you to dig into the DOM )
            React test utils or Enzyme


# When to use useMemo & useCallback ?

    These are recommended only when we pass props which are other than primitivies like arrays,function  to memoized component . Reason because when we pass without hooks , it will get new reference and prop check will fail for them .
    Also if the component passed is very simple . better not to check  

# useEffect replacement of componentDidUpdate has any difference ?
   componentDidUpdate will runs only on updates but useEffect will runs on updates along with mounting

# How can we use getDerivedStateFromProps in class based components ?
   using static keyword before method

# -to use componentWillmount we cant use useEffect , but we can directly run that inside functional component before returning so that it will make same of componentWillMount ------

# -we should be very honest &  careful when declaring dependencies in useEffect

# What is event delegation ?

    Event delegation is a performance optimization method in the world of Javascript. Let's say you have an unordered list <ul> with 1000 list items, and you want to do something each time a list item is clicked. With event delegation approach, instead of adding one event listener to each of the child items, you only add 1 event listener to the parent <ul>. It is a neat approach.

# What is event pooling ?
  
    It means that the properties of the event only exist while the callback is active. Adding async to the mix, or storing the event for future use, will fail.

    This is easily observed if you try console.log(event) inside an event handler. By the time you inspect the object, most properties on the event object will be null. If you stop execution of the script with debugger; immediately after logging the value, you can inspect the values.

    class MyComponent extends React.Component {
        handleClick (e){
        console.log('The event currentTarget is', e.currentTarget); // DOM element
        setTimeout(() => {
        console.log('event.currentTarget was', e.currentTarget); // null
      }, 1000)
      }
      render () {
        return <button onClick={this.handleClick}>Fire event!</button>
      }
    }
    This will log a DOM element when you click the button, and null a second later. For reasons beyond me, event.target is still stored until the next event occurs, and not nullified.

  ***React 17 removes the “event pooling” optimization from React. It doesn’t improve performance in modern browsers and confuses even experienced React users***

# What are synthetic events in React?

    Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.

# What are the three principles that Redux follows?

    1)Single source of truth: The state of the entire application is stored in an object/ state tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.

    2)State is read-only: The only way to change the state is to trigger an action. An action is a plain JS object describing the change. Just like state is the minimal representation of data, the action is the minimal representation of the change to that data. 

    3)Changes are made with pure functions: In order to specify how the state tree is transformed by actions, you need pure functions. Pure functions are those whose return value depends solely on the values of their arguments.


# What are the features of ReactJS?

    -- Virtual DOM
    -- UniDirectional flow of data
    -- compile errors
    -- Supports server-side rendering


#  How is React different from AngularJS?

    -- library         | framework
    -- v               | MVC
    -- Virtual Dom     | Real Dom
    -- One way binding | two way binding
    -- compile error   | Run time error

# What do you know about Flux? 
   
   Same kind of redux but it can have multiple store whereas redux has single store

# What are the limitations of React?

   - React library is huge  and not a framework
   - JSX

#  How is React different from Angular?
    React vs Angular

        TOPIC	                     REACT	                  ANGULAR
    1. ARCHITECTURE	          Only the View of MVC	    Complete MVC
    2. RENDERING	          Server-side rendering	    Client-side rendering
    3. DOM	                  Uses virtual DOM          Uses real DOM
    4. DATA BINDING	          One-way data binding	    Two-way data binding
    5. DEBUGGING	          Compile time debugging	Runtime debugging
    6. AUTHOR	              Facebook	                Google

# What are the different phases of React component’s lifecycle?

      There are three different phases of React component’s lifecycle:

      Initial Rendering Phase:   
            This is the phase when the component is about to start its life journey and make its way to the DOM.
      Updating Phase: 
            Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.
      Unmounting Phase:
              This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.

# How Does React works 

     React creates a virtual DOM. When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.

# What is JEST
  
  Jest is a JavaScript unit testing framework made by Facebook based on Jasmine and provides automated mock creation and a jsdom environment. It's often used for testing React components.

# Where in a React component should you make an AJAX request?  

   componentDidMount is where an AJAX request should be made in a React component. we can do in componentDidUpdate but there we need to call based on condition so that it wont go into infinite loop

# What is diff b/w state & props ?

    The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.

    Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data - callback functions may be passed in as props.

# What is  the use of refs ?

    Refs provide a way to access DOM nodes or React elements created in the render method. They should be avoided in most cases, however, they can be useful when we need direct access to DOM element or an instance of a component.

      There are a few good use cases for refs:
      Managing focus, text selection, or media playback.
      Triggering imperative animations.
      Integrating with third-party DOM libraries.

      Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.

      Ex:
        class MyComponent extends React.Component {
              constructor(props) {
                  super(props);
                  this.myRef = React.createRef();  }
              render() {
                  return <div ref={this.myRef} />;  }
              }


# What does it mean for a component to be mounted in React?

    It has a corresponding element created in the DOM and is connected to that

# What are Fragments?  

    It's common pattern in React which is used for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM

      render() {
              return (
                  <React.Fragment>
                  <ChildA />
                  <ChildB />
                  <ChildC />
                  </React.Fragment>
              );
              }

      There is also a shorter syntax:
          render() {
              return (
              <>
                  <ChildA />
                  <ChildB />
                  <ChildC />
              </>
              );
          }

          BUt we cant put key attribute to shorter syntax 

# What is the purpose of callback function as an argument of setState? 
    
    The callback function is invoked when setState finished and the component gets rendered. Since setState is asynchronous the callback function is used for any post action.
    Note: It is recommended to use lifecycle method rather this callback function. 
    
    setState({name: 'sudheer'}, () => console.log('The name has updated and component re-rendered'));

# What is the purpose of using super constructor with props argument?  

    A child class constructor cannot make use of this reference until super() method has been called. The same applies for ES6 sub-classes as well. The main reason of passing props parameter to super() call is to access this.props in your child constructors

    Passing props:

            class MyComponent extends React.Component {
            constructor(props) {
                super(props);
                console.log(this.props);  // Prints { name: 'sudheer',age: 30 }
            }
        }

      Not passing props:
        
            class MyComponent extends React.Component {
            constructor(props) {
                super();
                console.log(this.props); // Prints undefined
                // But Props parameter is still available
                console.log(props); // Prints { name: 'sudheer',age: 30 }
            }

            render() {
                // No difference outside constructor
                console.log(this.props) // Prints { name: 'sudheer',age: 30 }
            }
        }


# What are some limitations of things you shouldn't do in the component's render method?

    You cannot modify the component's state (with setState), nor interact with the browser (do that in componentDidMount). render should be a pure function.
    must enclosed with one parent element
    keys should be used for rendering list

# Why fragments are better than container divs?  
 
   It’s a tiny bit faster and has less memory usage (no need to create an extra DOM node). This only has a real benefit on very large and/or deep trees, but application performance often suffers from death by a thousand cuts. This is one cut less

# What is prop drilling and how can you avoid it?  
  
  Prop drilling is passing the props to nested childrens from parent component . We can solve this using redux, context api

# What is Forward Ref ?
  
  Ref forwarding is a technique for automatically passing a ref through a component to one of its children. This is typically not necessary for most components in the application. However, it can be useful for some kinds of components, especially in reusable component libraries. 

# Differences between Shadow DOM and Virtual DOM

    The only thing which is common for both is that they help with performance issues. Both create a separate instance of the Document Object Model; besides this, both concepts are different. Virtual DOM is creating a copy of the whole DOM object, and Shadow DOM creates small pieces of the DOM object which has their own, isolated scope for the element they represent.

# ShadowDom ?

  shadow DOM is a tool used to build component-based apps and websites. Shadow DOM comes in small pieces, and it doesn’t represent the whole Document Object Model. We can see it as a subtree or as a separate DOM for an element.

# What is ReatDOM ?

  ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing the following methods and a few more. 

      render()
      findDOMNode()
      unmountComponentAtNode()
      hydrate()   
      createPortal()

# Why React uses className over class attribute?

    class is a keyword in javascript and JSX is an extension of javascript. That's the principal reason why React uses className instead of class . ... See Javascript Keywords + Reserved Words. The fact that a token is a keyword means that we cannot use it in some expressions

# Lifting State up in ReactJS ?
  
   Lifting up the State: As we know, every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.

    Time to use Lift up the State: If the data in “parent and children components” or in “cousin components” is Not in Sync.

# What is strict mode ?

    StrictMode is a tool for highlighting potential problems in an application. Like Fragment , StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants. Note: Strict mode checks are run in development mode only; they do not impact the production build.

# What would be the common mistake of function being called every time the component renders?

  mostly people get confused while calling a function vs passing the function as a parameter in react jsx code
  Forgetting () => and writing onClick={alert('click')} is a common mistake, and would fire the alert every time the component re-renders


# What is the difference between HTML and React event handling?

    In HTML, the attribute name is in all lowercase and is given a string invoking a function defined somewhere:

    <button onclick="handleClick()"></button>
    In React, the attribute name is camelCase and are passed the function reference inside curly braces:

    <button onClick={handleClick} />
    In HTML, false can be returned to prevent default behavior, whereas in React preventDefault has to be called explicitly.

    <a href="#" onclick="console.log('The link was clicked.'); return false" />
    function handleClick(e) {
    e.preventDefault()
    console.log("The link was clicked.")
    }
    Extra Info
    HTML uses lowercase, React uses camelCase.

# What are Error Boundaries ?
  
   Error boundaries are React components that catch JavaScript errors anywhere in their child component tree. They can log errors and display a fallback UI to replace the component tree that has crashed. They are similar to try-catch statements in your code, but surround page elements instead

# What is Components Composition in React?

   In React, composition is a natural pattern of the component model. It's how we build components from other components, of varying complexity and specialization through props. Depending on how generalized these components are, they can be used in building many other components

# Which is preferred option with in callback refs and findDOMNode()?

    It is preferred to use callback refs over findDOMNode() API. Because findDOMNode() prevents certain improvements in React in the future.

# Can you force a React component to rerender without calling setState?  

    In your component, you can call this.forceUpdate() to force a rerender. but not recommended
    One thing to be aware of is that forceUpdate() will skip shouldComponentUpdate() (which by default just returns true).

    Calling forceUpdate will cause render() to be called on the component, skipping shouldComponentUpdate(). This will trigger the normal lifecycle methods for child components, including the shouldComponentUpdate() method of each child. React will still only update the DOM if the markup changes

# When component re renders ?

    its shouldComponentUpdate() returns true
    its own internal state changes
    it receives new props
    the context it hooks into changes
    it’s a class component that calls forceUpdate()

# How would you go about investigating slow React application rendering?

   Check if we have this below issues
       State colocation  -- make state as close & independent as possible
       Fixing slow renders --  useCallback -use this when big computation is there within component
       Fixing unneccesary re renders -- avoid it in child component using React.memo


# What is pure component ?
  
  A React component is considered pure if it renders the same output for the same state and props. 

# Do Hooks replace render props and higher-order components?  
   
   Yes , but we should be clear what need to replace & check if it neccesary


# What is the difference between Flow and PropTypes?

    Flow is a static analysis tool which uses a superset of the language, allowing you to add type annotations to all of your code and catch an entire class of bugs at compile time.

    PropTypes is a basic type checker which has been patched onto React. It can't check anything other than the types of the props being passed to a given component.

# What is the difference between using constructor vs getInitialState in React?

    The constructor and getInitialState both in React are used to initialize state, but they can’t be used interchangeably. The difference between these two is we should initialize state in the constructor when we are using ES6 classes and define the getInitialState method when we are using React.createClass (ES5 syntax). So the difference between constructor and getInitialState is the difference between ES6 and ES5 itself.

    We use getInitialState with React.createClass and constructor is used with React.Component.

# Why doesn't this.props.children.map work? 

    this.props.children is an opaque data structure. It can be either an array or a single element. In your case, this.props.children is probably a single element, which is why the .map() method is undefined.

    You should use the React.Children API when manipulating the children prop.

# How to create props proxy for HOC component?  

  Higher Order Component - Props proxy
  This basically helps to add/edit props passed to the Component.
        function HOC(WrappedComponent) {
        return class Test extends Component {
            render() {
            const newProps = {
                title: 'New Header',
                footer: false,
                showFeatureX: false,
                showFeatureY: true
            };

            return <WrappedComponent {...this.props} {...newProps} />
            }
        }
        }

# How to conditionally add attributes to React components?

   We can conditionally add attributes to React components with the following approaches:

        Approach 1: 

        Evidently, with some attributes, React is smart enough to omit the attribute if the value you pass to it is not truthy. For example:

        state= {
        disabled: false,
        required: true
        }

        return (
        <input type="text" disabled={disabled} required={required}  />
        );

        Above Syntax will result in the following output:

        <input type="text" required>

# Does React re-render all components and sub components every time setState is called?  
  
  Yes , but component which has change in thier state or props or context

# How events are handled in react ?

  Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences: React events are named using camelCase, rather than lowercase. With JSX you pass a function as the event handler, rather than a string.

# When would you use StrictMode component in React?

   You can use the React. StrictMode built-in component to enable a set of checks that React performs and warns you about. One of the main use cases of this component is to be used as an automated best practices, potential problems and deprecations check.

# What's the difference between useCallback and useMemo in practice?
  
   The main difference between the two is that ‘useCallback’ returns a memoized callback and ‘useMemo’ returns a memoized value that is the result of the function parameter.

    If you have to process a lot of data, ‘useMemo’ is the perfect Hook as it will do the work once at the first render and then return a cached version on every other render.

    ‘useCallback’, however, is used differently. Take for example a parent component that often re-renders. Inside the parent, we have a child component that takes a function-prop. At each re-render, the Child will re-execute its function prop uselessly. However, if you pass ‘useCallback’ as a prop with a dependency array, it resolves the issue because the function will be executed only when the dependency changes. Every other re-render will then get a cached function.

    you should not use ‘useCallback’ and ‘useMemo’ for everything. ‘useMemo’ should be used for big data processing while ‘useCallback’ is a way to add more dependency to your code to avoid useless rendering.
 
    useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.

  *** Since JavaScript has first-class functions, useCallback(fn, deps) is equivalent to useMemo(() => fn, deps) ***


# Can you do Components Inheritance in React?  

  Yes , but use at only on intial component for class based components
  React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components

# What is reselect and how it works?

  Reselect is a simple library for creating memoized, composable selector functions. Reselect selectors can be used to efficiently compute derived data from the Redux store.

# How does React renderer work exactly when we call setState? 

   Reconcilation process - virtual Dom (diff algorithm)

# How can I force a component to re-render with hooks in React?

   This is possible with useState or useReducer, since useState uses useReducer internally:

const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);

# How do you write comments inside a JSX tree in React?

    Comments must be wrapped inside curly braces {} and use the /* */ syntax.

              const tree = (
              <div>
                  {/* Comment */}
                  <p>Text</p>
              </div>
              )

# What are inline conditional expressions?

      Since a JSX element tree is one large expression, you cannot embed statements inside. Conditional expressions act as a replacement for statements to use inside the tree.

      For example, this won't work:

      function App({ messages, isVisible }) {
        return (
          <div>
            if (messages.length > 0) {
              <h2>You have {messages.length} unread messages.</h2>
            } else {
              <h2>You have no unread messages.</h2>
            }
            if (isVisible) {
              <p>I am visible.</p>
            }
          </div>
        )
      }
      Logical AND && and the ternary ? : operator replace the if/else statements.

      function App({ messages, isVisible }) {
        return (
          <div>
            {messages.length > 0 ? (
              <h2>You have {messages.length} unread messages.</h2>
            ) : (
              <h2>You have no unread messages.</h2>
            )}
            {isVisible && <p>I am visible.</p>}
          </div>
        )
      }

# What is the children prop?

    children is part of the props object passed to components that allows components to be passed as data to other components, providing the ability to compose components cleanly. There are a number of methods available in the React API to work with this prop, such as React.Children.map, React.Children.forEach, React.Children.count, React.Children.only and React.Children.toArray. A simple usage example of the children prop is as follows:

    function GenericBox({ children }) {
      return <div className="container">{children}</div>
    }

    function App() {
      return (
        <GenericBox>
          <span>Hello</span> <span>World</span>
        </GenericBox>
      )
    }
    Good to hear
    Children is a prop that allows components to be passed as data to other components.

    The React API provides methods to work with this prop.

# What are portals in React?

  Portal are the recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

  ReactDOM.createPortal(child, container)
  The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.

# How to apply prop validation in React?

    When the application is running in development mode, React will automatically check for all props that we set on components to make sure they are the correct data type. For incorrect data types, it will generate warning messages in the console for development mode. They are stripped in production mode due to their performance impact. Required props are defined with isRequired.

    For example, we define propTypes for component as below:

    import PropTypes from "prop-types"

    class User extends React.Component {
      static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
      }

      render() {
        return (
          <h1>Welcome, {this.props.name}</h1>
          <h2>Age, {this.props.age}
        )
      }
    }

    Good to hear
    We can define custom propTypes
    Using propTypes is not mandatory. However, it is a good practice and can reduce bugs.

# Redux VS the React Context: Who wins?

  You can now clearly see the difference between Redux and React Context through their implementations on our project. However, Redux is far from dead or be killed by React Context. Redux is such a boilerplate and requires a bunch of libraries. But it remains a great solution towards props drilling.

  The context API with hooks is much easier to implement and will not increase your bundle size.

  However, who wins? in my opinion, for low-frequency updates like locale, theme changes, user authentication, etc. the React Context is perfectly fine. But with a more complex state which has high-frequency updates, the React Context won't be a good solution. Because, the React Context will trigger a re-render on each update, and optimizing it manually can be really tough. And there, a solution like Redux is much easier to implement.


# Code Splitting ?

  Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand.
   Using React lazy loading concept , we can acheive this 

  Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.


# New life cycle methods
  lifecycle methods recently introduced https://tkssharma.gitbook.io/react-training/day-04/lifecycle-deprecated-new-methods/new-lifecycle-methods

  static getDerivedStateFromProps(nextProps, prevState)
  getSnapshotBeforeUpdate(prevProps, prevState)


# What are Error boundaries in react

  Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them

  A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. Use componentDidCatch() to log error information.

    It has two life cycle methods - getDerivedStateFromError , componentDidCatch

# Alternative to Redux ?
   Flux , MobX

#  Hooks are introduced after which version of react ?
  16.8

# What are 2 hooks which is used to get redux state &  dispatch method into component without connect ?
   - useSelector
   - useDispatch

#  Can we connect redux outside of provider ?
  Yes , we can do as redux is a third part library which can be integrated with plain js as well
    some main methods of manual redux connection
    - store.getState().user.profile
    - store.dispatch({type:"inc", payload:1})
    - store.subscribe(handler)

    However, using connect() comes with some performance improvements and optimizations that you may not be able to implement in your application. ---- *****imp**** 

# What are portals in React and when do we need them? 
    "REACT PORTALS" which allows the component to be rendered somewhere else in the DOM instead of child of the parent component. 
    
    A Portal is an doorway to another place in the dom .In React ,portals enable you to render a component outside the parent of that component  i.e To render components directly to a specified target DOM node , Outside the parent component in the react hierarchy.

    We need to have them to resolve parent styling (z-index,overflow) conflicts which can effect child component ( Ex: modal , tooltips)

# Implement autocomplete in React ?
    https://codesandbox.io/s/8lyp733pj0?file=/src/Autocomplete.jsx

 Why are String Refs legacy?  --- need to see
 Understanding Angular Ivy: Incremental DOM and Virtual DOM ---> need to see
React Fiber ---> need to see





