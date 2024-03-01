import MenuItemList from './MenuItemList/MenuItemList';
import salads from '../data/salads.json';

export const App = () => {
  return (
    <div>
      <MenuItemList salads={salads} />
    </div>
  );
};
