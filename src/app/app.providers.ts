import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './_layout/header';
import {LoginService} from './services/login.service';
import {RegisterComponent} from './login/register';
import {LayoutHeaderComponent} from './_layout/layout-header';
import {FooterComponent} from './_layout/footer';
import {LayoutFooterComponent} from './_layout/layout-footer';
import {UserStateComponent} from './_layout/user-state/user-state.component';
import {DataService} from './services/data.service';
import {DoctorEnterComponent} from './components/doctor-enter/doctor-enter.component';
import {PatientEnterComponent} from './components/patient-enter/patient-enter.component';
import {DataTableComponent} from './components/data-table/data-table.component';
import {MonitorMessageComponent} from './components/monitor-message/monitor-message.component';
import {EcgDiagnosisComponent} from './components/ecg-diagnosis/ecg-diagnosis.component';
import {MonitoringRecordComponent} from './components/monitoring-record/monitoring-record.component';
import {HistoryDiagnoseComponent} from './components/history-diagnose/history-diagnose.component';
import {PatientRecordComponent} from './components/patient-record/patient-record.component';
import {EcgShowComponent} from './components/ecg-show/ecg-show.component';

export const COMPONENT_PROVIDERS = [
  LoginComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  LayoutHeaderComponent,
  LayoutFooterComponent,
  RegisterComponent,
  UserStateComponent,
  DoctorEnterComponent,
  PatientEnterComponent,
  DataTableComponent,
  MonitorMessageComponent,
  EcgDiagnosisComponent,
  MonitoringRecordComponent,
  HistoryDiagnoseComponent,
  PatientRecordComponent,
  EcgShowComponent,
];
export const PIPE_PROVIDERS = [];

export const SERVICE_PROVIDERS = [
  LoginService,
  DataService
];
