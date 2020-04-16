package com.demo.contact.repository;

import com.demo.contact.model.ContactEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ContactRepository extends JpaRepository<ContactEntity, UUID> {

  //
  //  private Map<UUID, Contact> contacts;
  //
  //  @PostConstruct
  //  public void setup() {
  //    contacts = new HashMap<>();
  //    for (int i = 0; i < 4; i++) {
  //      UUID uuid = UUID.randomUUID();
  //      Contact contact =
  //          new Contact()
  //              .id(uuid.toString())
  //              .firstName(i + "f_name")
  //              .lastName(i + "f_name")
  //              .email(i + "_testst@gmail.com")
  //              .status(Contact.StatusEnum.ACTIVE);
  //      contacts.put(uuid, contact);
  //    }
  //  }
  //
  //  public Contact getContact(String id) {
  //    return contacts.get(UUID.fromString(id));
  //  }
  //
  //  public Contact saveContact(final Contact contact) {
  //    contact.setId(UUID.randomUUID().toString());
  //    return contacts.put(UUID.fromString(contact.getId()), contact);
  //  }
  //
  //  public List<Contact> findAllContacts() {
  //    return new ArrayList<>(contacts.values());
  //  }
}
