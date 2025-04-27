import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                loadComponent: () => import("./login/login.component").then(m => m.LoginComponent),
                data: {
                    animation: 'LoginPage'
                }
            },
            {
                path: 'register',
                loadComponent: () => import("./register/register.component").then(m => m.RegisterComponent),
                data: {
                    animation: 'RegisterPage'
                }
            },
        ]
    }
]