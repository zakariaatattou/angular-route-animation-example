import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { ListingComponent } from './components/listing/listing.component';

export const routes: Routes = [
    {
        path: "",
        component: ListingComponent
    },
    {
        path: "details/:id",
        component: DetailsComponent,
        data: { animation: 'slideInAnimation' }
    },
];
