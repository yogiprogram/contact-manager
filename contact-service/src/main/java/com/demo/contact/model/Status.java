package com.demo.contact.model;

import com.demo.contact.api.model.Contact;
import org.springframework.util.StringUtils;

import java.util.Objects;
import java.util.Optional;

public enum Status {
  ACTIVE,
  INACTIVE;

  public static Optional<Status> getStatus(String status) {
    if (StringUtils.isEmpty(status)) {
      return Optional.empty();
    }
    for (Status linkType : values()) {
      if (linkType.name().equalsIgnoreCase(status)) {
        return Optional.of(linkType);
      }
    }
    return Optional.empty();
  }

  public static Optional<Contact.StatusEnum> getStatus(Status status) {
    if (Objects.isNull(status)) {
      return Optional.empty();
    }
    return Optional.of(Contact.StatusEnum.valueOf(status.name()));
  }
}
