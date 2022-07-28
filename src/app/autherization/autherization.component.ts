import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { AuthorizationService } from '../pages/services/authorization.service';


@Component({
  selector: 'app-autherization',
  templateUrl: './autherization.component.html',
  styleUrls: ['./autherization.component.css']
})
export class AutherizationComponent implements OnInit {

  formId = 'autherization';
  form          : FormGroup;
  currentDate   : any= moment().format('YYYY-MM-DDThh:mm:ssZ');
  loginUser     : string;
  subscription  : Subscription;
  fetch_data    : any;
  submitObj = {};

  displayedColumns = [
    'email',
    'firstName',
    'lastName',
    'phoneNumber',
    'password',
    'isautherized'
  ];

  dataSource =  new MatTableDataSource();

  constructor(
    private fb: FormBuilder,
    public authorizationService :AuthorizationService,
  ) { }

  ngOnInit(): void {
    //this.authService.authInfo.subscribe(data => {
     //this.loginUser = data['usercode'];
    //});

    this.form = this.fb.group({
      id            : [],
      isAuthorized  : [''],
      // update_date   : [this.currentDate],
      // order_date    : [this.currentDate]
    });

    this.getAuthorizationData();

  }

  // approvalFlag(event,id){
  //   let userId= this.loginUser;
  //   let date = this.currentDate;
  //   let status = 'APR';
  //    let order_date =this.currentDate;
  //   this.commonService.showDialog(
  //     {
  //       title: 'Confirmation - Approve System',
  //       content: 'Are you sure to approve this?',
  //     },
  //     () => 
  //       this.proposeService.updateProposeApproval({order_flag:event.value, Id: id,update_by: userId ,update_date: date,order_date:order_date ,status: status }).subscribe(update => {
  //         this.commonService.showSuccessMsg('Data Successfully updated.');
  //         this.getProposeApproval();
  //         this.asyncService.finish();
  //       }, error => {
  //         console.log('Error to Approve of propose transfer!');
  //         this.asyncService.finish();
  //     })
  //   );
  // }

  getAuthorizationData(){
    this.subscription =
    this.authorizationService.getAuthList().subscribe((getData) => {

        this.fetch_data = getData;
        this.dataSource.data = this.fetch_data ;        
      console.log('Karishoma  ', this.fetch_data);
      
    });
  }


  // updateData(formValue) {
  //   this.asyncService.start();
  //   this.subscription =
  //   this.proposeService.updateProposeApproval({obj: this.submitObj}).subscribe(update => {
  //     this.commonService.showSuccessMsg('Data Successfully updated.');
  //     this.getProposeApproval();
  //     this.asyncService.finish();
  //   }, error => {
  //     console.log('Error to Approve of propose transfer!');
  //     this.asyncService.finish();
  //   })
  // }


  // onSaveConfirmation = (): void => {
  //   this.commonService.showDialog(
  //     {
  //       title: 'Confirmation - Save Record',
  //       content: 'Are you sure to approve this?',
  //     },
  //     () => this.updateData(this.form.value)
  //   );
  // };


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}