package com.demo.contact.service;

import com.demo.contact.ContactApplication;
import com.demo.contact.api.model.Contact;
import com.demo.contact.exception.ResourceNotFoundException;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ContactApplication.class)
public class ContactServiceTest {

  @Autowired ContactService contactService;

  @Test
  public void test_findAllContacts_success() {
    assertNotNull(contactService.findAllContacts());
  }

  @Test
  public void test_addContact_success() {
    Contact contact = buildContact();
    Contact contactCreated = contactService.createContact(contact);
    assertContact(contact, contactCreated);
  }

  @Test
  public void test_deleteContactById_success() {
    Contact contactCreated = createContactUsingApi();
    String id = contactCreated.getId();
    contactService.deleteContactById(id);
    Contact updatedContact = contactService.findContactById(id);
    assertEquals(Contact.StatusEnum.INACTIVE, updatedContact.getStatus());
  }

  @Test
  public void test_deleteContactById_NotFound_success() {
    assertThatThrownBy(() -> contactService.deleteContactById(UUID.randomUUID().toString()))
        .isInstanceOf(ResourceNotFoundException.class);
  }

  @Test
  public void test_findContactById_success() {
    Contact contactCreated = createContactUsingApi();
    String id = contactCreated.getId();
    Contact getContact = contactService.findContactById(id);
    assertNotNull(getContact);
  }

  @Test
  public void test_updateContact_success() {
    Contact contactCreated = createContactUsingApi();
    String id = contactCreated.getId();
    contactCreated.setFirstName("new_firstName");
    contactCreated.setLastName("New LastName");
    contactCreated.setEmail("new_email@yahoo.com");
    contactCreated.setPhone("121313123132");
    Contact updatedContact = contactService.updateContact(id, contactCreated);
    assertContact(contactCreated, updatedContact);
  }

  @Test
  public void test_updateContact_NotFound_success() {
    assertThatThrownBy(
            () -> contactService.updateContact(UUID.randomUUID().toString(), new Contact()))
        .isInstanceOf(ResourceNotFoundException.class);
  }

  private Contact buildContact() {
    return new Contact()
        .firstName("f_name_test")
        .lastName("f_name_test")
        .email("testst@gmail.com")
        .status(Contact.StatusEnum.ACTIVE);
  }

  private void assertContact(Contact actual, Contact expected) {
    assertNotNull(expected.getId());
    assertEquals(expected.getFirstName(), actual.getFirstName());
    assertEquals(expected.getLastName(), actual.getLastName());
    assertEquals(expected.getEmail(), actual.getEmail());
    assertEquals(expected.getPhone(), actual.getPhone());
    assertEquals(expected.getStatus(), actual.getStatus());
  }

  private Contact createContactUsingApi() {
    Contact contact = buildContact();
    return contactService.createContact(contact);
  }
}
