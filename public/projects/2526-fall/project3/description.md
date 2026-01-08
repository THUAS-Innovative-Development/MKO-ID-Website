
# Water Quality Monitor

IoT dashboard for aggregating and visualising water sensor data. The system demonstrates ingestion of time-series pH, turbidity and temperature values and generates alerts when readings cross thresholds.

Features

- Live and historical charts per sensor
- Automated anomaly detection with email-style alerts (mock)
- Map view of sensor locations with status indicators
- Downloadable reports (CSV)

Tech stack

- React + Chart.js for visualisations
- Mock MQTT/HTTP feed for sensor data
- Small Express server to serve example datasets

Use case

This demo helps test visualisation patterns and alerting logic for small-scale water monitoring networks.
