import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./src/store/reducers";
import DashboardNavigation from "./src/navigation/DashboardNavigation";

export default function App(){
    const store = createStore(reducers)
    return (
        <Provider store={store}>
            <DashboardNavigation/>
        </Provider>
    )
}