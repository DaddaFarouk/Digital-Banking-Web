import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerModel} from "../models/customer.model";

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit {
  customerId! : string ;
  customer! : CustomerModel;

  constructor(private activatedRoute : ActivatedRoute,
              private router : Router) {
    this.customer = this.router.getCurrentNavigation()?.extras.state as CustomerModel;
  }

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.params['id'];
  }

}