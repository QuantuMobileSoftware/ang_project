import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-guest-layout',
    templateUrl: './guest-layout.component.html',
    styleUrls: ['./guest-layout.component.scss']
})
export class GuestLayoutComponent {
    constructor(public authService: AuthService) {
    }

}
