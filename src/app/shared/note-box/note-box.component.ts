import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-box',
  templateUrl: './note-box.component.html',
  styleUrls: ['./note-box.component.css']
})
export class NoteBoxComponent {

  @Input() note: string = '';

  @Output() save: EventEmitter<string> = new EventEmitter<string>();

  public onSave () {
    this.save.emit(this.note);
  }
}
