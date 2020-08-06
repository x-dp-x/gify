# Gify

This is a search engine for gifs. Search for gifs and save to your favourites.

## Technology Used

It makes use of technologies I've found scale particular well, on top of React we're utilising Styled Components for styling, Formik for forms and Yup for validation. Formik arguably isn't needed here, with the current scope, but it's very dependable and I know it inside out. We're using React Testing Library for unit-testing, I've found this pushes engineers to write more accessible implementation, and tests covering user behaviour as opposed to enzyme.

The plan was to store favourites to localStorage via. React Context in order to persist the favourites state between sessions, however I didn't get time to do that. Ideally saving and loading favourites would be returned from an API.

I've used CRA for this to get a kick-start into writing code and the building the application, please note I wouldn't do this for long-term projects where needing to eject is likely, and having greater control over build and background processes is preferable.

### Plan

## Available Scripts

In the project directory, you can run:

- `yarn start`: starts in dev mode at [http://localhost:3000](http://localhost:3000)
- `yarn test`: runs test in watch mode
- `yarn build`: builds the app for prod to the build folder
- `yarn eject`: ejects out of CRA

## More on Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
