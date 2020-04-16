package com.demo.contact;

import com.demo.contact.api.model.Contact;
import com.demo.contact.model.ContactEntity;
import com.demo.contact.model.Status;
import org.springframework.stereotype.Component;

@Component
public class ContactMapper {

  public Contact mapToJson(ContactEntity entity) {
    return new Contact()
        .id(entity.getId().toString())
        .firstName(entity.getFirstName())
        .lastName(entity.getLastName())
        .email(entity.getEmail())
        .phone(entity.getPhoneNumber())
        .status(Status.getStatus(entity.getStatus()).orElse(null));
  }

  public ContactEntity mapToJpa(Contact contact) {
    ContactEntity contactEntity = new ContactEntity();
    contact.setStatus(Contact.StatusEnum.ACTIVE);
    return updateJpa(contactEntity, contact);
  }

  public ContactEntity updateJpa(ContactEntity contactEntity, Contact contact) {
    contactEntity.setFirstName(contact.getFirstName());
    contactEntity.setLastName(contact.getLastName());
    contactEntity.setEmail(contact.getEmail());
    contactEntity.setPhoneNumber(contact.getPhone());
    contactEntity.setStatus(Status.valueOf(String.valueOf(contact.getStatus())));
    return contactEntity;
  }
}
