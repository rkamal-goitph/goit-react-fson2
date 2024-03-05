import MenuItemList from './MenuItemList/MenuItemList';
import Menu from './Menu/Menu';
import salads from '../data/salads.json';

export const App = () => {
  return (
    <div>
      <Menu title="Salads Menu">
        <MenuItemList salads={salads} />
      </Menu>
    </div>
  );
};
