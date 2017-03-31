import 'babel-polyfill';

import {greet} from './hello';

greet('ES6').then((res) => {
    document.getElementById('content').innerHTML += res;
});
