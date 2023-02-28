package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NoteService {

//    private final NoteRepository noteRepository;

    public List<Note> getNotes() {
        List<Note> notes = new ArrayList<>();
        Note note1 = new Note();
        note1.setId(1);
        note1.setAuthor("Maria");
        note1.setText("Go to supermarket");

        Note note2 = new Note();
        note2.setId(2);
        note2.setAuthor("John");
        note2.setText("Go to church");

        Note note3 = new Note();
        note3.setId(3);
        note3.setAuthor("Elena");
        note3.setText("Go to doctor");

        notes.add(note1);
        notes.add(note2);
        notes.add(note3);
//        throw new RuntimeException("aaa");
        return notes;
    }
}
