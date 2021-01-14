import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modificar-imagen',
  templateUrl: './modificar-imagen.component.html',
  styles: []
})
export class ModificarImagenComponent implements OnInit {

  noticiaForm: FormGroup;

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private build: FormBuilder,
  ) {
    this.noticiaForm = build.group({
      imagen: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  modificarNoticia(): void {
    this.ngbActiveModal.close(this.noticiaForm);
  }

  cerrarModal(): void {
    this.ngbActiveModal.close();
  }

}
