import {Component, OnInit} from '@angular/core';
import {NoteService} from "../note.service";
import {Note} from "../note";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  notes!: Note[];

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe({
      next: (notes: Note[]) => {
        this.notes = notes
      },
      error: (error: any) => {
        window.alert(error.message);
      },
      complete: () => {
        window.alert('Success request');
      }
    });
  }

}
