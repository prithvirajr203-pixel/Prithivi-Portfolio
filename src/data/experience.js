export const experience = [
  {
    id: "nitttr",
    organization: "NITTTR",
    role: "AI Research Intern",
    period: "",
    focus: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "YOLOv8",
      "OpenCV",
      "MediaPipe",
      "Object Detection",
      "Model Evaluation",
    ],
    description:
      "Worked on applied machine learning and computer vision research, covering object detection and model evaluation.",
    project: "Underwater Fish Species Tracking",
    projectDescription:
      "Built a real-time multi-fish tracking system for underwater video, inspired by the ByteTrack algorithm. The system addresses camera motion from water currents, frequent occlusion, poor visibility, and the near-identical appearance of fish within a species — conditions where traditional tracking methods break down.",
    highlights: [
      "Two-stage Global Motion Compensation (sparse Lucas-Kanade + dense Farneback optical flow) to cancel out camera-induced movement from water currents",
      "ByteTrack-inspired two-stage confidence matching — high-confidence detections (≥0.50) for primary tracking, low-confidence detections (≥0.25) to recover fish identities through occlusion",
      "Kalman filter with a four-state model (position + velocity) for trajectory prediction and smoothing",
      "Pure geometric matching via the Hungarian algorithm, combining IoU (70%) and normalized distance (30%) — no appearance bias, so visually identical fish are still tracked correctly",
      "Outputs annotated video with ID labels, movement trails, and camera-motion indicators",
    ],
    reasonCodes: [
       "YOLOv8m", 
       "Lucas-Kanade", 
      "Farneback", 
      "Kalman Filter", 
       "Hungarian Algorithm", 
    ]
  },
  {
    id: "flyrank",
    organization: "FlyRank",
    role: "ML Internship / ML Project Experience",
    period: "",
    project: "Lane Content Refresh Prioritization",
    description:
      "Built a machine learning workflow to identify content that went dark and prioritize pages for refresh.",
    data: {
      februaryRecords: "153,559",
      contentRecords: "519,606",
      eligiblePages: "29,700",
      finalLabeledExamples: "29,353",
      wentDarkPages: "1,159",
      wentDarkRate: "3.95%",
      training: "23,482",
      testing: "5,871",
    },
    models: [
      {
        name: "Logistic Regression",
        results: { "Balanced F1": "0.1642", "PR-AUC": "0.1323", "ROC-AUC": "0.827" },
      },
      {
        name: "HistGradientBoosting",
        results: { "PR-AUC": "0.2189", "ROC-AUC": "0.87" },
      },
    ],
    reasonCodes: ["DECAY", "LOW_CTR", "PERFORMANCE_DROP", "OPPORTUNITY"],
  },
];