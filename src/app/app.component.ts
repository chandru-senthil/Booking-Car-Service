import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //component
  modalRef: BsModalRef;
  ServiceForm: FormGroup = new FormGroup({});
  alertMsg: boolean | undefined = undefined;

  brandList: string[] = ["BMW","Hyundai","Honda","Maruti Suzuki"];
  modelList: string[] = ["Swift Dzire","Breeza","Baleno","honda city","Verna","hyundai i20","hyundai santro"];

  ServiceList: any[] = [
    {
      name: "John",
      phoneNumber: "9944108840",
      email: "john@gmail.com",
      vehicleNumber: "TN 01 A 9988",
      brand: "Hyundai",
      model: "i20 active",
      fuel: "Petrol",
      date: "30-Sep-2020",
      time: "10:30 AM",
      pickup:"yes"
    },
    {
      name: "Sam",
      phoneNumber: "9278108840",
      email: "Sam@gmail.com",
      vehicleNumber: "TN 04 T 0912",
      brand: "Maruti",
      model: "Swift",
      fuel: "Petrol",
      date: "29-Sep-2020",
      time: "12:00 PM",
      pickup:"No"
    },
    {
      name: "Karthik",
      phoneNumber: "9944109837",
      email: "karthik@gmail.com",
      vehicleNumber: "TN 88 A 9512",
      brand: "Honda",
      model: "city",
      fuel: "Petrol",
      date: "01-Oct-2020",
      time: "10:00 AM",
      pickup:"yes"
    },
    {
      name: "Kevin",
      phoneNumber: "99444931686",
      email: "kevin@gmail.com",
      vehicleNumber: "TN 28 X 5544",
      brand: "Volkswagen",
      model: "polo",
      fuel: "Petrol",
      date: "02-Oct-2020",
      time: "11:00 AM",
      pickup:"No"
    },
    {
      name: "Murugan",
      phoneNumber: "9832765436",
      email: "mohanth@gmail.com",
      vehicleNumber: "TN 23 A 0972",
      brand: "Hyundai",
      model: "Santro",
      fuel: "Petrol",
      date: "30-Sep-2020",
      time: "10:30 AM",
      pickup:"yes"
    },
    {
      name: "Kannan",
      phoneNumber: "8667661419",
      email: "Kannan@gmail.com",
      vehicleNumber: "TN 23 S 8779",
      brand: "Maruti",
      model: "Breeza",
      fuel: "Petrol",
      date: "04-Oct-2020",
      time: "10:00 AM",
      pickup:"No"
    },

  ]

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder) {}
 
  openModal(template: any) {
    this.modalRef = this.modalService.show(template);
  }
 
  onDelete(id: any){
     let index =this.ServiceList.findIndex((x: any) => x.id === id);
       this.ServiceList.splice(index, 1);  
  }

   onFormSubmit(data: any) {
     this.alertMsg = true;
     console.log(data);
  }

  
}
