
# Crop Health Analyzer

Pipeline for analysing drone imagery to detect crop stress and nutrient deficiencies. The demo processes small sample images to produce field-level heatmaps and suggested intervention zones.

Features

- Preprocessing of drone images and NDVI index computation
- Model inference for stress detection (mocked weights)
- Field-level heatmaps and downloadable geo-annotations
- Simple web UI for reviewing affected areas

Tech stack

- Python preprocessing scripts (example code included)
- Lightweight TensorFlow.js model for demo inference in the browser
- React UI to visualise heatmaps and overlays

Note

This is a prototype for visualising analysis results and is not intended for operational agronomy decisions.
