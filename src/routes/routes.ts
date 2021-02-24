import AccountTransactions from "../containers/accountTransactions/AccountTransactions";
import FriendBot from "../containers/friendBot/FriendBot";
import Balance from "../containers/balance/Balance"

interface RouteItem {
  link: string,
  component: any,
  title: string,
  description: string,
}

interface Routes {
  [key: string]: RouteItem,
}

const routes: Routes =  {
  ACCOUNT_TRANSACTIONS: {link: '/account-transactions', component: AccountTransactions, title: 'Block Scanner', description: 'This section allows to see list of transactions for specific public key. Please specify public key in the field below.'},
  FRIEND_BOT: { link: '/friend-bot', component: FriendBot, title: 'Friend Bot', description: 'You can send test tokens to your wallet. Specify your wallet in the form below. You can send up to 3 requests per day.' },
  BALANCE: {link: '/balance', component: Balance , title: 'Balance', description: 'You can check your account balance.'}
};

export default routes;
