import { Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'
import { MapComponent } from './map/map.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: MapComponent }],
  },
]
