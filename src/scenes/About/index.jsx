import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, Avatar, Link } from "@mui/material";
import { FaShieldAlt, FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";

const teamMembers = [
  { name: "Disha Dutta", avatar: "D", link: "https://www.linkedin.com/in/disha-dutta-748579275/" },
  { name: "Mridula Shrivastava", avatar: "M", link: "https://www.linkedin.com/in/mridula-shrivastava-724072253/" },
  { name: "Kumari Sonam", avatar: "K", link: "https://www.linkedin.com/in/kumari-sonam-693314251/" },
  { name: "Muskan Atray", avatar: "M", link: "https://www.linkedin.com/in/muskan-a-723032252/" },
  { name: "Praavinya Chaturvedi", avatar: "P", link: "https://www.linkedin.com/in/praavinya-chaturvedi/" },
];

const AboutScamify = () => {
  return (
    <Box sx={{ background: "linear-gradient(to right, #141e30, #243b55)", color: "white", py: 8 }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          About Us - Team <span style={{ color: "#00c6ff" }}>SCAMIFY</span>
        </Typography>

        {/* What is Scamify */}
        <Card sx={{ my: 4, p: 4, boxShadow: 5, borderRadius: 4, background: "#1e293b", color: "white" }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              What is SCAMIFY?
            </Typography>
            <Typography fontSize={18}>
              With the rapid growth of the internet, digital fraud has become more sophisticated, making it harder for users to differentiate between genuine and fraudulent platforms.
            </Typography>
            <Typography fontSize={18} mt={2}>
              Thus, WE, a team of passionate B.Tech IT students, developed SCAMIFY, a project aimed at identifying and preventing online scams.
            </Typography>
          </CardContent>
        </Card>

        {/* Our Motive */}
        <Card sx={{ my: 4, p: 4, boxShadow: 5, borderRadius: 4, background: "#1e293b", color: "white" }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Our Motive
            </Typography>
            <Typography fontSize={18}>
              SCAMIFY is driven by our commitment to creating a safer digital space. Our platform acts as a protective tool, helping individuals make informed decisions while browsing.
            </Typography>
          </CardContent>
        </Card>

        {/* Features */}
        <Grid container spacing={4} mt={5}>
          {[
            { title: "User-Friendly", icon: <FaUsers />, desc: "No technical knowledge required; accessible to all." },
            { title: "Effective", icon: <FaShieldAlt />, desc: "Uses structured methods to detect scams and warn users." },
            { title: "Preventive Tool", icon: <FaLightbulb />, desc: "Aims to educate and protect users before they fall victim." },
            { title: "Digital Safety", icon: <FaGlobe />, desc: "Helps create a well-informed online community." },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: "center", p: 4, boxShadow: 4, borderRadius: 3, background: "#0f172a", color: "white" }}>
                <Typography variant="h4" color="#00c6ff" mb={1}>{feature.icon}</Typography>
                <Typography variant="h6" fontWeight="bold">{feature.title}</Typography>
                <Typography mt={1} fontSize={16}>{feature.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

                {/* Meet the Team */}
          <Box textAlign="center" my={6}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
              Meet Our Team
            </Typography>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item key={index} xs={6} sm={4} md={3} lg={2} textAlign="center">
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Avatar sx={{ bgcolor: "#00c6ff", width: 90, height: 90, fontSize: 30 }}>
                    {member.avatar}
                  </Avatar>
                  <Typography mt={2} fontWeight="bold" fontSize={18}>
                    <Link 
                      href={member.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      color="#00c6ff" 
                      underline="hover"
                    >
                      {member.name}
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>


        {/* Our Vision */}
        <Card sx={{ my: 4, p: 4, boxShadow: 5, borderRadius: 4, background: "#1e293b", color: "white" }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Our Vision
            </Typography>
            <Typography fontSize={18}>
              SCAMIFY is more than just a project—it’s a step towards a safer internet. Our goal is to continuously improve through research and innovation, empowering individuals to protect themselves online.
            </Typography>
          </CardContent>
        </Card>

        {/* Stay Safe */}
        <Box textAlign="center" mt={6}>
          <Typography variant="h4" fontWeight="bold" color="#00c6ff">
            Stay Safe with SCAMIFY
          </Typography>
          <Typography variant="h6" mt={2}>
            In a world where cyber threats evolve constantly, SCAMIFY ensures you can browse the internet with confidence.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutScamify;
