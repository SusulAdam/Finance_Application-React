import HomePage from 'layouts/Pages/HomePage'
import ExchangeRate from 'layouts/Pages/ExchangeRate'
import ManageFinances from 'layouts/Pages/ManageFinances'


const links = [
    { id: 1, name: "start", path: "/", exact: true, component: HomePage },
    { id: 2, name: "manage-finances", path: "/manage-finances", component: ManageFinances },
    { id: 3, name: "exchange-rate", path: "/exchange-rate", component: ExchangeRate }
]

urlAPI = `https://api.ratesapi.io/api/latest?base=${this.state.leftCurrenct}&symbols=${this.state.rightCurrency}`


export { links, urlAPI }