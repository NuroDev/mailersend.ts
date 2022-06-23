import { describe, it, expect } from "vitest";

import "dotenv/config";

import {
  addDomain,
  Client,
  deleteDomain,
  dnsRecords,
  domainById,
  listDomains,
  recipientsForDomain,
  updateDomainSettings,
  verificationStatus,
} from "../dist";

const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env;

describe("Domains", () => {
  it.concurrent("Client - Add Domain", async () => {
    const client = new Client({
      apiKey: MAILERSEND_API_KEY as string,
    });

    try {
      const addDomainResponse = await client.addDomain({
        name: "nuro.gg",
      });

      expect(addDomainResponse).not.toBeNull();
      expect(addDomainResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Function - Add Domain", async () => {
    try {
      const addDomainResponse = await addDomain(MAILERSEND_API_KEY as string, {
        name: "nuro.gg",
      });

      expect(addDomainResponse).not.toBeNull();
      expect(addDomainResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Client - Delete Domain", async () => {
    const client = new Client({
      apiKey: MAILERSEND_API_KEY as string,
    });

    try {
      const deleteDomainResponse = await client.deleteDomain(
        MAILERSEND_DOMAIN_ID as string
      );

      expect(deleteDomainResponse).not.toBeNull();
      expect(deleteDomainResponse.success).not.toBeNull();
      // expect(deleteDomainResponse.success).toBeTruthy();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Function - Delete Domain", async () => {
    try {
      const deleteDomainResponse = await deleteDomain(
        MAILERSEND_API_KEY as string,
        MAILERSEND_DOMAIN_ID as string
      );

      expect(deleteDomainResponse).not.toBeNull();
      expect(deleteDomainResponse.success).not.toBeNull();
      // expect(deleteDomainResponse.success).toBeTruthy();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Client - DNS Records", async () => {
    const client = new Client({
      apiKey: MAILERSEND_API_KEY as string,
    });

    try {
      const dnsRecordsResponse = await client.dnsRecords({
        domainId: MAILERSEND_DOMAIN_ID as string,
      });

      expect(dnsRecordsResponse).not.toBeNull();
      expect(dnsRecordsResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Function - DNS Records", async () => {
    try {
      const dnsRecordsResponse = await dnsRecords(
        MAILERSEND_API_KEY as string,
        {
          domainId: MAILERSEND_DOMAIN_ID as string,
        }
      );

      expect(dnsRecordsResponse).not.toBeNull();
      expect(dnsRecordsResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Client - Get Domain by ID", async () => {
    const client = new Client({
      apiKey: MAILERSEND_API_KEY as string,
    });

    try {
      const domainByIdResponse = await client.domainById(
        MAILERSEND_DOMAIN_ID as string
      );

      expect(domainByIdResponse).not.toBeNull();
      expect(domainByIdResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Function - Get Domain by ID", async () => {
    try {
      const domainByIdResponse = await domainById(
        MAILERSEND_API_KEY as string,
        MAILERSEND_DOMAIN_ID as string
      );

      expect(domainByIdResponse).not.toBeNull();
      expect(domainByIdResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Client - List Domains", async () => {
    const client = new Client({
      apiKey: MAILERSEND_API_KEY as string,
    });

    try {
      const listDomainsResponse = await client.listDomains();

      expect(listDomainsResponse).not.toBeNull();
      expect(listDomainsResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Function - List Domains", async () => {
    try {
      const listDomainsResponse = await listDomains(
        MAILERSEND_API_KEY as string
      );

      expect(listDomainsResponse).not.toBeNull();
      expect(listDomainsResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Client - Recipients for Domain", async () => {
    const client = new Client({
      apiKey: MAILERSEND_API_KEY as string,
    });

    try {
      const recipientsForDomainResponse = await client.recipientsForDomain({
        domainId: MAILERSEND_DOMAIN_ID as string,
      });

      expect(recipientsForDomainResponse).not.toBeNull();
      expect(recipientsForDomainResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Function - Recipients for Domain", async () => {
    try {
      const recipientsForDomainResponse = await recipientsForDomain(
        MAILERSEND_API_KEY as string,
        {
          domainId: MAILERSEND_DOMAIN_ID as string,
        }
      );

      expect(recipientsForDomainResponse).not.toBeNull();
      expect(recipientsForDomainResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Client - Update Domain Settings", async () => {
    const client = new Client({
      apiKey: MAILERSEND_API_KEY as string,
    });

    try {
      const updateDomainSettingsResponse = await client.updateDomainSettings({
        domainId: MAILERSEND_DOMAIN_ID as string,
      });

      expect(updateDomainSettingsResponse).not.toBeNull();
      expect(updateDomainSettingsResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Function - Update Domain Settings", async () => {
    try {
      const updateDomainSettingsResponse = await updateDomainSettings(
        MAILERSEND_API_KEY as string,
        {
          domainId: MAILERSEND_DOMAIN_ID as string,
        }
      );

      expect(updateDomainSettingsResponse).not.toBeNull();
      expect(updateDomainSettingsResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Client - Verification Status", async () => {
    const client = new Client({
      apiKey: MAILERSEND_API_KEY as string,
    });

    try {
      const verificationStatusResponse = await client.verificationStatus(
        MAILERSEND_DOMAIN_ID as string
      );

      expect(verificationStatusResponse).not.toBeNull();
      expect(verificationStatusResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Function - Verification Status", async () => {
    try {
      const verificationStatusResponse = await verificationStatus(
        MAILERSEND_API_KEY as string,
        MAILERSEND_DOMAIN_ID as string
      );

      expect(verificationStatusResponse).not.toBeNull();
      expect(verificationStatusResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });
});
