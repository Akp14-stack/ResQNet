# ResQNet Agent Guidelines & Project Structure

Welcome to the AI Agent workspace configuration for ResQNet. Any AI agent operating within this workspace must adhere to the rules, structure, and technical decisions documented below.

## Project Structure Overview

ResQNet is an AI-Powered Integrated Disaster Management & Emergency Response Platform. The project uses a **Monorepo** structure.

### 1. Backend (`src/backend/`)
- ASP.NET Core Microservices architecture.
- **IdentityService**: Authentication (JWT), Users, Roles (Admin, NGO, Citizen).
- **CoreDisasterService**: CRUD for Disasters, SOS Reports, Rescue Missions, Resources.
- **GeoDataService**: GIS Mapping (PostGIS), Risk Zones, Evacuation Routes, Weather integrations.
- **NotificationService**: Real-time alerts using SignalR, email/SMS push notifications.
- **Shared**: Common DTOs, EventBus, Exception handling used across microservices.
- **ApiGateway**: Central Ocelot/YARP gateway for routing client requests to the appropriate microservice.

### 2. Frontend (`src/frontend/`)
- Next.js and React-based web applications.
- **admin-portal**: The central management dashboard for ResQNet Administrators to manage master data, NGOs, and global monitoring.
- **ngo-portal**: Operational dashboard for verified NGOs to handle SOS cases, missions, and resources.
- **public-website**: A public-facing emergency website displaying active warnings and safe zones (read-only).
- **shared-ui**: Shared React components (TailwindCSS/vanilla CSS), utility functions.

### 3. Mobile (`src/mobile/`)
- **citizen-app**: React Native application for citizens to send SOS, view alerts, and locate shelters/hospitals via GPS.

### 4. AI Engine (`src/ai-engine/`)
- **api**: FastAPI endpoints for exposing ML models.
- **models**: Trained Scikit-learn/PyTorch models for flood risk prediction and image classification.
- **notebooks**: Jupyter notebooks for data analysis and model training.

### 5. Infrastructure & DevOps (`infra/` & `.github/`)
- **docker**: `docker-compose.yml` for local development setup (Postgres + PostGIS + microservices).
- **terraform / k8s**: Scripts for cloud provisioning and Kubernetes deployment.
- **.github/workflows**: CI/CD pipelines.

## Agent Working Rules
1. **Context Awareness**: Always check which service/app you are modifying. Ensure changes in one microservice do not break the API contract expected by the Gateway or Frontend.
2. **Language/Tech Stack Consistency**:
   - Backend: C# (ASP.NET Core), Entity Framework Core, PostgreSQL (PostGIS).
   - Frontend: TypeScript, React, Next.js.
   - Mobile: TypeScript, React Native.
   - AI: Python, FastAPI.
3. **Beautiful UI**: When modifying frontend portals, adhere to modern, responsive, and visually appealing design standards (e.g., proper use of whitespace, responsive grid, dynamic animations).
4. **No Direct Database Access from Frontend**: Frontend applications must ONLY interact with the backend via the `ApiGateway`.
5. **Ask for Clarification**: If a feature spans multiple microservices, confirm the communication strategy (synchronous REST vs asynchronous EventBus) with the user before implementing.
