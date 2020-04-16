package com.demo.contact.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "contact_info")
@Getter
@Setter
@EqualsAndHashCode
public class ContactEntity {
  @Id
  @GeneratedValue(generator = "UUID")
  @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
  @Column(name = "id", updatable = false, nullable = false)
  private UUID id;

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;

  @Column(name = "email_address")
  private String email;

  @Column(name = "phone_number")
  private String phoneNumber;

  @Column(name = "status")
  @Enumerated(EnumType.STRING)
  @EqualsAndHashCode.Exclude
  private Status status;

  public void markStatusInActive() {
    this.status = Status.INACTIVE;
  }
}
