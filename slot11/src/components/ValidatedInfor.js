import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

const validateName = (name) => {
const namePattern = /^[A-Za-z\s]+$/;
  return name.length >= 3 && namePattern.test(name);
};

const validateGender = (gender) => {
  return gender !== "";
};

const validateCountry = (country) => {
  return country !== "";
};

const validateAgreement = (isAgreed) => {
  return isAgreed;
};

function ValidatedForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [nameValid, setNameValid] = useState(true);
  const [genderValid, setGenderValid] = useState(true);
  const [countryValid, setCountryValid] = useState(true);
  const [agreementValid, setAgreementValid] = useState(true);
  const [nameError, setNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [agreementError, setAgreementError] = useState("");

  useEffect(() => {
    if (name === "") {
      setNameValid(false);
      setNameError("Name must be at least 3 characters long");
    } else {
      const isValidName = validateName(name);
      setNameValid(isValidName);
      setNameError(isValidName ? "" : "Name must be at least 3 characters long");
    }
  }, [name]);

  useEffect(() => {
    const isValidGender = validateGender(gender);
    setGenderValid(isValidGender);
    setGenderError(isValidGender ? "" : "Please select a gender");
  }, [gender]);

  useEffect(() => {
    const isValidCountry = validateCountry(country);
    setCountryValid(isValidCountry);
    setCountryError(isValidCountry ? "" : "Please select a country");
  }, [country]);

  useEffect(() => {
    const isValidAgreement = validateAgreement(isAgreed);
    setAgreementValid(isValidAgreement);
    setAgreementError(isValidAgreement ? "" : "You must agree to the terms and conditions");
  }, [isAgreed]);

  return (
    <Container>
    <Form>
      {/* Name Field */}
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isValid={nameValid}
          isInvalid={!nameValid}
        />
        <Form.Control.Feedback type="invalid">{nameError}</Form.Control.Feedback>
      </Form.Group>

      {/* Gender Field (Radio Buttons) */}
      <Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Check
          type="radio"
          label="Male"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
          isValid={genderValid}
          isInvalid={!genderValid}
          inline
        />
        <Form.Check
          type="radio"
          label="Female"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
          isValid={genderValid}
          isInvalid={!genderValid}
          inline
        />
        <Form.Check
          type="radio"
          label="Other"
          value="Other"
          checked={gender === "Other"}
          onChange={(e) => setGender(e.target.value)}
          isValid={genderValid}
          isInvalid={!genderValid}
          inline
        />
        <Form.Control.Feedback type="invalid">{genderError}</Form.Control.Feedback>
      </Form.Group>

      {/* Country Field (Dropdown Select) */}
      <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control
          as="select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          isValid={countryValid}
          isInvalid={!countryValid}
        >
          <option value="">Select a country</option>
          <option value="Da Nang">Da Nang</option>
          <option value="Hanoi">Hanoi</option>
          <option value="Ho Chi Minh">Ho Chi Minh</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">{countryError}</Form.Control.Feedback>
      </Form.Group>

      {/* Agreement Checkbox */}
      <Form.Group controlId="agreement">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          checked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
          isValid={agreementValid}
          isInvalid={!agreementValid}
        />
        <Form.Control.Feedback type="invalid">{agreementError}</Form.Control.Feedback>
      </Form.Group>

      {/* Submit Button */}
      <Button variant="primary" type="submit" disabled={!nameValid || !genderValid || !countryValid || !agreementValid}>
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default ValidatedForm;
