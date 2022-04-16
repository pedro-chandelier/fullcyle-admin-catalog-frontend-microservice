import { RouteProps } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard';
import { List as CategoryList } from '../pages/category/List';

interface MyRouteProps extends RouteProps {
  label: string
  Component: React.ComponentType
  exact: boolean
}

export const routes: MyRouteProps[] = [
  {
    label: 'Dashboard',
    path: '/',
    Component: Dashboard,
    exact: true
  },
  {
    label: 'Listar Categorias',
    path: '/categories',
    Component: CategoryList,
    exact: true
  }
]
