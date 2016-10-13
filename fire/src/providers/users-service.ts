import { FireBaseService } from './fire-base-service';

import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';


/*

Generated class for the UsersService provider.


See https://angular.io/docs/ts/latest/guide/dependency-injection.html

for more info on providers and Angular 2 DI.

 */

@Injectable( )

export class UsersService {

    private fireAuth: any;


    private userProfile: any;

    constructor( public http: Http, fireBase: FireBaseService ) {

        this.fireAuth = fireBase.fRb.auth( );


        this.userProfile = fireBase.fRb.database( ).ref( 'users/');

        console.log( 'Hello UsersService Provider' );

    }


    public registerUser( email: string, password: string ) {

        return this.fireAuth
                   .createUserWithEmailAndPassword( email, password )
                   .then(( user ) => {
                       this.fireAuth.signInWithEmailAndPassword( email, password )
                           .then(( authedUser ) => {
                       this.userProfile.child(authedUser._id).set( {email: email});
                    })
            });
    }

    public checkAuthentication( ): boolean {

        let isAutheticated = false;

        this.fireAuth.onAuthStateChanged(( user ) => {

            if ( user )

                isAutheticated = true;


        });

        return isAutheticated;

    }

}