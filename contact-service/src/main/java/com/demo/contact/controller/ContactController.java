package com.demo.contact.controller;

import com.demo.contact.api.ContactsApi;
import com.demo.contact.api.model.Contact;
import com.demo.contact.api.model.Contacts;
import com.demo.contact.service.ContactService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@Validated
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ContactController implements ContactsApi {

  @Autowired private ContactService contactService;

  @Override
  public ResponseEntity<Contact> createContact(@Valid @RequestBody Contact contact) {
    log.info("In createContact ==> ");
    return new ResponseEntity<>(contactService.createContact(contact), HttpStatus.CREATED);
  }

  @Override
  public ResponseEntity<Void> deleteContact(@PathVariable("id") String id) {
    contactService.deleteContactById(id);
    return new ResponseEntity<>(HttpStatus.OK);
  }

  @Override
  public ResponseEntity<Contacts> findAllContacts() {
    log.info("Start find all contacts");
    return new ResponseEntity<>(contactService.findAllContacts(), HttpStatus.OK);
  }

  @Override
  public ResponseEntity<Contact> findContact(@PathVariable("id") String id) {
    log.info("Start findContact");
    return new ResponseEntity<>(contactService.findContactById(id), HttpStatus.OK);
  }

  @Override
  public ResponseEntity<Contact> updateContact(
      @PathVariable("id") String id, @Valid @RequestBody Contact contact) {
    log.info("Start updateContact");
    return new ResponseEntity<>(contactService.updateContact(id, contact), HttpStatus.OK);
  }
}
