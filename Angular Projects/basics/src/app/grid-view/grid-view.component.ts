import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  dummyApproverGrid:{}[] = [
    {
      cardName: "1234",
      transaction: { count: 1, amount: 200 },
      pendingBillableInfo: { count: 1, amount: 200 },
      pendingReceipts: { count: 1, amount: 200 },
      uploadedReceipts: { count: 1, amount: 200 },
      approvedReceipts: { count: 1, amount: 200 },
      submittedTo3E: { count: 1, amount: 200 },
    },
    {
      cardName: "1234",
      transaction: { count: 1, amount: 200 },
      pendingBillableInfo: { count: 1, amount: 200 },
      pendingReceipts: { count: 1, amount: 200 },
      uploadedReceipts: { count: 1, amount: 200 },
      approvedReceipts: { count: 1, amount: 200 },
      submittedTo3E: { count: 1, amount: 200 },
    },
    {
      cardName: "1234",
      transaction: { count: 1, amount: 200 },
      pendingBillableInfo: { count: 1, amount: 200 },
      pendingReceipts: { count: 1, amount: 200 },
      uploadedReceipts: { count: 1, amount: 200 },
      approvedReceipts: { count: 1, amount: 200 },
      submittedTo3E: { count: 1, amount: 200 },
    },
    {
      cardName: "1234",
      transaction: { count: 1, amount: 200 },
      pendingBillableInfo: { count: 1, amount: 200 },
      pendingReceipts: { count: 1, amount: 200 },
      uploadedReceipts: { count: 1, amount: 200 },
      approvedReceipts: { count: 1, amount: 200 },
      submittedTo3E: { count: 1, amount: 200 },
    },
    {
      cardName: "1234",
      transaction: { count: 1, amount: 200 },
      pendingBillableInfo: { count: 1, amount: 200 },
      pendingReceipts: { count: 1, amount: 200 },
      uploadedReceipts: { count: 1, amount: 200 },
      approvedReceipts: { count: 1, amount: 200 },
      submittedTo3E: { count: 1, amount: 200 },
    },
    {
      cardName: "1234",
      transaction: { count: 1, amount: 200 },
      pendingBillableInfo: { count: 1, amount: 200 },
      pendingReceipts: { count: 1, amount: 200 },
      uploadedReceipts: { count: 1, amount: 200 },
      approvedReceipts: { count: 1, amount: 200 },
      submittedTo3E: { count: 1, amount: 200 },
    },
    {
      cardName: "1234",
      transaction: { count: 1, amount: 200 },
      pendingBillableInfo: { count: 1, amount: 200 },
      pendingReceipts: { count: 1, amount: 200 },
      uploadedReceipts: { count: 1, amount: 200 },
      approvedReceipts: { count: 1, amount: 200 },
      submittedTo3E: { count: 1, amount: 200 },
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];

}
