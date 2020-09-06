import HomePage from 'layouts/Pages/HomePage'
import ExchangeRate from 'layouts/Pages/ExchangeRate'
import ManageFinances from 'layouts/Pages/ManageFinances'


const links = [
    { id: 1, name: "start", path: "/", exact: true, component: HomePage },
    { id: 2, name: "manage-finances", path: "/manage-finances", component: ManageFinances },
    { id: 3, name: "exchange-rate", path: "/exchange-rate", component: ExchangeRate }
]



export default links