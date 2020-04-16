DROP TABLE IF EXISTS contact_info;
CREATE TABLE contact_info (
    id              UUID NOT NULL PRIMARY KEY,
    first_name      VARCHAR(100),
    last_name       VARCHAR(100),
    email_address   VARCHAR(300),
    phone_number    VARCHAR(20),
    status          VARCHAR(20)
);

