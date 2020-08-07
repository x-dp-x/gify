# Gify

This is a search engine for gifs. Search for gifs and save to your favourites. The favourites tab will be visible once you've favourited something.

| Search                                     | Favourites                                             |
| ------------------------------------------ | ------------------------------------------------------ |
| ![Search Page](./search.png 'Search Page') | ![Favourites Page](./favourites.png 'Favourites Page') |

## Technology Used

It makes use of technologies I've found scale particularly well, on top of React we're utilising Styled Components for styling, Formik for forms and Yup for validation. Formik arguably isn't needed with the current scope, but it's very dependable and I know it inside out (so it's quick!). We're using React Testing Library for unit-testing, I've found this pushes engineers to write more accessible implementation in some cases, and tests cover user behaviour, where enzyme's tooling promotes testing of underlying component APIs. I've also opted to use TypeScript to make the code easier to manage, read and refactor.

The plan was to store favourites to localStorage via. React Context in order to persist the favourites state between sessions, however I didn't get time to do that. Ideally saving and loading favourites would be returned from an API. I've also added a few TODO notes across the app where I wanted to take something further, or add clarification.

I've used CRA for this to get a kick-start into writing code and the building the application, please note I wouldn't do this for long-term projects where needing to eject is likely, and having greater control over build and background processes is preferable.

### Diagram of State Management

![Diagram of State Management](./diagram.png 'Diagram of State Management')

## Setup

Ensure you've got Yarn, or npm locally.

If you want to use npm, replace all mention of `yarn` in the scripts with `npm`.

Inside the root directory, you can run:

- `yarn`: install all modules

## Available Scripts

In the project directory, you can run:

- `yarn start`: starts in dev mode at [http://localhost:3000](http://localhost:3000)
- `yarn test`: runs test in watch mode
- `yarn build`: builds the app for prod to the build folder
- `yarn eject`: ejects out of CRA

## More on Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
