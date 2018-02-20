import { Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import { SharedService } from "../../shared/services/shared.service";
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    animations: [
        trigger('toggleHeight', [
            state('inactive', style({
                height: '0',
                opacity: '0'
            })),
            state('active', style({
                height: '*',
                opacity: '1'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ])
    ]
})

export class NavigationComponent implements OnInit {
    sidebarVisible: boolean;



    // Sub menu visibilities
    navigationSubState:any = {
        Tables: 'inactive',
        Forms: 'inactive',
        SamplePages: 'inactive',
        UserInterface: 'inactive',
        Components: 'inactive',
        Charts: 'inactive',
    };

    // Toggle sub menu
    toggleNavigationSub(menu, event) {
        event.preventDefault();
        this.navigationSubState[menu] = (this.navigationSubState[menu] === 'inactive' ? 'active' : 'inactive');
    }

    signOut()  {
        this.afAuth.auth.signOut().then(function() {
            window.location.href = '#/login'
    }).catch(function(error) {

    })
    }

    constructor(private sharedService: SharedService,
                private afAuth: AngularFireAuth,) {
        sharedService.sidebarVisibilitySubject.subscribe((value) => {
            this.sidebarVisible = value
        })




    }

    ngOnInit() {
    }
}
