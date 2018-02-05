import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './_layout/header';
import {LoginService} from './services/login.service';
import {RegisterComponent} from './login/register';
import {LayoutHeaderComponent} from './_layout/layout-header';
import {FooterComponent} from './_layout/footer';
import {LayoutFooterComponent} from './_layout/layout-footer';
import {UserStateComponent} from './_layout/user-state/user-state.component';
import {NavBarComponent} from './_layout/nav-bar/nav-bar.component';
import {WorkBarComponent} from './_layout/work-bar/work-bar.component';
import {DataService} from './services/data.service';

export const COMPONENT_PROVIDERS = [
  LoginComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  LayoutHeaderComponent,
  LayoutFooterComponent,
  RegisterComponent,
  UserStateComponent,
  NavBarComponent,
  WorkBarComponent,

];
export const PIPE_PROVIDERS = [];

export const SERVICE_PROVIDERS = [
  LoginService,
  DataService
];
