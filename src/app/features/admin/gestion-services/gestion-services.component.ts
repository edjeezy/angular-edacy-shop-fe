import { Component, OnInit } from '@angular/core';
import { Observable, first } from 'rxjs';
import { CrudService, PaginationOptions } from '../../../shared/services/crud/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalWrapperComponent } from '../components/modal-wrapper/modal-wrapper.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export interface Service {
  id?: string,
  type: string,
  prix: number,
}

@Component({
  selector: 'app-gestion-services',
  templateUrl: './gestion-services.component.html',
  styleUrl: './gestion-services.component.css'
})
export class GestionServicesComponent implements OnInit {
  displayedColumns: string[] = [ 'type', 'prix', 'actions'];
  dataSource = [];
  services!: Observable<any[]>;
  pageSizeOptions = [5, 10, 20, 50];
  currentPage: number = 0;
  endpoint = "services"; 
  form = new FormGroup({
    type: new FormControl('', [Validators.required]),
    prix: new FormControl(0, [Validators.required, Validators.max(900000000000)])
  });
  
  formMaker = [
    { name: 'Type de service', key: 'type', type: 'text',  control: this.form.get('type') as FormControl},
    { name: 'Prix', key: 'prix', type: 'text',  control: this.form.get('prix') as FormControl},
  ];
  constructor(
    public crud: CrudService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.services = this.crud.getPaginated(this.endpoint, {pageSize: 5, pageNumber: 1});
  }

  private openDialof(data: any = null, options = { width: '50vw', height: '80vh', minWidth: '400px'},) {
    const dialogRef = this.dialog.open(ModalWrapperComponent, {
      width:  options.width,
      data: {
        title: 'Service',
        form: this.form,
        formMaker: this.formMaker,
        editObject: data,
      },
      height: options.height,
      minWidth: options.minWidth,
    });

    return dialogRef;
  }

  create() {
    const ref = this.openDialof();
    //ref.afterOpened().subscribe()
    ref.afterClosed().subscribe((data) => {
      console.log(data);
      this.save(data)
    })
  }

  
  onPageChange(event: any) {
    console.log('page change', event);
    
    this.currentPage = event.pageIndex + 1; // Page index starts from 0
    this.fetchData({ pageSize: event.pageSize, pageNumber: event.pageIndex });
  }

  save(savedEvent: { form: any, isEdit: boolean, currentId: string}) {
    if (!savedEvent) return;
    if (savedEvent.isEdit) {      
      this.crud.patch( this.endpoint, savedEvent.currentId, savedEvent.form).subscribe(() => {
        alert('Success');
        this.init();
      });
    } else {
      this.crud.post(this.endpoint, savedEvent.form).subscribe(() => {
        alert('Success');
        this.init();
      });
    }
  }
  
  fetchData(opts: PaginationOptions) {
    this.services = this.crud.getPaginated(this.endpoint, opts);
  }

  handleEdit(el: any) {
    const ref = this.openDialof(el)
    ref.afterClosed().subscribe((data) => {
      console.log(data);
      this.save(data)
    })
  }

  handleDelete(el: any) {
    const conf = confirm('Etes vous sur ?');
    if (!conf) return;
    this.crud.delete(this.endpoint, el.id).pipe(first()).subscribe(() => this.init())
  }

}
