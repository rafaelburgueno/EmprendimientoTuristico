import { RouterModule, Routes} from '@angular/router';

import {InicioComponent} from "./components/inicio/inicio.component";
import {AboutComponent} from "./components/about/about.component";
import {EventosComponent} from "./components/eventos/eventos.component";
import {ContactoComponent} from "./components/contacto/contacto.component";
import {HoraFlorestaComponent} from "./hora-floresta/hora-floresta.component";

const APP_ROUTES:Routes = [
        {path:"inicio", component:InicioComponent},
        {path:"about", component:AboutComponent},
        {path:"eventos", component:EventosComponent},
        {path:"contacto", component:ContactoComponent},
        {path:"hora", component:HoraFlorestaComponent},
        {path:"**", pathMatch:"full",redirectTo:""}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);