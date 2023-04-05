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
  FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO doctors(name, phone) VALUES ('ahmed', 12354);
INSERT INTO doctors(name, phone) VALUES ('abeer', 56589);


INSERT INTO patients(name, phone, gender, doctor_id) VALUES ('ffffffff', 12354,'male',1);
INSERT INTO patients(name, phone, gender, doctor_id) VALUES ('ggggggg', 565,'female',2);

COMMIT;