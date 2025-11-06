import { Routes } from "@angular/router";
import { Salad } from "./salad/salad";
import { saladGuard } from "./guards/salad-guard";

export const routes: Routes = [
    {
      path: 'salad',
      component: Salad,
      canActivate: [saladGuard]
    }
  ];