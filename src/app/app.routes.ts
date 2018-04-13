import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register';
import {DoctorEnterComponent} from './components/doctor-enter/doctor-enter.component';
import {PatientEnterComponent} from './components/patient-enter/patient-enter.component';
import {DataTableComponent} from './components/data-table/data-table.component';
import {MonitorMessageComponent} from './components/monitor-message/monitor-message.component';
import {EcgDiagnosisComponent} from './components/ecg-diagnosis/ecg-diagnosis.component';
import {MonitoringRecordComponent} from './components/monitoring-record/monitoring-record.component';
import {HistoryDiagnoseComponent} from './components/history-diagnose/history-diagnose.component';
import {PatientRecordComponent} from './components/patient-record/patient-record.component';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'doctor-enter/:type',
    component: DoctorEnterComponent,
  },
  {
    path: 'patient-enter/:type',
    component: PatientEnterComponent,
  },
  {
    path: 'data-table',
    component: DataTableComponent,
  },
  {
    path: 'monitor-message',
    component:  MonitorMessageComponent,
  },
  {
    path: 'ecg-diagnosis',
    component: EcgDiagnosisComponent,
  },
  {
    path: 'monitoring-record',
    component: MonitoringRecordComponent,
  },
  {
    path: 'history-diagnose',
    component:  HistoryDiagnoseComponent,
  },
  {
    path: 'patient-record',
    component: PatientRecordComponent,
  },
];
