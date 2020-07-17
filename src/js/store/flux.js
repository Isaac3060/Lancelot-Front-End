const lancelotBackendUrl = "https://3000-dfa082e9-3e28-46d8-b397-ea1dcc78a8d9.ws-us02.gitpod.io";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			visit: {
				temperature: ""
			}
		},
		actions: {
			signup: async (business_name, address, phone_number, email, password) => {
				const response = await fetch(`${lancelotBackendUrl}/business`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						business_name: business_name,
						address: address,
						phone_number: phone_number,
						email: email,
						password: password
					})
				});
				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},
			login: async (email, password) => {
				const response = await fetch(`${lancelotBackendUrl}/token`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				});
				const body = await response.json();
				if (response.status == 200) setStore({ token: body.jwt });
				else setStore({ token: null });
			},
			getTemperature: async () => {
				const store = getStore();
				const response = await fetch(`${lancelotBackendUrl}/temperature`, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				});
				if (!response.ok) {
					return response.statusText;
				}
				const body = await response.json();
				setStore({
					visit: {
						...store.visit,
						temperature: body.temperature
					}
				});
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};
export default getState;