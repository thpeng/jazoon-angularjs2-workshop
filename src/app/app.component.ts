/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home';
import {AppState} from './app.service';
import {RouterActive} from './router-active';
import {Person} from './spass';
import {Users} from './users/users.component';
import {Wikipedia} from './wikipedia/wikipedia.component';
import {Contact} from './contact/contact.component';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
  styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
    nav ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    nav li {
      display: inline;
    }
    nav li.active {
      background-color: lightgray;
    }
  `],
  template: `
    <header>
      <nav>
        <h1>Hello {{ name }}</h1>
        <h1>Hello {{ person.fullname }} </h1>
        <ul>
          <li router-active>
            <a [routerLink]=" ['Index'] ">Index</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Home'] ">Home</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Users'] ">Users</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['About'] ">About</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Wikipedia'] ">Wikipedia</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Contact'] ">Contact</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a>
      <div>
        <img [src]="angularclassLogo" width="10%">
      </div>
    </footer>

    <pre>this.appState.state = {{ appState.state | json }}</pre>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  { path: '/users', name: 'Users', component: Users},
  { path: '/wikipedia', name: 'Wikipedia', component: Wikipedia},
  { path: '/contact', name: 'Contact', component: Contact},
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  person = new Person('blubb');
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
