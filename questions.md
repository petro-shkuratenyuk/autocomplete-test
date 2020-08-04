 * What is the difference between Component and PureComponent? give an example where it might break my app.
 - PureComponent does shalow comparison of its props/state and prevents re-render if nothing chenged. It might braek the applications behaviour if some of its children is impure because childrens re-render will be prevented as well
 
 * Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
  - All Context.Consumer will be re-render on Context value change, regardless of their ShouldComponentUpdate, but Context should not be used for data which updates often

  * Describe 3 ways to pass information from a component to its PARENT.
   - Pass onChange callback from parent to child
    - Via third-party state-management libraries (such as REDUX)
    - Via localStorage, sessionStorage,React.Context

   * Give 2 ways to prevent components from re-rendering.
    - use PureComponent or React.memo
    - implement Component's shouldComponentUpdate hook

   * What is a fragment and why do we need it? Give an example where it might break my app.
    - React.Fragment is a special tag which allows to return several elements/components without extra wrapper

  * Give 3 examples of the HOC pattern.
   - withRouter from react-router
   - reduxForm - from redux-form
   - connect from react-redux
   
   * List a few ways styles can be used with components.
    - inliye styles
    - styling via class, id, etc.
    - styled components