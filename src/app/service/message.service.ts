import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

// Service zum komponentenübergreifenden Austauschen 
// von Nachrichten und Objekten
@Injectable()
export class MessageService<T> {
    private subject = new Subject<any>();
 
    sendMessage(message: T) {
        this.subject.next({ data: message });
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}