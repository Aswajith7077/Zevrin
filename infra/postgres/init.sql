-- Create a dedicated application user
CREATE ROLE appuser WITH LOGIN PASSWORD 'app123';

-- Grant connection privileges on the default database
GRANT CONNECT ON DATABASE main TO appuser;

-- Grant privileges on schema and objects (once microservices create them)
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO appuser;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO appuser;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO appuser;

-- Optional: create schemas for each microservice
CREATE SCHEMA IF NOT EXISTS payments AUTHORIZATION appuser;
CREATE SCHEMA IF NOT EXISTS users AUTHORIZATION appuser;
CREATE SCHEMA IF NOT EXISTS notifications AUTHORIZATION appuser;
CREATE SCHEMA IF NOT EXISTS auth AUTHORIZATION appuser;
