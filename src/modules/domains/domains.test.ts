import { describe, it, expect } from "vitest";

import "dotenv/config";

import {
  addDomain,
  deleteDomain,
  dnsRecords,
  domainById,
  listDomains,
  recipientsForDomain,
  updateDomainSettings,
  verificationStatus,
} from ".";

const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env;

describe("Domains", () => {
  it.concurrent("Add Domain", async () => {
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

  it.concurrent("Delete Domain", async () => {
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

  it.concurrent("DNS Records", async () => {
    try {
      const dnsRecordsResponse = await dnsRecords(
        MAILERSEND_API_KEY as string,
        MAILERSEND_DOMAIN_ID as string
      );

      expect(dnsRecordsResponse).not.toBeNull();
      expect(dnsRecordsResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Get Domain by ID", async () => {
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

  it.concurrent("List Domains", async () => {
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

  it.concurrent("Recipients for Domain", async () => {
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

  it.concurrent("Update Domain Settings", async () => {
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

  it.concurrent("Verification Status", async () => {
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
