import AsyncRoute from '../../generators/AsyncRoute';
import Component from './component';
import reducers from './modules/reducers';
import sagas from './modules/sagas';


const KEY = 'AsyncRoute';


export default AsyncRoute(Component, KEY, reducers, sagas);
