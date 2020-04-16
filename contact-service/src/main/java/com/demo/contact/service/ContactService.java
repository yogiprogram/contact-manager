package com.demo.contact.service;

import com.demo.contact.ContactMapper;
import com.demo.contact.api.model.Contact;
import com.demo.contact.api.model.Contacts;
import com.demo.contact.exception.ResourceNotFoundException;
import com.demo.contact.model.ContactEntity;
import com.demo.contact.repository.ContactRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class ContactService {

  private ContactRepository contactRepository;
  private ContactMapper contactMapper;

  public ContactService(ContactRepository contactRepository, ContactMapper contactMapper) {
    this.contactRepository = contactRepository;
    this.contactMapper = contactMapper;
  }

  public Contact createContact(final Contact contact) {
    return contactMapper.mapToJson(contactRepository.save(contactMapper.mapToJpa(contact)));
  }

  public Contacts findAllContacts() {
    List<ContactEntity> contacts = contactRepository.findAll();
    Contacts result = new Contacts();
    if (CollectionUtils.isEmpty(contacts)) {
      return result;
    }
    contacts.forEach(contact -> result.add(contactMapper.mapToJson(contact)));
    return result;
  }

  public void deleteContactById(String id) {
    UUID contactId = UUID.fromString(id);
    Optional<ContactEntity> entityOptional = contactRepository.findById(contactId);
    if (!entityOptional.isPresent()) {
      throw new ResourceNotFoundException("Contact not found for update");
    }
    ContactEntity entity = entityOptional.get();
    entity.markStatusInActive();
    contactRepository.save(entity);
  }

  public Contact findContactById(String id) {
    Optional<ContactEntity> byId = contactRepository.findById(UUID.fromString(id));
    return contactMapper.mapToJson(
        byId.orElseThrow(() -> new ResourceNotFoundException("Contact not found")));
  }

  public Contact updateContact(String id, Contact contact) {
    Optional<ContactEntity> entityOptional = contactRepository.findById(UUID.fromString(id));
    if (!entityOptional.isPresent()) {
      throw new ResourceNotFoundException("Contact not found for update");
    }
    ContactEntity updatedRecord = contactMapper.updateJpa(entityOptional.get(), contact);
    return contactMapper.mapToJson(contactRepository.save(updatedRecord));
  }
}
