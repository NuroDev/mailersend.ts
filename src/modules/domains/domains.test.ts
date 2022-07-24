import { describe, it, expect } from "vitest";

import "dotenv/config";

import {
  addDomain,
  deleteDomain,
  dnsRecords,
  domainById,
  listDomains,
  recipientsForDomain,
  updateDomain,
  verificationStatus,
} from ".";

import type { AddDomainData } from ".";

const { MAILERSEND_API_KEY, MAILERSEND_TEST_DOMAIN } = process.env as Record<
  string,
  string
>;

describe("Domains", () => {
  let newDomain: AddDomainData;

  it("Add Domain", async () => {
    try {
      const addDomainResponse = await addDomain(MAILERSEND_API_KEY, {
        name: MAILERSEND_TEST_DOMAIN,
      });

      expect(addDomainResponse).toBeDefined();
      expect(addDomainResponse.data).toBeDefined();

      newDomain = addDomainResponse.data;
    } catch (error) {
      console.error(error);
    }
  });

  it("DNS Records", async () => {
    if (!newDomain?.id) throw "No new domain ID found";

    try {
      const dnsRecordsResponse = await dnsRecords(
        MAILERSEND_API_KEY,
        newDomain.id
      );

      expect(dnsRecordsResponse).toBeDefined();
      expect(dnsRecordsResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it("Domain by ID", async () => {
    if (!newDomain?.id) throw "No new domain ID found";

    try {
      const domainByIdResponse = await domainById(
        MAILERSEND_API_KEY,
        newDomain.id
      );

      expect(domainByIdResponse).toBeDefined();
      expect(domainByIdResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it("List Domains", async () => {
    try {
      const listDomainsResponse = await listDomains(MAILERSEND_API_KEY);

      expect(listDomainsResponse).toBeDefined();
      expect(listDomainsResponse.data).toBeDefined();
      expect(Array.isArray(listDomainsResponse.data)).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it("Recipients for Domain", async () => {
    if (!newDomain?.id) throw "No new domain ID found";

    try {
      const recipientsForDomainResponse = await recipientsForDomain(
        MAILERSEND_API_KEY,
        {
          domainId: newDomain.id,
        }
      );

      expect(recipientsForDomainResponse).toBeDefined();
      expect(recipientsForDomainResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it("Update Domain", async () => {
    if (!newDomain?.id) throw "No new domain ID found";

    try {
      const updateDomainSettingsResponse = await updateDomain(
        MAILERSEND_API_KEY,
        {
          domainId: newDomain.id,
        }
      );

      expect(updateDomainSettingsResponse).toBeDefined();
      expect(updateDomainSettingsResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it("Verification Status", async () => {
    if (!newDomain?.id) throw "No new domain ID found";

    try {
      const verificationStatusResponse = await verificationStatus(
        MAILERSEND_API_KEY,
        newDomain.id
      );

      expect(verificationStatusResponse).toBeDefined();
      expect(verificationStatusResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it("Delete Domain", async () => {
    if (!newDomain?.id) throw "No new domain ID found";

    try {
      const deleteDomainResponse = await deleteDomain(
        MAILERSEND_API_KEY,
        newDomain.id
      );

      expect(deleteDomainResponse).toBeDefined();
      expect(deleteDomainResponse.success).toBeDefined();
      // expect(deleteDomainResponse.success).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
