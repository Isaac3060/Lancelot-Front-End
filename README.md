# Lancelot
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello-webapp.git)

## Back-End Link
[Lancelot-Back-End](https://github.com/Isaac3060/Lancelot-Back-End)

### Requirements:
- Make sure you are using node version 10

1. Install the packages:
```
$ npm install
```
2. Create a .env file:
```
$ cp .env.example .env
```
3. Start coding!

Start the webpack server with live reload:

```
`$ npm run start` for windows, mac, linux or Gitpod.
```
### Technologies implemented in this project
- Javascript
- Python Flask
- HTML
- CSS
- React.js
- MySQL

### Description
The project is based on implementing security measures to mitigate the spread of Covid-19 in small stores or shops who might a good influx of people day to day. We created a databse using MySQL to store the information of the business, the visits and the visitors to each single store. Using python we made the Back-End so that it is able to make different method to an API. We also implemented React.js, Javascripts, HTML and CSS for the Fron-End of the Application. The application will take the temperature of the person who is visiting the business using Raspberry Pi, the information will be then sent to the database to confirm whether the person might or might not have fever, once that is done, we will also ask some questions based on the CDC regulations to determine if the chances of Covid-19 of the person visiting the store are low or high. Once the process has been completed the information of the visit will be stored in a database for the particular business in the case local health autorities neeed it. 

### Styles
You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components
Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

**Note (New changes)**: Components have been converted into functions to support the use of hooks:
* Instead of a class component, we're using a `const` function.
* Class `constructor` and `state` have been replaced by `useState()` hooks.
* `componentDidMount()` was replaced by `useEffect({}, [])` - It runs at mount thanks to the second parameter (`[]`).
* `Actions` and `Store` still work the same way.

```jsx
// Previous "Class Oriented"
export class Demo extends React.Component {
	constructor(props) {
		super(props);

		this.state = getState('code here');
	}
}

// New "Functional Oriented"
export const Demo = () => (
	const [state, setState] = getState('code here'); //using the state (if needed)
  const { store, actions } = useContext(Context); // using the context (if needed)

);
```

💡Note: There is an example using the Context API inside `views/demo.js`;

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>
}
```

## Publish your website!

1. **ZEIT:** The FREE recomended hosting provider is [http://zeit.co/](http://zeit.co/), you can deploy in 1 minutes by typing the following command:
```sh
$ npm i now -g && now
```
✎ Note: If you get asked for credentials you have to type `$ now` after login in.

![Zeit example procedure to deploy](https://ucarecdn.com/4041f971-8dd9-4dc2-84fb-4645ab42c856/)

2. **Github Pages:** This boilerplate is 100% compatible with the free github pages hosting.
To publish your website you need to push your code to your github repository and run the following command after:
```sh
$ npm run deploy
```
Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)
