import { Routes } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { LayoutComponent } from "./layout.component";

export const LAYOUT_ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent,
        data: {
            animation: 'HomePage'
        },
        children: [
            {
                path: '',
                component: HomeComponent,
                data: { animation: 'HomePage' }
            },
        ]
    }
]