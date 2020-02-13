import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interteptorApp';

  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.obtenerUsuarios()
    .subscribe(response => {
      console.log(response);
    },
    (err) => {
      console.log(err);
    });
  }

}
