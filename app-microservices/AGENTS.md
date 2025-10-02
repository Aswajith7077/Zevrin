<!-- tech-stack configuration start -->

## Overview

This monorepo is built using **Nx** and follows a **NestJS microservices architecture**.
Communication and testing are organized as follows:

- **gRPC**: For inter-service communication between microservices.
- **REST API**: Exposed through `api-gateway`.
- **Jest**: Unit and end-to-end testing.
- **Continue MCP**: VSCode client for managing tasks and live testing.
- **Linting**: No lint errors should exist; agents should iterate over and fix any if found.

---

## Folder Structure

```
apps/
  ├─ <microservice-name>/         # Microservice code
  ├─ <microservice-name>-e2e/     # End-to-End tests

proto/                             # gRPC schema definitions
  └─ *.proto

types/proto/                        # Generated TypeScript types via ts-proto
  └─ *.ts
```

---

## How Agents Should Work

1. **Service Access**

   - Each microservice exposes gRPC methods defined in `proto/`.
   - Agents can call these methods or use `api-gateway` REST endpoints.

2. **Type Safety**

   - All `.proto` files are compiled into TypeScript types in `types/proto/`.
   - Agents should use these types for request/response structures.

3. **Testing**

   - Unit tests: `nx test <microservice-name>`
   - E2E tests: `nx e2e <microservice-name>-e2e`
   - Always run tests through Nx commands to respect dependencies and caching.

4. **Linting**

   - No lint errors should exist.
   - Agents must iterate over and fix any lint errors found before committing or running other tasks.
   - Example command: `nx lint <microservice-name>`

5. **Development Workflow**

   - Tasks should be run via Nx CLI (`nx run`, `nx run-many`, `nx affected`).
   - Avoid direct calls to NestJS CLI or Jest outside Nx.

## Summary for AI Agents

- **Microservices** → NestJS + gRPC
- **API Gateway** → REST interface
- **Types** → Generated TS types from proto
- **Tests** → Jest (unit + e2e)
- **Orchestration** → Nx monorepo + Continue MCP for task execution

> Agents can interact with services safely by following proto types and Nx task commands.

<!-- tech-stack configuration ends -->

<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- You have access to the Nx MCP server and its tools, use them to help the user
- When answering questions about the repository, use the `nx_workspace` tool first to gain an understanding of the workspace architecture where applicable.
- When working in individual projects, use the `nx_project_details` mcp tool to analyze and understand the specific project structure and dependencies
- For questions around nx configuration, best practices or if you're unsure, use the `nx_docs` tool to get relevant, up-to-date docs. Always use this instead of assuming things about nx configuration
- If the user needs help with an Nx configuration or project graph error, use the `nx_workspace` tool to get any errors

# CI Error Guidelines

If the user wants help with fixing an error in their CI pipeline, use the following flow:

- Retrieve the list of current CI Pipeline Executions (CIPEs) using the `nx_cloud_cipe_details` tool
- If there are any errors, use the `nx_cloud_fix_cipe_failure` tool to retrieve the logs for a specific task
- Use the task logs to see what's wrong and help the user fix their problem. Use the appropriate tools if necessary
- Make sure that the problem is fixed by running the task that you passed into the `nx_cloud_fix_cipe_failure` tool

<!-- nx configuration end-->
