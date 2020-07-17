const lancelotBackendUrl = "https://3000-dfa082e9-3e28-46d8-b397-ea1dcc78a8d9.ws-us02.gitpod.io";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			business_id: null,
			visitors: [],
			data: [
				{ name: "18-29", positive: 10 },
				{ name: "30-39", positive: 20 },
				{ name: "40-49", positive: 30 },
				{ name: "50-59", positive: 40 },
				{ name: "60-64", positive: 50 },
				{ name: "65-69", positive: 60 },
				{ name: "70-79", positive: 60 },
				{ name: "80+", positive: 70 }
			],
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
				// console.log("body", body);
				if (response.status == 200) {
					// console.log("test");
					setStore({ token: body.jwt, businessId: body.business_id });
				} else setStore({ token: null, businessId: null });
			},
			getChartData: async () => {
				const response = await fetch(
					"https://3000-f885a706-2244-4bc5-b7e3-2b7012ef368b.ws-us02.gitpod.io/render-bar-chart"
				);

				const data = await response.json();
				if (response.status == 200) setStore({ data: data });
				else setStore({ data: [] });
			},
			setAgeRange: ageRange => {
				const currentStore = getStore();
				setStore({
					visitor: {
						...currentStore.visitor,
						ageRange: ageRange
					}
				});
			},
			checkVisitor: async email => {
				const response = await fetch(
					"https://3000-f885a706-2244-4bc5-b7e3-2b7012ef368b.ws-us02.gitpod.io/visitor"
				);

				const data = await response.json();
				if (response.status == 200) setStore({ visitors: data });
				else setStore({ visitors: [] });
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