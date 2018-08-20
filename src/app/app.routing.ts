import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: AppComponent,
        data: {title: "Dashboard"}
    },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);