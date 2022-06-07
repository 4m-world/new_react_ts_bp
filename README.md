# FULLSTACK TEMPLATE

## Project Title

Short description of the project: vision, purpose, company, etc

Table of contents:

- [Links](#links)
- [Usage](#usage)
- [Contacts](#contacts)
- [Responsibilities](#responsibilities)
- [Intellectual property rights](#intellectual-property-rights)
- [Manually configured settings](#manually-configured-settings)
- [Recurring issues and solutions](#recurring-issues-and-solutions)
- [Miscellaneous notes](#miscellaneous-notes)
- [Conventions](#conventions)
- [Architecture Overview](#architecture-overview)
- [Security](#security)
- [Compliance](#compliance)

## Links

Non-production basic auth credentials: `USERNAME` / `PASSWORD`

LINKS WILL BE PLACED HERE

## Usage

> Some notes about testing and usage either here or in a separate document.

## Contacts

- Project Manager: {Name, Compan}.
- Designer: {Name, Compan}.

> NOTE: It is recommended to use a shared address book or CRM for keeping the contact details like email and phone number up-to-date.

## Responsibilities

Hosting, billing and control of 3rd party services, SSL/TLS certificates, etc.

## Intellectual property rights

> IPR ownership. Also update the LICENSE file. TODO license examples

## Manually configured settings

> Try to keep all configurations in version control. However, if you have configured something manually, describe manually configured settings here.

## Recurring issues and solutions

See trouble.txt or run `taito trouble`.

## Miscellaneous notes

Misc notes.

## Conventions

Project specific conventions.

## Architecture Overview

DIAGRAM: You can use [Gravizo](https://www.gravizo.com) for making a architecture diagram if the diagram does not contain any confidential information. Note that architecture diagram is not mandatory if the architecture is very simple.

### Integrations

- Client uses Google Maps
- Server uses system X for authorization (OAUTH)
- Server fetches products from system Y (REST/json)
- Server sends email using Sendgrid (REST/json)

### Processes

Only non-trivial processes need to be described here (e.g. scheduled batch processing), though it might be a good idea to describe one or two basic scenarios also. Architecture is the main focus here. User stories should be documented elsewhere (e.g. wiki).

#### Basic Scenario

1. User performs action on UI
2. Server authorizes action by system X
3. Server reads/updates database
4. Server returns value

#### Product Snapshots

1. User performs action on UI
2. Server adds message to queue
3. ...
4. ...
5. Server sends email

#### Scheduled Jobs

- ...
- ...

## Security

> Add security details either here or in a separate document.

## Compliance

> Add compliance requirements and implementation details either here or in a separate document

### GDPR
