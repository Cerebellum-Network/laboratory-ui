import AccountTransactions from "../containers/accountTransactions/AccountTransactions";

interface RouteItem {
  link: string,
  component: any,
}

interface Routes {
  [key: string]: RouteItem,
}

const routes: Routes =  {
  ACCOUNT_TRANSACTIONS: {link: '/account-transactions', component: AccountTransactions},
};

export default routes;
