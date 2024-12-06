import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Modal,
} from "@mui/material";
import AdoptionForm from "./Adoptionform";
import PetDetailsModal from "./PetDetailsModal";

import "./styles.css"; // Create a separate CSS file for animations

function Home({ onRequestSubmit =()=>{}}) {

  const [openForm, setOpenForm] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleFormOpen = (pet) => {
    setSelectedPet(pet);
    setOpenForm(true);
  };

  const handleFormClose = () => {
    setOpenForm(false);
    setSelectedPet(null);
  };

  const handleDetailsOpen = (pet) => {
    setSelectedPet(pet);
    setOpenDetails(true);
  };

  const handleDetailsClose = () => {
    setOpenDetails(false);
    setSelectedPet(null);
  };

  const pets = [
    {
      id: 1,
      name: "Luna",
      image:
        "https://images.unsplash.com/photo-1518887499460-71d222eed89d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D",
      age: 3,
      breed: "Husky",
      vaccinationStatus: "Fully vaccinated",
      healthNotes: "Energetic and loves the snow.",
    },
    {
      id: 2,
      name: "Max",
      image:
        "https://images.unsplash.com/photo-1526526431900-88eb525f1e4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0c3xlbnwwfHwwfHx8MA%3D%3D",
      age: 2,
      breed: "Beagle",
      vaccinationStatus: "Partially vaccinated",
      healthNotes: "Very playful and friendly.",
    },
    {
      id: 3,
      name: "Charlie",
      image:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      age: 5,
      breed: "Golden Retriever",
      vaccinationStatus: "Up to date",
      healthNotes: "Calm and great with kids.",
    },
    {
      id: 4,
      name: "Bella",
      image:
        "https://plus.unsplash.com/premium_photo-1702555824953-2f67f6fbd1c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGV0fGVufDB8fDB8fHww",
      age: 4,
      breed: "Poodle",
      vaccinationStatus: "Fully vaccinated",
      healthNotes: "Loves to be groomed and pampered.",
    },
    {
      id: 5,
      name: "Rocky",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      age: 3,
      breed: "Shih Tzu",
      vaccinationStatus: "Partially vaccinated",
      healthNotes: "Loyal and loves cuddles.",
    },
    {
      id: 6,
      name: "Daisy",
      image:
        "https://plus.unsplash.com/premium_photo-1700403586581-4aa6b8640492?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBldHxlbnwwfHwwfHx8MA%3D%3D",
      age: 2,
      breed: "Cocker Spaniel",
      vaccinationStatus: "Up to date",
      healthNotes: "Playful and full of energy.",
    },
    {
      id: 7,
      name: "Cooper",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      age: 4,
      breed: "Labrador",
      vaccinationStatus: "Fully vaccinated",
      healthNotes: "Great swimmer and loves fetch.",
    },
    {
      id: 8,
      name: "Milo",
      image:
        "https://images.unsplash.com/photo-1597581818244-7b94109eedd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      age: 1,
      breed: "Boxer",
      vaccinationStatus: "Partially vaccinated",
      healthNotes: "Very active and needs training.",
    },
    {
      id: 9,
      name: "Zoey",
      image:
        "https://images.unsplash.com/photo-1556228710-325191f6684f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      age: 3,
      breed: "Bulldog",
      vaccinationStatus: "Up to date",
      healthNotes: "Loves to lounge and relax.",
    },
    {
      id: 10,
      name: "Lilly",
      image:
        "https://images.unsplash.com/photo-1601758123927-196d3ef9f9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      age: 5,
      breed: "German Shepherd",
      vaccinationStatus: "Fully vaccinated",
      healthNotes: "Highly intelligent and obedient.",
    },
  ];
  
  



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cardsSection = document.querySelector("#pet-cards-section");
    if (cardsSection) observer.observe(cardsSection);

    return () => {
      if (cardsSection) observer.unobserve(cardsSection);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          backgroundImage: `url('https://t3.ftcdn.net/jpg/07/06/99/66/240_F_706996604_gJwDZH3g2GV27TNdnHvUsmUsP7SzQody.jpg')`,
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundBlendMode:"color-dodge",
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
            textAlign: "center",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
<Typography
  variant="h2"
  style={{
    fontWeight: "bold",
    textShadow: "3px 3px 10px rgba(0, 0, 0, 0.8)",
    letterSpacing: "2px",
    marginBottom: "20px",
    color: "#FFD777", // Golden for a warm, vibrant look
  }}
>
  Find Your New Furry Best Friend!
</Typography>
<Typography
  variant="h6"
  style={{
    maxWidth: "600px",
    color: "#FFD777",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
    lineHeight: "1.6",
  }}
>
  Welcome to the Pet Adoption System, where unconditional love awaits you. 
  Explore adorable pets, each with a story, and give them a loving forever home. 
  Scroll down to meet your new furry companion!
</Typography>
</div>
      </div>

      {/* Pet Cards Section */}
      <div
        id="pet-cards-section"
        style={{
          padding: "40px 20px",
          backgroundColor: "#f5f5f5",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(100px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{
            fontWeight: "bold",
            color: "#333",
            marginBottom: "30px",
            letterSpacing: "2px",
          }}
        >
          Available Pets for Adoption
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {pets.map((pet) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={pet.id}>
              <Card
                className="fade-in-card"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "15px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={pet.image}
                  alt={pet.name}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", color: "#333" }}
                  >
                    {pet.name}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginRight: "10px" }}
                    onClick={() => handleFormOpen(pet)}
                  >
                    Adopt Me
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleDetailsOpen(pet)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Adoption Form Modal */}
        <Modal open={openForm} onClose={handleFormClose}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxWidth: "400px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <AdoptionForm
              onSubmit={(data) => {
                onRequestSubmit({ ...data, pet: selectedPet });
                handleFormClose();
              }}
              onClose={handleFormClose}
            />
          </div>
        </Modal>

        {/* Pet Details Modal */}
        <Modal open={openDetails} onClose={handleDetailsClose}>
          <PetDetailsModal pet={selectedPet} onClose={handleDetailsClose} />
        </Modal>
      </div>
    </div>
  );
}

export default Home;
