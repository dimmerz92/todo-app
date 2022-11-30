import handler from './classes/handler';
import listener from './classes/listener';
import render from './classes/render';
import home from './content-layouts/home';
import './style.css';

const myHandler = handler();

listener(myHandler);

render(home(), 'mainContent');