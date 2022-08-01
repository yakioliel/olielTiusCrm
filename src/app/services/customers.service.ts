import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

import {
  collection,
  CollectionReference,
  doc,
  Firestore,
  addDoc,
  deleteDoc,
  updateDoc,
  collectionData,
  docData,
} from '@angular/fire/firestore';

import { Customer } from '../interfaces/customer';
@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customersReference: CollectionReference<Required<Customer>>;
  private customers$: Observable<Required<Customer>[]>;

  constructor(private afs: Firestore) {
    this.customersReference = collection(
      this.afs,
      'customers'
    ) as CollectionReference<Required<Customer>>;

    this.customers$ = collectionData(this.customersReference, {
      idField: 'id',
    }).pipe(shareReplay(1));
  }
  getAll() {
    return this.customers$;
  }

  // Omit mention what i want to ignore, in the below example the 'id' is not relevant we don't need it משמיט את האיידי
  add(customer: Omit<Customer, 'id'>) {
    return addDoc(this.customersReference, customer);
  }

  remove(id: Customer['id']) {
    const documentReference = doc(this.customersReference, id);
    return deleteDoc(documentReference);
  }
  update({ id, ...customer }: Required<Customer>) {
    const documentReference = doc(this.customersReference, id);
    return updateDoc(documentReference, customer);
  }
  getById(id: string) {
    const documentReference = doc(this.customersReference, id);
    return docData(documentReference, { idField: 'id' });
  }
}
