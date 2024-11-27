import { createBrowserRouter } from "react-router-dom"
import Delivery from "../Components/Delivery"
import App from "../App"
import { Profile } from "../Components/Profile"
import Sidebar from "../Components/Layout_Components/Sidebar"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/delivery", element: <Delivery/>},
            {path:"/profile", element: <Profile/>}
        ]
    },
    {path:"/sidebar", element: <Sidebar/>},
])

export default router




