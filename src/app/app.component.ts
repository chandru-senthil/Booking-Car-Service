import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  //component
  modalRef: BsModalRef;
  ServiceForm: FormGroup = new FormGroup({});
   submitted: boolean = false;
  alertMsg: boolean | undefined = undefined;
  dataArray: any[] = [];

  brandList: string[] = ["BMW","Hyundai","Honda","Maruti Suzuki"];
  modelList : string [] = [];
  // modelList: string[] = ["Swift Dzire","Breeza","Baleno","honda city","Verna","hyundai i20","hyundai santro"];

  modelArray: any[] = [];

  ServiceList: any[] = [
    {
      id: 1,
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
       id: 2,
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
       id: 3,
      name: "Karthik",
      phoneNumber: "9944109837",
      email: "karthik@gmail.com",
      vehicleNumber: "TN 88 A 9512",
      brand: "Honda",
      model: "city",
      fuel: "Petrol",
      date: "28-Sep-2020",
      time: "10:00 AM",
      pickup:"yes"
    },
    {
       id: 4,
      name: "Kevin",
      phoneNumber: "99444931686",
      email: "kevin@gmail.com",
      vehicleNumber: "TN 28 X 5544",
      brand: "Volkswagen",
      model: "polo",
      fuel: "Petrol",
      date: "27-Sep-2020",
      time: "11:00 AM",
      pickup:"No"
    },
    {
       id: 5,
      name: "Murugan",
      phoneNumber: "9832765436",
      email: "mohanth@gmail.com",
      vehicleNumber: "TN 23 A 0972",
      brand: "Hyundai",
      model: "Santro",
      fuel: "Petrol",
      date: "26-Sep-2020",
      time: "10:30 AM",
      pickup:"yes"
    },
    {
       id: 6,
      name: "Kannan",
      phoneNumber: "8667661419",
      email: "Kannan@gmail.com",
      vehicleNumber: "TN 23 S 8779",
      brand: "Maruti",
      model: "Breeza",
      fuel: "Petrol",
      date: "25-Sep-2020",
      time: "10:00 AM",
      pickup:"No"
    }
  ]

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.ServiceForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      vehicleNumber: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      fuel: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      pickUp: new FormControl('', Validators.required),
    });

    this.http.get('/assets/data/brand.json').subscribe((response: any)=> {
     this.modelArray = response.cars;
    });
  }

    onBrandChange(brand:any){
       // @ts-ignore TS2532
    this.modelList = this.modelArray.find(
      (data: any) => data.brand === brand
    ).model;
  }  
 
  openModal(template: any) {
    this.modalRef = this.modalService.show(template);
  }
 
  onDelete(id: any){
     let index =this.ServiceList.findIndex((x: any) => x.id === id);
       this.ServiceList.splice(index, 1);  
  }

   onFormSubmit(data: any) {
     this.submitted = true;

   if (this.ServiceForm.invalid) {
      this.alertMsg = false;
      return;
    }
   this.alertMsg = true;
   this.dataArray.push(data);
   console.log(this.dataArray);
  } 

   get f() {
    return this.ServiceForm.controls;
  }

   hasError = (controlName: string, errorName: string) => {
    return this.ServiceForm.controls[controlName].hasError(errorName);
  };
}
