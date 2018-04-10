import {Component, OnInit} from '@angular/core';
import {Precio} from '../../interfaces/precio';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {alertService} from '../../services/alert.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

    usuarios: any[];
    usuariosTemporal: any[];
    usuariosFireBase: FirebaseListObservable<any[]>;

    nombreUsuarioEditar: string;
    contraseniaUsuarioEditar: string;
    tipoUsuarioEditar: string = '';
    usuarioKey: string;
    emailViejo: string;
    passwordVieja: string;

    constructor(private db: AngularFireDatabase,
                private _alertService: alertService,
                private afAuth: AngularFireAuth) {
    }

    ngOnInit() {
        this.usuariosFireBase = this.db.list('usuarios');
        this.usuariosFireBase
            .subscribe(result => {
                this.usuarios = this.usuariosTemporal = result;
            });
    }

    addUsuario() {
        if (!this.errorEmail(this.nombreUsuarioEditar) && this.contraseniaUsuarioEditar != null && this.contraseniaUsuarioEditar != '') {
            this.usuariosFireBase.push({
                email: this.nombreUsuarioEditar,
                contrasenia: this.contraseniaUsuarioEditar,
                tipo: this.tipoUsuarioEditar,
            });

            this.crearUsuarioLogin(this.nombreUsuarioEditar, this.contraseniaUsuarioEditar);

            this.nombreUsuarioEditar = this.contraseniaUsuarioEditar = this.usuarioKey = null;
            this.tipoUsuarioEditar = '';
        } else {
            this._alertService.error('Error en email o contraseña', 'Verifique si el email es correcto o si no introdujo una contraseña');
        }
    }

    finishUserEdit() {
        if (!this.errorEmail(this.nombreUsuarioEditar) && this.contraseniaUsuarioEditar != null && this.contraseniaUsuarioEditar != '') {
            this.usuariosFireBase.update(this.usuarioKey, {
                email: this.nombreUsuarioEditar,
                contrasenia: this.contraseniaUsuarioEditar,
                tipo: this.tipoUsuarioEditar,
            });

            this.actualizarDatosUsuarioLogin(this.emailViejo, this.passwordVieja, this.nombreUsuarioEditar, this.contraseniaUsuarioEditar);

            this.nombreUsuarioEditar = this.contraseniaUsuarioEditar = this.usuarioKey = this.emailViejo = this.passwordVieja = null;
            this.tipoUsuarioEditar = '';
        } else {
            this._alertService.error('Error en email o contraseña', 'Verifique si el email es correcto o si no introdujo una contraseña');
        }

    }

    errorEmail(email: string) {
        let regularExpressionEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

        if (!regularExpressionEmail.test(email) || email == '' || email == null) return true;

        return false;
    }

    searchUsuario(terminoBusqueda: string) {
        if (!this.usuarios) {
            this.usuariosTemporal = []
        } else {

            //TODO: CAmbiar el it.producto
            this.usuariosTemporal = this.usuarios.filter(it => it.producto.toLowerCase().indexOf(terminoBusqueda.toLowerCase()) >= 0);
        }
    }

    sendUsuarioToEdit(nombre: string, contrasenia: string, tipoUsuario: string, usuarioKey: string) {
        this.nombreUsuarioEditar = nombre;
        this.contraseniaUsuarioEditar = contrasenia;
        this.tipoUsuarioEditar = tipoUsuario;
        this.usuarioKey = usuarioKey;

        // Guardamos email y password vieja para poder editar los datos de login
        this.emailViejo = nombre;
        this.passwordVieja = contrasenia;

    }

    crearUsuarioLogin(email, password) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    actualizarDatosUsuarioLogin(emailAntiguo, passwordAntigua, email, password) {
        let miEmail: string;
        let miPassword: string;
        debugger
        //Obtener datos del usuario actual
        this.afAuth.auth.onAuthStateChanged((user) => {
            miEmail = user.email;
            miPassword = localStorage.getItem('password');

            // Iniciamos sesion con el usuario que queremos editar
            this.afAuth.auth.signInWithEmailAndPassword(emailAntiguo, passwordAntigua)
                .catch(error => {
                    console.log('Iniciar sesion usuario editar ' + error)
                })
            // Actualizamos el email y password del usuario
            this.afAuth.auth.currentUser.updateEmail(email)
                .catch(error => {
                    console.log('Actualizar email ' + error)
                })
            this.afAuth.auth.currentUser.updatePassword(password)
                .catch(error => {
                    console.log('Actualizar contraseña ' + error)
                })
            // Volvemos a iniciar sesion
            this.afAuth.auth.signInWithEmailAndPassword(miEmail, miPassword)
                .catch(error => {
                    console.log('Iniciar sesion de nuevo ' + error)
                })
        })
    }

}
