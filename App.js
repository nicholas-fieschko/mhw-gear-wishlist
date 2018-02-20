import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import MonsterGrid from 'mhw-gear-wishlist/components/Views/MonsterGrid';
import MonsterDetailsView from 'mhw-gear-wishlist/components/Views/MonsterDetailsView';

export default App = StackNavigator({
  MonsterList: { screen: MonsterGrid },
  MonsterDetail: { screen: MonsterDetailsView },
},
{
  initialRouteName: 'MonsterList',
});
