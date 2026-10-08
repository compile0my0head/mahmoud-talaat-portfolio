---
title: "Clash-Driven Wall Openings"
tool: "Dynamo"
order: 1
enabled: true
slug: "clash-wall-openings"
demoUrl: "https://lnkd.in/p/eg-tnM5T"
video: "assets/videos/beam_wall_cutter_1.mp4"
images:
  - path: "assets/images/automation/a1-clash/ex2-1.webp"
    alt: "Beam-wall intersection conflict before automation"
  - path: "assets/images/automation/a1-clash/ex2-3.webp"
    alt: "Clean result after running the Dynamo script"
  - path: "assets/images/automation/a1-clash/ex2-4.webp"
    alt: "Detailed view of parametric void families placed at intersections"
  - path: "assets/images/automation/a1-clash/ex2-5.webp"
    alt: "Scale of resolution across the full project"
  - path: "assets/images/automation/a1-clash/script.webp"
    alt: "Dynamo script graph for clash-driven wall openings"
---

**Problem:** Revit cannot join linked-model elements to host walls, leaving beam-wall intersections unresolved in documentation.

**Solution:** A Dynamo script finds every beam-wall intersection on a chosen level and places one parametric void family per unique beam, cutting every wall the beam crosses.

**Result:** Quantities and schedules become accurate without manual editing.
