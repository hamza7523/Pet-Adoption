import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

function AdminPanel({ requests, onRequestUpdate }) {
  const handleApprove = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = "Approved";
    onRequestUpdate(updatedRequests);
  };

  const handleReject = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = "Rejected";
    onRequestUpdate(updatedRequests);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Adoption Requests
      </Typography>
      {requests && requests.length > 0 ? (
        requests.map((request, index) => (
          <Card key={index} sx={{ marginBottom: "15px" }}>
            <CardContent>
              <Typography variant="h6">Adopter Name: {request.name}</Typography>
              <Typography variant="body1">Email: {request.email}</Typography>
              <Typography variant="body1">Pet: {request.pet.name}</Typography>
              <Typography variant="body2">
                Message: {request.message || "No message provided"}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Status: {request.status || "Pending"}
              </Typography>
              <Box sx={{ marginTop: "10px" }}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleApprove(index)}
                  sx={{ marginRight: "10px" }}
                >
                  Approve
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleReject(index)}
                >
                  Reject
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography align="center">No adoption requests yet.</Typography>
      )}
    </Box>
  );
}

export default AdminPanel;
