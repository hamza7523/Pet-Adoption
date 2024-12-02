import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  Alert,
} from "@mui/material";

const GiveUpPetForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    ownerName: "",
    contactInfo: "",
    petName: "",
    petBreed: "",
    petAge: "",
    petVaccinationStatus: "",
    petHealthNotes: "",
    petPhotoUrl: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      ownerName,
      contactInfo,
      petName,
      petBreed,
      petAge,
      petVaccinationStatus,
      petPhotoUrl,
    } = formData;

    if (
      !ownerName ||
      !contactInfo ||
      !petName ||
      !petBreed ||
      !petAge ||
      !petVaccinationStatus ||
      !petPhotoUrl
    ) {
      setError("Please fill out all required fields.");
      return;
    }

    setError("");
    onSubmit(formData);
    alert("Pet submitted for adoption!");
    setFormData({
      ownerName: "",
      contactInfo: "",
      petName: "",
      petBreed: "",
      petAge: "",
      petVaccinationStatus: "",
      petHealthNotes: "",
      petPhotoUrl: "",
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "30px" }}>
      <Card>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Give Up Your Pet for Adoption
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Your Name"
                  name="ownerName"
                  fullWidth
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact Information"
                  name="contactInfo"
                  fullWidth
                  value={formData.contactInfo}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Pet's Name"
                  name="petName"
                  fullWidth
                  value={formData.petName}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Pet's Breed"
                  name="petBreed"
                  fullWidth
                  value={formData.petBreed}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Pet's Age (Years)"
                  name="petAge"
                  fullWidth
                  value={formData.petAge}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Vaccination Status"
                  name="petVaccinationStatus"
                  fullWidth
                  value={formData.petVaccinationStatus}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Health Notes (Optional)"
                  name="petHealthNotes"
                  fullWidth
                  value={formData.petHealthNotes}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Pet Photo URL"
                  name="petPhotoUrl"
                  fullWidth
                  value={formData.petPhotoUrl}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default GiveUpPetForm;
