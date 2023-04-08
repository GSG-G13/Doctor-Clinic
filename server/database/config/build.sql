BEGIN;

DROP TABLE IF EXISTS doctors, patients CASCADE;

CREATE TABLE doctors(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  phone INTEGER
);

CREATE TABLE patients(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  phone INTEGER,
  gender VARCHAR(50) NOT NULL,
  entered_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  doctor_id INTEGER,
  FOREIGN KEY (doctor_id) REFERENCES doctors(id) --ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO doctors(name, phone) VALUES ('Nada Abu Zaid', 0594556564);
INSERT INTO doctors(name, phone) VALUES ('Alaa Ahmed', 0594149120);
INSERT INTO doctors(name, phone) VALUES ('Khaled Nabaheen', 0594148950);

COMMIT;