import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

export default function CardCountry(props) {
  // const theme = useTheme();
  const { country } = props;
  return (
    <Box sx={{ width: "97%", marginTop: 5 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {country
          ? Object.values(country).map((country, index) => (
              <Grid item xs={6} key={index}>
                <Card sx={{ display: "flex", backgroundColor: "primary.dark" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Link  to={`/country/${country.id}`}>
                        <Typography color={"white"} component="div" variant="h5">
                          {country.name}
                        </Typography>
                      </Link>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Infection:{" "}
                        {Number(country.today_confirmed).toLocaleString()}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            ))
          : ""}
      </Grid>
    </Box>
  );
}
