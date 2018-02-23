import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import MonsterGrid from 'mhw-gear-wishlist/components/Views/MonsterGrid';
import MonsterDetailsView from 'mhw-gear-wishlist/components/Views/MonsterDetailsView';

const App = StackNavigator({
  MonsterList: { screen: MonsterGrid },
  MonsterDetail: { screen: MonsterDetailsView },
},
{
  initialRouteName: 'MonsterList',
});

export default App;