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
			]
		},
		actions: {
			signup: async (business_name, address, phone_number, email, password) => {
				const response = await fetch(
					"https://3000-f885a706-2244-4bc5-b7e3-2b7012ef368b.ws-us02.gitpod.io/business",
					{
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
					}
				);
				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},
			login: async (email, password) => {
				const response = await fetch(
					"https://3000-c0f8905b-5e5c-4fc3-a510-7f2618865c6e.ws-us02.gitpod.io/token",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: email,
							password: password
						})
					}
				);
				const body = await response.json();
				if (response.status == 200) setStore({ token: body.jwt });
				else setStore({ token: null });
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
