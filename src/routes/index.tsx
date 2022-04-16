import { RouteProps } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard';
import { List as CategoryList } from '../pages/category/List';

export interface MyRouteProps extends RouteProps {
  name: string
  label: string
  Component: React.ComponentType
  exact: boolean
}

export const routes: MyRouteProps[] = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    path: '/',
    Component: Dashboard,
    exact: true
  },
  {
    name: 'categories.list',
    label: 'Listar Categorias',
    path: '/categories',
    Component: CategoryList,
    exact: true
  },
  {
    name: 'categories.create',
    label: 'Criar Categoria',
    path: '/categories/create',
    Component: CategoryList,
    exact: true
  },
  {
    name: 'categories.edit',
    label: 'Editar Categoria',
    path: '/categories/:id/edit',
    Component: CategoryList,
    exact: true
  }
]
