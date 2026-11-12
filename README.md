# devsecops-assignment-1

**Student:** Abenezer Tesfaye  
**Student Number:** [Your Student Number]

## Description

This repository is the practical submission for Assignment One of the DevSecOps course.
It demonstrates a basic Node.js application structure, proper use of environment variables,
and a Git workflow that follows DevSecOps best practices: secrets are never committed,
a feature branch is used for new work, and changes are merged via a pull request.

## Project Structure

```
devsecops-assignment-1/
├── app/
│   └── index.js          # Entry point – prints APP_NAME and PORT from config
├── config/
│   └── env.js            # Reads environment variables and exports them as one object
├── .env.example          # Variable names with no values – safe to commit
├── .gitignore            # Excludes .env, node_modules, logs
└── README.md             # This file
```

## Setup

```bash
# 1. Copy the example env file and fill in your own values
cp .env.example .env

# 2. Install dependencies
npm install

# 3. Run the app
node app/index.js
```

## Notes

- `.env` is listed in `.gitignore` and is never committed.
- `DATABASE_URL` and `SMS_API_KEY` are loaded by `config/env.js` but are intentionally
  not printed by `app/index.js` to avoid leaking sensitive values to logs.
