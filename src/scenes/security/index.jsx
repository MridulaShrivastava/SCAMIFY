import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Rating,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";

// Custom Styling for Dark Mode
const FormContainer = styled(Box)({
  maxWidth: 500,
  margin: "auto",
  padding: "20px",
  background: "#1e1e1e", // Dark background
  boxShadow: "0 4px 10px white",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  color: "#ffffff", // White text for better contrast
});

const StyledTextField = styled(TextField)({
  "& label": { color: "#b3b3b3" }, // Light grey labels
  "& input, & textarea": { color: "#ffffff" }, // White input text
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#444" }, // Dark grey border
    "&:hover fieldset": { borderColor: "#888" }, // Light grey hover effect
    "&.Mui-focused fieldset": { borderColor: "#1976d2" }, // Highlight focus
  },
});

const StyledButton = styled(Button)({
  backgroundColor: "#1976d2", // Primary blue
  color: "#ffffff",
  "&:hover": { backgroundColor: "#1565c0" }, // Slightly darker on hover
});

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    setOpenSnackbar(true);
    setFormData({ name: "", email: "", rating: 0, feedback: "" }); // Reset form
  };

  return (
    <Container sx={{ backgroundColor: "#121212", minHeight: "100vh", paddingTop: "30px" }}>
      <FormContainer>
        <Typography variant="h5" align="center" gutterBottom sx={{ color: "#ffffff" }}>
          Feedback Form
        </Typography>
        
        {/* Name Field */}
        <StyledTextField
          label="Your Name"
          name="name"
          variant="outlined"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
        />

        {/* Email Field */}
        <StyledTextField
          label="Your Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          required
          value={formData.email}
          onChange={handleChange}
        />

        {/* Rating */}
        <Box display="flex" alignItems="center">
          <Typography variant="body1" sx={{ mr: 2, color: "#ffffff" }}>Rate Us:</Typography>
          <Rating
            name="rating"
            value={formData.rating}
            onChange={(event, newValue) => {
              setFormData({ ...formData, rating: newValue });
            }}
          />
        </Box>

        {/* Feedback Field */}
        <StyledTextField
          label="Your Feedback"
          name="feedback"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          value={formData.feedback}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <StyledButton fullWidth onClick={handleSubmit}>
          Submit Feedback
        </StyledButton>

        {/* Snackbar for Confirmation */}
        <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
          <Alert severity="success" sx={{ width: "100%", backgroundColor: "#2e7d32", color: "#ffffff" }}>
            Feedback Submitted Successfully!
          </Alert>
        </Snackbar>
      </FormContainer>
    </Container>
  );
};

export default FeedbackForm;
